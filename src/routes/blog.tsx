import { createFileRoute } from "@tanstack/react-router";
import { BLOG_POSTS, CDN, SITE_URL } from "@/data/site";
import { ContactCta, PageHero, Panel } from "@/components/site/ui";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Brand Activation News & Insights | Product Sampling Agency" },
      {
        name: "description",
        content:
          "The latest news, views and inspiration on brand activation, experiential marketing, product sampling and event staffing from the Product Sampling Agency team.",
      },
      { property: "og:title", content: "Product Sampling Agency Blog | News, views & inspiration" },
      {
        property: "og:description",
        content:
          "Brand activation and experiential marketing insights from Product Sampling Agency.",
      },
      { property: "og:image", content: `${CDN}/2026/03/DSC09482-667x500.jpg` },
      { name: "twitter:image", content: `${CDN}/2026/03/DSC09482-667x500.jpg` },
      { property: "og:url", content: `${SITE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero title="The latest news, views & inspiration" />

      <Panel tone="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-3xl bg-cloud">
              <img
                src={post.image}
                alt={`Product Sampling Agency - ${post.title}`}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-7">
                <p className="text-sm font-semibold text-ink/60">{post.date}</p>
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
