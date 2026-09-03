import { createFileRoute, Link } from "@tanstack/react-router";
import type { SVGProps } from "react";
import { CAPABILITIES, CASE_STUDIES, CLIENT_LOGOS, SERVICES, SITE_URL } from "@/data/site";
import {
  CaseStudyGrid,
  ContactCta,
  LogoCylinder,
  Marquee,
  Panel,
  PillLink,
} from "@/components/site/ui";

/**
 * Icons and copy for the three pillars, taken verbatim from the Cards row of
 * SMA Brand System [06] — 1.6 stroke, round caps, violet then green then green.
 */
const PILLARS = [
  {
    title: "Targeted Sampling",
    copy: "Right product, right audience.",
    tone: "text-violet-400",
    Icon: (props: SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Engage & Educate",
    copy: "Real interactions that build trust.",
    tone: "text-green-500",
    Icon: (props: SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.7.8 1 1.3 1 2.5h6c0-1.2.3-1.7 1-2.5A6 6 0 0 0 12 3Z" />
      </svg>
    ),
  },
  {
    title: "Drive Conversions",
    copy: "Turning interest into loyal customers.",
    tone: "text-green-500",
    Icon: (props: SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Product Sampling Agency | Sampling and activations in India" },
      {
        name: "description",
        content:
          "We put products into people’s hands. Sampling, live activations and trained field teams across Indian cities.",
      },
      { property: "og:title", content: "We put products in people’s hands" },
      {
        property: "og:description",
        content: "Sampling, live brand activations and trained field teams, run across India.",
      },
      { property: "og:image", content: `${SITE_URL}/images/a-vibrant-candid-outdoor-indoor.webp` },
      { name: "twitter:image", content: `${SITE_URL}/images/a-vibrant-candid-outdoor-indoor.webp` },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="space-y-6 pb-6">
      <Panel tone="primary" className="relative min-h-[520px]">
        <h1 className="font-display max-w-3xl text-6xl font-bold leading-[0.98] tracking-tight md:text-8xl">
          We put products in people’s hands
        </h1>
        <p className="mt-8 max-w-xl text-lg text-foreground/80 md:text-2xl">
          Sampling, live brand activations and trained field teams, run across India.
        </p>
      </Panel>

      {/* THREE PILLARS — cards from SMA Brand System [06] */}
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-[1600px] rounded-[28px] border border-border bg-gradient-card px-6 py-14 md:px-14 md:py-16">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <pillar.Icon className={`h-11 w-11 ${pillar.tone}`} />
                <h3 className="mt-5 text-h3 font-bold">{pillar.title}</h3>
                <p className="mt-3 max-w-[16rem] text-caption text-body">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Panel tone="raised">
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
          Sampling works.
          <br />
          <span className="text-green-300">When it is planned properly.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Wrong site, wrong hour, a team nobody briefed. Those three account for most of the
          sampling budgets we have watched go nowhere, so they are what we plan around.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="group flex flex-col overflow-hidden rounded-3xl bg-background"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 flex-1 text-foreground/70">{service.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  {service.cta} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Panel>

      <Panel tone="base">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">How we work</h2>
            <p className="mt-5 text-lg text-foreground/75">
              We handle the route, the site permissions, the team and the counting. Afterwards you
              get the numbers plus a straight account of how it went, weak sites included.
            </p>
            <div className="mt-8">
              <PillLink to="/projects">View our Work</PillLink>
            </div>
          </div>
          <LogoCylinder logos={CLIENT_LOGOS} />
        </div>
      </Panel>

      <Panel tone="raised">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.Icon aria-hidden="true" className="h-9 w-9 text-green-500" strokeWidth={1.6} />
              <div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-foreground/70">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          What we handle
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          Planning, permissions, kit, staffing and reporting. You can hand us the whole thing or
          drop us into the part you are stuck on.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              image: "/images/a-realistic-indoor-public-space.webp",
              alt: "woman taking photo of staff",
              title: "For Brands",
              copy: "One pop up in one mall, or a route across thirty cities. We scale the same way either way.",
            },
            {
              image: "/images/outdoor-street-market-scene-with.webp",
              alt: "KFC delivery pit stop",
              title: "For Agencies",
              copy: "You keep the client relationship and the idea. We handle sites, staff and the day itself.",
            },
          ].map((block) => (
            <div key={block.title} className="overflow-hidden rounded-3xl bg-background">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={block.image}
                  alt={block.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold">{block.title}</h3>
                <p className="mt-3 text-foreground/70">{block.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel tone="base" className="!py-10">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Some of the work
        </h2>
        <Marquee />
        <CaseStudyGrid items={CASE_STUDIES.slice(0, 6)} />
      </Panel>

      <ContactCta />
    </div>
  );
}
