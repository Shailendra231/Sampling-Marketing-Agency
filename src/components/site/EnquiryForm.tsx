import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, Check, Loader2, Mail, Phone, User } from "lucide-react";
import { MESSAGE_MAX } from "@/data/site";

/** One enquiry form, two hosts: the contact page renders it inline and the
 *  "Talk to us" dialog renders the same component. Keeping a single copy is the
 *  point — two forms posting the same shape would drift apart on the next edit. */

const FIELDS = [
  { id: "name", name: "name", label: "Name", type: "text", ac: "name", Icon: User },
  { id: "email", name: "email", label: "Email", type: "email", ac: "email", Icon: Mail },
  {
    id: "phone",
    name: "phone",
    label: "Phone",
    type: "tel",
    ac: "tel",
    Icon: Phone,
    optional: true,
  },
  {
    id: "company",
    name: "company",
    label: "Company",
    type: "text",
    ac: "organization",
    Icon: Building2,
  },
];

/** Well chrome. Fill alone cannot separate a field from its panel on this ground
 *  (max 1.19:1), so the border carries it; focus adds a soft green bloom rather
 *  than a hard ring, which reads calmer against a dark surface. */
const wellCls =
  "peer w-full rounded-brand-md border border-border-strong bg-field text-foreground " +
  "outline-none transition-all duration-200 hover:border-violet-tint/70 " +
  "focus:border-green-500/80 focus:shadow-[0_0_0_4px_rgb(34_197_94/0.12)]";

/** Labels rest centred in the empty field and rise once it is focused or filled.
 *  Both states set the same properties, so their order in the cascade is moot. */
const labelCls =
  "pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-caption " +
  "text-muted-foreground transition-all duration-200 " +
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] " +
  "peer-focus:font-semibold peer-focus:tracking-wide peer-focus:text-green-300";

const filledCls =
  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 " +
  "peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold " +
  "peer-[:not(:placeholder-shown)]:tracking-wide";

const iconCls =
  "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 " +
  "text-violet-tint transition-colors duration-200 group-focus-within:text-green-400";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

