import { createFileRoute, Link } from "@tanstack/react-router";
import type { SVGProps } from "react";
import { CAPABILITIES, CASE_STUDIES, CDN, LOGO_SETS, SERVICES } from "@/data/site";
import { CaseStudyGrid, ContactCta, Marquee, Panel, PillLink } from "@/components/site/ui";
import { SmaMark } from "@/components/site/SmaMark";

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
      { title: "Product Sampling Agency | A Brand Activation Agency in the UK & USA" },
      {
        name: "description",
        content:
          "Product Sampling Agency is a brand activation agency shaping activation strategy through brand experience, product sampling and people across the UK, USA and beyond.",
      },
      { property: "og:title", content: "Product Sampling Agency | A Brand Activation Agency" },
      {
        property: "og:description",
        content:
          "Shaping activation strategy through brand experience, product sampling and people.",
      },
      { property: "og:image", content: `${CDN}/2025/11/winners-1500x1000.jpg` },
      { name: "twitter:image", content: `${CDN}/2025/11/winners-1500x1000.jpg` },
      { property: "og:url", content: "https://purity-clone-hub.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://purity-clone-hub.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="space-y-6 pb-6">
      {/* HERO — GRADIENT APPLICATION board, SMA Brand System [07] */}
      <section className="px-5 md:px-10">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[28px] bg-gradient-hero-card px-6 py-14 md:px-14 md:py-20">
          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <h1 className="font-display text-h2 font-extrabold leading-[1.05] tracking-[-0.02em] md:text-h1 lg:text-display">
                We help brands
                <br />
                sample. <span className="text-green-500">engage.</span>
                <br />
                and <span className="text-violet-300">convert.</span>
              </h1>
              <p className="mt-6 max-w-sm text-caption leading-relaxed text-on-violet md:text-base">
                Driving real product connections that turn into loyal customers.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Let&rsquo;s Connect</PillLink>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute aspect-square w-[85%] bg-gradient-mark-glow blur-2xl"
              />
              <SmaMark className="relative w-[68%] max-w-[420px] text-green-500 drop-shadow-[0_0_40px_rgba(82,255,0,0.35)]" />
            </div>
          </div>
        </div>
      </section>

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

      <Panel tone="cloud">
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
          Brand activation.
          <br />
          <span className="text-magenta">Built for experience.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-ink/80 md:text-xl">
          We specialise in brand activations in the UK, USA and selected international markets that
          turn strategy into live experiences designed to perform.
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
                <p className="mt-3 flex-1 text-ink/70">{service.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  {service.cta} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Panel>

      <Panel tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Backed by experience</h2>
            <p className="mt-5 text-lg text-ink/75">
              Since 2007, we’ve partnered with brands across the UK, USA and selected international
              markets, delivering brand activation campaigns that engage, connect and leave a
              lasting impression.
            </p>
            <div className="mt-8">
              <PillLink to="/projects">View our Work</PillLink>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3">
            {LOGO_SETS.map((logo) => (
              <img
                key={logo}
                src={logo}
                alt="Product Sampling Agency client brand logos"
                loading="lazy"
                className="h-16 w-full object-contain"
              />
            ))}
          </div>
        </div>
      </Panel>

      <Panel tone="cloud">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <div key={item.title} className="flex gap-4">
              <img src={item.icon} alt="" aria-hidden="true" loading="lazy" className="h-9 w-9" />
              <div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-ink/70">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Focused on your future
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink/80">
          Our in-house experts and trusted delivery partners manage game-changing campaigns that
          deliver quality, credibility and consistency at every touch point.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              image: `${CDN}/2025/09/heineken_photo.jpg`,
              alt: "woman taking photo of staff",
              title: "For Brands",
              copy: "For brands that want to engage, excite and ignite consumers, through single live moments to multi-location rollouts.",
            },
            {
              image: `${CDN}/2023/07/kfc-delivery-pit-stop-4.jpg`,
              alt: "KFC delivery pit stop",
              title: "For Agencies",
              copy: "For agencies that want to partner with a brand activation specialist that is ready to elevate your marketing ideas.",
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
                <p className="mt-3 text-ink/70">{block.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel tone="white" className="!py-10">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          A few of our favourite campaigns
        </h2>
        <Marquee />
        <CaseStudyGrid items={CASE_STUDIES.slice(0, 6)} />
      </Panel>

      <ContactCta />
    </div>
  );
}
