import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS, SITE_URL } from "@/data/site";
import { ContactCta, PageHero, Panel } from "@/components/site/ui";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Notes from the field | Product Sampling Agency" },
      {
        name: "description",
        content:
          "What we learn on site: picking locations, briefing teams, and why some campaigns convert and others do not.",
      },
      { property: "og:title", content: "Notes from the field" },
      {
        property: "og:description",
        content: "Practical notes on running sampling and activation campaigns in India.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/a-wide-promotional-infographic-style.webp`,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/a-wide-promotional-infographic-style.webp`,
      },
      { property: "og:url", content: `${SITE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: Blog,
});

function Blog() {
  // The newest post leads at full width and the rest fall into a grid beneath.
  // A lone card in a three-column grid reads as an empty shelf.
  const [lead, ...rest] = BLOG_POSTS;

  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="Notes from the field"
        intro="What we learn on site: picking locations, briefing teams, and why some campaigns convert and others do not."
      />

      {lead ? (
        <Panel tone="base">
          <Link
            to={lead.to}
            className="group grid gap-8 overflow-hidden rounded-3xl bg-raised md:grid-cols-2 md:items-stretch"
          >
            <div className="aspect-[3/2] overflow-hidden md:aspect-auto md:h-full">
              <img
                src={lead.image}
                alt={`Product Sampling Agency - ${lead.title}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:py-12 md:pr-12">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-caption">
                <span className="font-semibold text-green-300">Latest</span>
                <span className="text-foreground/60">{lead.date}</span>
                <span className="text-foreground/60">{lead.readMinutes} min read</span>
              </div>
              <h2 className="font-display mt-4 text-2xl font-bold leading-snug md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-5 max-w-prose text-lg text-foreground/75">{lead.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-green-300">
                Read the guide
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        </Panel>
      ) : null}

      {rest.length > 0 ? (
        <Panel tone="base">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.title}
                to={post.to}
                className="group flex flex-col overflow-hidden rounded-3xl bg-raised"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Product Sampling Agency - ${post.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-x-3 text-caption text-foreground/60">
                    <span>{post.date}</span>
                    <span>{post.readMinutes} min read</span>
                  </div>
                  <h2 className="font-display mt-2 flex-1 text-xl font-bold">{post.title}</h2>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-300">
                    Read blog
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
      ) : null}

      <ContactCta />
    </div>
  );
}