export function EnquiryForm({ idPrefix = "" }: { idPrefix?: string }) {
  const [chars, setChars] = useState(0);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  // The dialog and the page can both be mounted at once, so ids have to be
  // scoped or the labels would point at whichever input rendered first.
  const uid = (base: string) => (idPrefix ? `${idPrefix}-${base}` : base);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "");

    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiry: text("enquiry"),
          name: text("name"),
          email: text("email"),
          phone: text("phone"),
          company: text("company"),
          message: text("message"),
          newsletter: data.get("newsletter") === "on",
          website: text("website"),
        }),
      });

      const body = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !body?.ok) {
        throw new Error(body?.error ?? "We could not send that just now.");
      }

      form.reset();
      setChars(0);
      setStatus({ state: "sent" });
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "We could not send that just now.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="flex flex-col items-center rounded-brand-lg border border-green-500/30 bg-gradient-to-b from-green-500/12 to-transparent px-8 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-500/40">
          <Check className="h-6 w-6 text-green-300" strokeWidth={2.4} />
        </span>
        <p className="font-display mt-6 text-2xl font-bold text-foreground">Thank you</p>
        <p className="mt-3 max-w-sm text-body">
          Your enquiry is with us and a confirmation is on its way to your inbox. You will hear back
          within one working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-7 text-caption font-semibold text-green-300 underline decoration-green-500/40 underline-offset-4 transition-colors hover:text-green-200"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const pct = Math.min(100, (chars / MESSAGE_MAX) * 100);
  const nearLimit = chars > MESSAGE_MAX * 0.85;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Honeypot. Off-screen rather than display:none, which some bots skip. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={uid("website")}>Website</label>
        <input id={uid("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="group relative">
        <select
          id={uid("enquiry")}
          name="enquiry"
          required
          defaultValue=""
          className={`${wellCls} h-14 cursor-pointer appearance-none px-4 pb-1 pt-5 text-sm`}
        >
          <option value="" disabled>
            Please select
          </option>
          <option>I’d like to discuss a project</option>
          <option>I’d like to join the field team</option>
          <option>Something else</option>
        </select>
        <label
          htmlFor={uid("enquiry")}
          className="pointer-events-none absolute left-4 top-2.5 text-[11px] font-semibold tracking-wide text-muted-foreground transition-colors duration-200 peer-focus:text-green-300"
        >
          How can we help?*
        </label>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-tint transition-transform duration-200 group-focus-within:rotate-180 group-focus-within:text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.id} className="group relative">
            <input
              id={uid(field.id)}
              name={field.name}
              type={field.type}
              autoComplete={field.ac}
              required={!field.optional}
              placeholder=" "
              className={`${wellCls} h-14 pb-1 pl-11 pr-4 pt-5 text-sm`}
            />
            <label htmlFor={uid(field.id)} className={`${labelCls} ${filledCls}`}>
              {field.label}
              {field.optional ? " (optional)" : "*"}
            </label>
            <field.Icon className={iconCls} strokeWidth={1.8} />
          </div>
        ))}
      </div>

      <div className="group relative">
        <textarea
          id={uid("message")}
          name="message"
          required
          placeholder=" "
          maxLength={MESSAGE_MAX}
          rows={4}
          onChange={(event) => setChars(event.target.value.length)}
          aria-describedby={uid("message-count")}
          className={`${wellCls} resize-none px-4 pb-3 pt-7 text-sm`}
        />
        <label
          htmlFor={uid("message")}
          className="pointer-events-none absolute left-4 top-2.5 text-[11px] font-semibold tracking-wide text-muted-foreground transition-colors duration-200 peer-focus:text-green-300"
        >
          Message*
        </label>
      </div>

      {/* The count as a bar as well as a number: the fill is readable at a
          glance, the digits only matter once you are close to the cap. */}
      <div className="flex items-center gap-3">
        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-border-strong">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              nearLimit ? "bg-amber-400" : "bg-green-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span
          id={uid("message-count")}
          aria-live="polite"
          className={`text-xs tabular-nums ${nearLimit ? "text-amber-300" : "text-muted-foreground"}`}
        >
          {chars}/{MESSAGE_MAX}
        </span>
      </div>

      <div className="space-y-3 pt-1">
        <Tick name="privacy" required>
          I agree to the{" "}
          <a
            href="/privacy-cookie-policy"
            className="underline decoration-violet-tint/50 underline-offset-2 transition-colors hover:text-green-300"
          >
            privacy policy
          </a>
          .*
        </Tick>
        <Tick name="newsletter">Send me the occasional field note</Tick>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-cta px-8 text-sm font-semibold text-dark shadow-glow-green transition-all duration-200 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:brightness-100"
        >
          {status.state === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </>
          )}
        </button>

        <p aria-live="polite" className="text-caption text-red-400">
          {status.state === "error" && status.message}
        </p>
      </div>
    </form>
  );
}

/** Native checkboxes cannot be styled to match this surface, so the input is
 *  stripped with `appearance-none` and the tick is drawn over it. */
function Tick({
  name,
  required,
  children,
}: {
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-caption text-body">
      <span className="relative mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center">
        <input
          type="checkbox"
          name={name}
          required={required}
          className="peer h-[18px] w-[18px] cursor-pointer appearance-none rounded-[6px] border border-border-strong bg-field transition-all duration-200 hover:border-violet-tint/70 checked:border-green-500 checked:bg-green-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/20"
        />
        <Check
          aria-hidden="true"
          strokeWidth={3.5}
          className="pointer-events-none absolute h-3 w-3 scale-50 text-dark opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"
        />
      </span>
      <span className="pt-px">{children}</span>
    </label>
  );
}
