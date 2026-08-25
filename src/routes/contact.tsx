import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { CONTACT_EMAIL, SITE_URL, STAFFING_LOGIN } from "@/data/site";
import { PageHero, Panel, PillLink } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Product Sampling Agency | Brand Activation Agency in India" },
      {
        name: "description",
        content:
          "Talk to us about a sampling route, a mall activation or a staffing brief. We are at Star Tower, Gurugram.",
      },
      { property: "og:title", content: "Talk to us | Product Sampling Agency" },
      {
        property: "og:description",
        content:
          "Tell us what the product is and who needs to try it. We will come back with sites and a rough count.",
      },
      { property: "og:image", content: `${SITE_URL}/images/a-bright-modern-office-interior.webp` },
      { name: "twitter:image", content: `${SITE_URL}/images/a-bright-modern-office-interior.webp` },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: Contact,
});

const FIELDS = [
  {
    id: "first-name",
    name: "firstName",
    label: "First Name",
    type: "text",
    autoComplete: "given-name",
  },
  {
    id: "last-name",
    name: "lastName",
    label: "Last Name",
    type: "text",
    autoComplete: "family-name",
  },
  { id: "email", name: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "phone", name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { id: "company", name: "company", label: "Company", type: "text", autoComplete: "organization" },
];

const OFFICES = [
  {
    region: "India",
    email: CONTACT_EMAIL,
    entity: "Product Sampling Agency",
    lines: ["Star Tower", "Sector 30", "Gurugram", "Haryana 122001", "India"],
  },
];

const MESSAGE_MAX = 200;

/** Shared field chrome. Fill alone cannot separate a well from its panel on this
 *  ground (max 1.19:1), so the border carries it and focus lands on green. */
const fieldCls =
  "mt-2 w-full rounded-brand-md border border-border-strong bg-field px-4 text-foreground " +
  "outline-none transition-colors placeholder:text-muted-foreground " +
  "hover:border-violet-tint/60 focus-visible:ring-2 focus-visible:ring-green-500";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-green-300">
      {children}
    </p>
  );
}

function Contact() {
  const [chars, setChars] = useState(0);

  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="Get in touch"
        intro="Tell us what the product is and who needs to try it."
        extra={
          <div className="mt-8 flex flex-wrap gap-3">
            {OFFICES.map((office) => (
              <a
                key={office.region}
                href={`mailto:${office.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-violet-tint/40 px-5 py-2.5 text-caption font-semibold text-on-violet transition-colors hover:border-green-500 hover:text-green-300"
              >
                <span className="text-violet-tint">{office.region}</span>
                {office.email}
              </a>
            ))}
          </div>
        }
      />

      {/* 1 — PRIMARY ACTION: the enquiry form leads the page */}
      <Panel tone="raised">
        <Eyebrow>Start a conversation</Eyebrow>
        <h2 className="font-display mt-3 text-section font-bold md:text-h1">Discuss a project</h2>
        <p className="mt-4 max-w-2xl text-lead text-body">
          Tell us what the product is, who needs to try it, and roughly when. We will come back with
          sites and a count.
        </p>
        <p className="mt-2 text-caption text-muted-foreground">
          &quot;*&quot; indicates required fields
        </p>

        <form className="mt-8 max-w-3xl space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="enquiry" className="block text-caption font-semibold">
              How can we help?*
            </label>
            <div className="relative">
              <select
                id="enquiry"
                name="enquiry"
                required
                defaultValue=""
                className={`${fieldCls} h-12 appearance-none pr-11`}
              >
                <option value="" disabled>
                  Please select —
                </option>
                <option>I’d like to discuss a project</option>
                <option>I’d like to join the field team</option>
                <option>Something else</option>
              </select>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-tint"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-caption font-semibold">
                  {field.label}*
                </label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required
                  className={`${fieldCls} h-12`}
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="message" className="block text-caption font-semibold">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={MESSAGE_MAX}
              rows={5}
              onChange={(event) => setChars(event.target.value.length)}
              aria-describedby="message-count"
              className={`${fieldCls} py-3`}
            />
            <p id="message-count" aria-live="polite" className="mt-1 text-xs text-muted-foreground">
              {chars} of {MESSAGE_MAX} max characters
            </p>
          </div>

          <label className="flex items-start gap-3 text-caption">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-1 h-4 w-4 accent-green-500"
            />
            <span>
              I agree to the{" "}
              <a href="/privacy-cookie-policy" className="underline">
                privacy policy
              </a>
              .*
            </span>
          </label>

          <label className="flex items-start gap-3 text-caption">
            <input type="checkbox" name="newsletter" className="mt-1 h-4 w-4 accent-green-500" />
            <span>Send me the occasional field note</span>
          </label>

          <button
            type="submit"
            className="h-12 rounded-full bg-gradient-cta px-8 text-sm font-semibold text-dark shadow-glow-green transition-all hover:brightness-110"
          >
            Send enquiry
          </button>
        </form>
      </Panel>

      {/* 2 — SUPPORTING DETAIL: where we are */}
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow>Our office</Eyebrow>
          <div className="mt-6 grid gap-6 md:grid-cols-2 [&>*:only-child]:md:max-w-xl">
            {OFFICES.map((office) => (
              <div
                key={office.region}
                className="rounded-brand-xl border border-border bg-gradient-card p-8 md:p-10"
              >
                <h2 className="font-display text-h3 font-bold">{office.region}</h2>
                <a
                  href={`mailto:${office.email}`}
                  className="mt-3 inline-block font-semibold text-green-300 underline decoration-green-300/40 underline-offset-4 transition-colors hover:text-green-500"
                >
                  {office.email}
                </a>
                <address className="mt-5 not-italic leading-relaxed text-body">
                  {office.entity}
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — SECONDARY AUDIENCE: recruitment, deliberately after the main path */}
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-[1600px] rounded-brand-xl bg-gradient-band px-6 py-12 md:px-14 md:py-16">
          <h2 className="font-display max-w-2xl text-h3 font-bold md:text-h2">
            Looking for shifts?
          </h2>
          <p className="mt-4 max-w-3xl text-on-violet">
            If you want shifts as a promoter or event staff, send us a message and we will get back
            to you when something suits.
          </p>
          <div className="mt-7">
            <PillLink href={STAFFING_LOGIN}>Apply online</PillLink>
          </div>
        </div>
      </section>
    </div>
  );
}
