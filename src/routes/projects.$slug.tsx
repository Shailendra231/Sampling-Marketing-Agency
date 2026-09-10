import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Layers, Tag } from "lucide-react";
import { CASE_STUDIES, SITE_URL, type CaseStudy } from "@/data/site";
import { ContactCta, Panel, PillLink } from "@/components/site/ui";

const find = (slug: string) => CASE_STUDIES.find((study) => study.slug === slug);

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const study = find(params.slug);
    if (!study) return { meta: [{ title: "Case study not found | Product Sampling Agency" }] };

    const url = `${SITE_URL}/projects/${study.slug}`;
    return {
      meta: [
        { title: `${study.title} | Product Sampling Agency` },
        { name: "description", content: study.excerpt },
        { property: "og:title", content: study.title },
        { property: "og:description", content: study.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `${SITE_URL}${study.image}` },
        { name: "twitter:image", content: `${SITE_URL}${study.image}` },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CaseStudyPage,
});

/** Meta strip under the title. Sector, place and format answer the three things
 *  a visitor scanning case studies actually wants to know first. */
function Facts({ study }: { study: CaseStudy }) {
  const facts = [
    { Icon: Tag, label: study.sector },
    { Icon: MapPin, label: study.where },
    { Icon: Layers, label: study.format },
  ];
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-button text-on-violet/80">
      {facts.map(({ Icon, label }) => (
        <span key={label} className="inline-flex items-center gap-2">
          <Icon className="h-4 w-4 text-green-300" strokeWidth={1.8} />
          {label}
        </span>
      ))}
    </div>
  );
}

/** Shared block: a heading and a list, all sharing the panel's left edge so the
 *  page reads as one column rather than a set of indented cards. */
function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-display text-heading font-semibold">{title}</h2>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex max-w-[68ch] gap-4">
            <span
              aria-hidden="true"
              className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400"
            />
            <span className="text-foreground/75">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const study = find(slug);

  if (!study) {
    return (
      <div className="space-y-5 pb-5">
        <Panel tone="primary">
          <h1 className="font-display text-display font-semibold">Case study not found</h1>
          <p className="mt-9.5 max-w-2xl text-foreground/80">
            That link does not match anything in our work. The full list is below.
          </p>
          <div className="mt-11.5">
            <PillLink to="/projects">See all work</PillLink>
          </div>
        </Panel>
      </div>
    );
  }

  const others = CASE_STUDIES.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <div className="space-y-5 pb-5">
      <Panel tone="primary">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-button font-semibold text-on-violet transition-colors hover:text-green-300"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
          Our Work
        </Link>

        <h1 className="font-display mt-7 max-w-4xl text-display font-semibold">{study.title}</h1>
        <p className="mt-9.5 max-w-2xl text-foreground/80">{study.excerpt}</p>
        <Facts study={study} />
      </Panel>

      <Panel tone="base">
        <img
          src={study.image}
          alt={`Product Sampling Agency - ${study.title}`}
          className="aspect-[16/7] w-full rounded-3xl object-cover"
        />

        <div className="mt-12">
          <h2 className="font-display text-heading font-semibold">The brief</h2>
          <p className="mt-7 max-w-[68ch] text-foreground/85">{study.challenge}</p>
        </div>
      </Panel>

      <Panel tone="raised">
        <h2 className="font-display text-heading font-semibold">How we planned it</h2>
        <ol className="mt-7 space-y-8">
          {study.approach.map((step, i) => (
            <li key={step} className="max-w-[68ch]">
              <p className="font-display text-button font-semibold tabular-nums text-green-300/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-foreground/80">{step}</p>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel tone="base">
        <div className="grid gap-12.5 lg:grid-cols-2">
          <ListSection title="What we handled" items={study.delivered} />
          <ListSection title="What we measured" items={study.measured} />
        </div>
      </Panel>

      {others.length > 0 ? (
        <Panel tone="raised">
          <h2 className="font-display text-heading font-semibold">More work</h2>
          <div className="mt-12 grid gap-7.5 md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to="/projects/$slug"
                params={{ slug: item.slug }}
                className="group block overflow-hidden rounded-3xl bg-background"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Product Sampling Agency - ${item.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-caption text-foreground/60">{item.sector}</p>
                  <h3 className="font-display mt-2 text-subtitle font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-border-strong/60 pt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-button font-semibold text-green-300 transition-colors hover:text-green-200"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
              All work
            </Link>
          </div>
        </Panel>
      ) : null}

      <ContactCta />
    </div>
  );
}
