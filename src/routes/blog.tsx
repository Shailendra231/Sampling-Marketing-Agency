import { createFileRoute } from "@tanstack/react-router";
import { BLOG_POSTS, SITE_URL } from "@/data/site";
import { ContactCta, PageHero, Panel } from "@/components/site/ui";

export const Route = createFileRoute("/blog")({
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
  return (
    <div className="space-y-6 pb-6">
      <PageHero title="Notes from the field" />

      <Panel tone="base">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-3xl bg-raised">
              <img
                src={post.image}
                alt={`Product Sampling Agency - ${post.title}`}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-7">
                <p className="text-sm font-semibold text-foreground/60">{post.date}</p>
                <h2 className="font-display mt-2 text-xl font-bold">{post.title}</h2>
                <span className="mt-4 inline-block text-sm font-semibold">Read blog →</span>
              </div>
            </article>
          ))}
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
