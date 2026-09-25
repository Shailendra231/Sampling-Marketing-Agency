import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { OFFICES, SITE_URL } from "@/data/site";
import { breadcrumb, graph } from "@/data/schema";
import { PageHero, Panel } from "@/components/site/ui";
import { JsonLd } from "@/components/site/JsonLd";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Product Sampling Agency | Brand Activation Agency in India" },
      {
        name: "description",
        content:
          "Talk to us about a sampling route, a mall activation or a staffing brief. We are at DLF Star Tower, Sector 30, Gurugram.",
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

/** Where this page sits in the site, for the breadcrumb trail in search
 *  results. The business itself is described once, in the root schema. */
const SCHEMA = graph(breadcrumb([{ name: "Contact", path: "/contact" }]));

function Contact() {
  return (
    <div className="space-y-5 pb-5">
      <JsonLd schema={SCHEMA} />
      <PageHero
        title="Get in touch"
        intro="Tell us what the product is and who needs to try it."
        extra={
          <div className="mt-11.5 flex flex-wrap gap-3">
            {OFFICES.map((office) => (
              <a
                key={office.region}
                href={`mailto:${office.email}`}
                className="inline-flex max-w-full flex-wrap items-center gap-x-2 rounded-full border border-violet-tint/40 px-5 py-2.5 text-button wrap-anywhere font-semibold text-on-violet transition-colors hover:border-green-500 hover:text-green-300"
              >
                <span className="text-violet-tint">{office.region}</span>
                {office.email}
              </a>
            ))}
          </div>
        }
      />

      {/* 1 — PRIMARY ACTION: the enquiry form leads the page */}
      <Panel tone="base">
        <Eyebrow>Start a conversation</Eyebrow>
        <h2 className="font-display mt-3 text-display font-semibold">Discuss a project</h2>
        <p className="mt-7 max-w-2xl text-body">
          Tell us what the product is, who needs to try it, and roughly when. We will come back with
          sites and a count.
        </p>
        <p className="mt-2 text-caption text-muted-foreground">
          &quot;*&quot; indicates required fields
        </p>

        <div className="mt-11.5 max-w-3xl">
          <EnquiryForm />
        </div>
      </Panel>

      {/* 2 — SUPPORTING DETAIL: where we are */}
      <Panel tone="raised">
        <Eyebrow>Our office</Eyebrow>
        <div className="mt-6 grid gap-7.5 md:grid-cols-2 [&>*:only-child]:md:max-w-xl">
          {OFFICES.map((office) => (
            <div key={office.region} className="rounded-brand-xl bg-background p-8 md:p-10">
              <h2 className="font-display text-subtitle font-semibold">{office.region}</h2>
              <a
                href={`mailto:${office.email}`}
                className="mt-3 inline-block font-semibold text-green-300 underline decoration-green-300/40 underline-offset-4 wrap-anywhere transition-colors hover:text-green-500"
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
      </Panel>
    </div>
  );
}
