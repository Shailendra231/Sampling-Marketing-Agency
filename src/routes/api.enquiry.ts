import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";
import { MESSAGE_MAX } from "@/data/site";

/**
 * Enquiry intake. The browser posts here rather than straight to Google so the
 * Apps Script URL stays out of the client bundle — otherwise anyone reading the
 * JS could write rows into the sheet directly.
 *
 * Needs two values in the environment (see .dev.vars.example):
 *   SHEETS_WEBHOOK_URL    the Apps Script web app /exec URL
 *   SHEETS_WEBHOOK_TOKEN  shared secret, checked inside the script
 */

/** Mirrors FIELDS in components/site/EnquiryForm.tsx. Every bound is re-checked here because
 *  the `required` attributes on the form are a convenience, not a control. */
const EnquirySchema = z.object({
  enquiry: z.string().trim().min(1).max(120),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().min(1).email().max(200),
  // Optional: an email address is enough to reply to, and a forced phone
  // number is the field people abandon a form over.
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(MESSAGE_MAX),
  newsletter: z.boolean().default(false),
  /** Honeypot. Left unconstrained on purpose — a filled one is caught below and
   *  answered with success, so a validation error here would give the game away. */
  website: z.string().optional(),
});

const LABELS: Record<string, string> = {
  enquiry: "How we can help",
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  message: "Message",
};

/** Zod's defaults leak their internals ("String must contain at most 200
 *  character(s)"), so turn the first issue into something a visitor can act on. */
function firstProblem(error: z.ZodError): string {
  const issue = error.issues[0];
  if (!issue) return "Please check the form and try again.";

  const label = LABELS[String(issue.path[0])] ?? "That";
  if (issue.code === "too_big" && typeof issue.maximum === "number") {
    return `${label} must be ${issue.maximum} characters or fewer.`;
  }
  if (issue.code === "invalid_string" && issue.validation === "email") {
    return "Enter a valid email address.";
  }
  return `${label} is required.`;
}

/** Cloudflare hands bindings to the request, not to the module scope; nitro
 *  parks them on __env__ and unenv's shim reads process.env from the same place.
 *  Checking both keeps `vite dev` and the deployed Worker on one code path. */
function readEnv(key: string): string | undefined {
  const cfEnv = (globalThis as { __env__?: Record<string, string | undefined> }).__env__;
  return cfEnv?.[key] ?? process.env[key];
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const Route = createFileRoute("/api/enquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const endpoint = readEnv("SHEETS_WEBHOOK_URL");
        const token = readEnv("SHEETS_WEBHOOK_TOKEN");

        if (!endpoint || !token) {
          console.error("[enquiry] SHEETS_WEBHOOK_URL or SHEETS_WEBHOOK_TOKEN is missing");
          return json({ ok: false, error: "The form is not configured yet." }, 500);
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return json({ ok: false, error: "We could not read that submission." }, 400);
        }

        const parsed = EnquirySchema.safeParse(payload);
        if (!parsed.success) {
          return json({ ok: false, error: firstProblem(parsed.error) }, 400);
        }

        const { website, ...enquiry } = parsed.data;

        // Report success to a bot rather than an error, so it has no signal to
        // tune against. Nothing reaches the sheet.
        if (website) return json({ ok: true }, 200);

        let upstream: Response;
        try {
          upstream = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, ...enquiry, receivedAt: new Date().toISOString() }),
            // Apps Script answers a POST with a 302 to a single-use
            // googleusercontent.com URL that holds the actual body. Following
            // that automatically carries this request's headers onto the GET and
            // Google 404s it, so take the hop by hand with a clean request.
            redirect: "manual",
          });

          const hop = upstream.headers.get("location");
          if (upstream.status >= 300 && upstream.status < 400 && hop) {
            upstream = await fetch(hop);
          }
        } catch (error) {
          console.error("[enquiry] could not reach the sheet", error);
          return json({ ok: false, error: "We could not record that just now." }, 502);
        }

        // Apps Script answers 200 with an error body for things like a bad
        // token, so the status alone is not enough to call this a success.
        const raw = await upstream.text();
        let result: { ok?: boolean; error?: string } | null = null;
        try {
          result = JSON.parse(raw) as { ok?: boolean; error?: string };
        } catch {
          /* fall through to the check below */
        }

        if (!upstream.ok || !result?.ok) {
          console.error("[enquiry] sheet rejected the row", upstream.status, raw.slice(0, 300));
          return json({ ok: false, error: "We could not record that just now." }, 502);
        }

        return json({ ok: true }, 200);
      },
    },
  },
});
