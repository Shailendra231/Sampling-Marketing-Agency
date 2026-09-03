import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { CASE_STUDIES, type CaseStudy } from "@/data/site";
import { EnquiryDialog } from "./EnquiryDialog";

export function Panel({
  children,
  tone = "panel",
  className = "",
}: {
  children: ReactNode;
  tone?: "panel" | "primary" | "raised" | "base";
  className?: string;
}) {
  const tones = {
    panel: "bg-panel text-foreground",
    primary: "bg-gradient-primary text-foreground",
    raised: "bg-raised text-foreground",
    base: "bg-background text-foreground",
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
      : "bg-panel text-foreground hover:bg-panel/80";
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
            className={`font-display text-4xl font-bold uppercase tracking-tight text-foreground/15 md:text-6xl ${
              i === 1
                ? "animate-[marquee_38s_linear_infinite_reverse]"
                : "animate-[marquee_30s_linear_infinite]"
            }`}
          >
            {row}&nbsp;
          </span>
          <span
            aria-hidden="true"
            className={`font-display text-4xl font-bold uppercase tracking-tight text-foreground/15 md:text-6xl ${
              i === 1
                ? "animate-[marquee_38s_linear_infinite_reverse]"
                : "animate-[marquee_30s_linear_infinite]"
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
            <h3 className="font-display text-xl font-bold text-foreground">{study.title}</h3>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 group-hover:text-foreground">
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
    <Panel tone="primary" className="min-h-[420px]">
      <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">{intro}</p>
      ) : null}
      {extra}
    </Panel>
  );
}

export function ContactCta() {
  return (
    <Panel tone="raised">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Want to see a shift before you commit?
        </h2>
        <p className="mt-5 text-lg text-foreground/75">
          Tell us what the product is and who needs to try it. We will come back with sites, a rough
          count and what it costs.
        </p>
        <div className="mt-8">
          <EnquiryDialog />
        </div>
      </div>
    </Panel>
  );
}

/** Drum geometry. The radius is derived from face width PLUS the gap, which is
 *  what opens daylight between panels instead of butting them edge to edge. */
const PANEL_W = 240;
const PANEL_GAP = 28;
/** Degrees of rotation per pixel dragged. ~120px of drag advances one face. */
const DRAG_DEG = 0.3;

type ClientLogo = { src: string; name: string; wide?: boolean; tall?: boolean; tile: string };

/** How tall a logo may render inside the 112px panel. Squarer marks get the
 *  larger cap so they do not read as half-size next to the wordmarks. */
function capFor(logo: ClientLogo) {
  if (logo.tall) return "max-h-[4.5rem]";
  return logo.wide ? "max-h-16" : "max-h-14";
}

/** The client wall as a rotating drum. Each logo sits on one face of a cylinder.
 *  Two inputs turn it, and they add together: the section's position in the
 *  viewport (so the page scroll rolls it) and horizontal pointer drag. Panels
 *  facing away are hidden by `backface-visibility`, which is what makes it read
 *  as a solid cylinder rather than a ring of mirrored images.
 *
 *  Reduced-motion visitors get the plain grid instead: a scroll-coupled 3D spin
 *  is exactly the kind of vestibular trigger that setting exists for. */
export function LogoCylinder({ logos }: { logos: ClientLogo[] }) {
  const drum = useRef<HTMLDivElement>(null);
  const spin = useRef({ scroll: 0, drag: 0 });
  const grab = useRef({ active: false, from: 0, base: 0 });
  const [reduced, setReduced] = useState(false);

  const apply = useCallback(() => {
    const el = drum.current;
    if (el) el.style.setProperty("--spin", `${spin.current.scroll + spin.current.drag}deg`);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = drum.current;
    if (reduced || !el) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const box = el.getBoundingClientRect();
      // 0 as the drum enters from the bottom, 1 as it leaves past the top.
      const travel = window.innerHeight + box.height;
      spin.current.scroll = (1 - (box.top + box.height) / travel) * 360;
      apply();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, apply]);

  if (reduced) {
    return (
      <div className="grid grid-cols-2 items-center gap-7 sm:grid-cols-3">
        {logos.map((logo) => (
          <div
            key={logo.src}
            style={{ backgroundColor: logo.tile }}
            className={`flex h-28 items-center justify-center rounded-brand-md ${
              logo.wide ? "px-3" : "px-6"
            }`}
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className={`w-auto max-w-full object-contain ${capFor(logo)}`}
            />
          </div>
        ))}
      </div>
    );
  }

  const step = 360 / logos.length;
  const radius = Math.round((PANEL_W + PANEL_GAP) / 2 / Math.tan(Math.PI / logos.length));

  return (
    <div
      className="cursor-grab touch-pan-y select-none [perspective:1300px] active:cursor-grabbing"
      aria-label="Clients we have worked with"
      onPointerDown={(event) => {
        grab.current = { active: true, from: event.clientX, base: spin.current.drag };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!grab.current.active) return;
        spin.current.drag = grab.current.base + (event.clientX - grab.current.from) * DRAG_DEG;
        apply();
      }}
      onPointerUp={(event) => {
        grab.current.active = false;
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={() => {
        grab.current.active = false;
      }}
    >
      <div
        ref={drum}
        className="relative h-72 [transform-style:preserve-3d]"
        style={{ transform: `translateZ(-${radius}px) rotateY(var(--spin,0deg))` }}
      >
        {logos.map((logo, i) => (
          <div
            key={logo.src}
            style={{
              width: PANEL_W,
              backgroundColor: logo.tile,
              transform: `translate(-50%,-50%) rotateY(${i * step}deg) translateZ(${radius}px)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className={`absolute left-1/2 top-1/2 flex h-28 items-center justify-center rounded-brand-md ${
              logo.wide ? "px-3" : "px-6"
            }`}
          >
            {/* Not lazy. A panel rotated edge-on has zero projected width, so the
                lazy-load intersection check skips it, and rotating it back into
                view is a transform change, which never re-triggers that check —
                the image would simply never load. Nine small files, load them. */}
            <img
              src={logo.src}
              alt={logo.name}
              draggable={false}
              className={`w-auto max-w-full object-contain ${capFor(logo)}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
