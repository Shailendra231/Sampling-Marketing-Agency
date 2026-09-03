import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { OFFICES, SITE_URL } from "@/data/site";
import { PageHero, Panel } from "@/components/site/ui";
import { EnquiryForm } from "@/components/site/EnquiryForm";

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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-green-300">
      {children}
    </p>
  );
}

function Contact() {
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

        <div className="mt-8 max-w-3xl">
          <EnquiryForm />
        </div>
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
    </div>
  );
}
