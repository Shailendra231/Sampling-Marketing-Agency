import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CASE_STUDIES, type CaseStudy } from "@/data/site";

export function Panel({
  children,
  tone = "blaze",
  className = "",
}: {
  children: ReactNode;
  tone?: "blaze" | "sunset" | "cloud" | "white";
  className?: string;
}) {
  const tones = {
    blaze: "bg-blaze text-ink",
    sunset: "bg-gradient-sunset text-ink",
    cloud: "bg-cloud text-ink",
    white: "bg-background text-ink",
  } as const;
  return (
    <section className="px-5 md:px-10">
      <div
        className={`mx-auto max-w-[1600px] rounded-panel px-6 py-14 md:px-14 md:py-20 ${tones[tone]} ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export function PillLink({
  to,
  href,
  children,
  variant = "ink",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "ink" | "blaze";
}) {
  const styles =
    variant === "ink"
      ? "bg-gradient-cta text-dark shadow-glow-green hover:brightness-110"
      : "bg-blaze text-ink hover:bg-blaze/80";
  const cls = `inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold transition-colors ${styles}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to!} className={cls}>
      {children}
    </Link>
  );
}

export function Marquee({ text = "View our Work" }: { text?: string }) {
  const row = Array.from({ length: 16 }, () => text).join("  ");
  return (
    <div className="space-y-1 overflow-hidden py-6">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex whitespace-nowrap">
          <span
            className={`font-display text-4xl font-bold uppercase tracking-tight text-ink/15 md:text-6xl ${
              i === 1 ? "animate-[marquee_38s_linear_infinite_reverse]" : "animate-[marquee_30s_linear_infinite]"
            }`}
          >
            {row}&nbsp;
          </span>
          <span
            aria-hidden="true"
            className={`font-display text-4xl font-bold uppercase tracking-tight text-ink/15 md:text-6xl ${
              i === 1 ? "animate-[marquee_38s_linear_infinite_reverse]" : "animate-[marquee_30s_linear_infinite]"
            }`}
          >
            {row}&nbsp;
          </span>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyGrid({ items = CASE_STUDIES }: { items?: CaseStudy[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((study) => (
        <Link
          key={study.title}
          to="/projects"
          className="group block overflow-hidden rounded-3xl bg-background"
        >
          <div className="aspect-[3/2] overflow-hidden">
            <img
              src={study.image}
              alt={`Product Sampling Agency - ${study.title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl font-bold text-ink">{study.title}</h3>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink/70 group-hover:text-ink">
              Go to case study
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function PageHero({
  title,
  intro,
  extra,
}: {
  title: string;
  intro?: string;
  extra?: ReactNode;
}) {
  return (
    <Panel tone="sunset" className="min-h-[420px]">
      <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
        {title}
      </h1>
      {intro ? <p className="mt-6 max-w-2xl text-lg text-ink/80 md:text-xl">{intro}</p> : null}
      {extra}
    </Panel>
  );
}

export function ContactCta() {
  return (
    <Panel tone="cloud">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Ready to bring your brand activation to life?
        </h2>
        <p className="mt-5 text-lg text-ink/75">
          If you’re looking for a brand activation partner who understands live campaigns and is
          excited to drive your brand forward, we’d love to talk.
        </p>
        <div className="mt-8">
          <PillLink to="/contact">Say Hello</PillLink>
        </div>
      </div>
    </Panel>
  );
}
