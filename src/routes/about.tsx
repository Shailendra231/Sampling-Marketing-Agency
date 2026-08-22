import { createFileRoute } from "@tanstack/react-router";
import { BLOG_POSTS, SITE_URL } from "@/data/site";
import { ContactCta, PageHero, Panel, PillLink } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "We are Product Sampling Agency | About Our Brand Activation Team" },
      {
        name: "description",
        content:
          "Product Sampling Agency are a team of passionate, creative individuals crafting unforgettable brand experiences from Old Amersham for brands around the world.",
      },
      { property: "og:title", content: "We are Product Sampling Agency" },
      {
        property: "og:description",
        content:
          "A team of passionate, creative people who believe in the power of human connection.",
      },
      { property: "og:image", content: `${SITE_URL}/images/a-bright-modern-office-interior.webp` },
      { name: "twitter:image", content: `${SITE_URL}/images/a-bright-modern-office-interior.webp` },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: About,
});

function About() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="We are Product Sampling Agency"
        intro="Product Sampling Agency are a team of passionate, creative individuals who believe in the power of human connection."
        extra={
          <p className="mt-4 max-w-2xl text-lg text-ink/80">
            Our goal is to craft unforgettable brand experiences that touch the hearts of people
            around the world.
          </p>
        }
      />

      <Panel tone="white">
        <div className="grid gap-8 md:grid-cols-2">
          <img
            src={"/images/a-bright-modern-office-interior.webp"}
            alt="Mark Dunn"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-3xl object-cover"
          />
          <img
            src={"/images/a-bright-outdoor-covered-community.webp"}
            alt="Product Sampling Agency team picture"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-3xl object-cover"
          />
        </div>
      </Panel>

      <Panel>
        <h2 className="font-display max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          We’re passionate &amp; creative. But mostly, we’re just nice people who love creating
          great experiences
        </h2>
        <div className="mt-8 grid gap-8 text-lg text-ink/80 lg:grid-cols-2">
          <div className="space-y-4">
            <p>In a world full of noise and competition, standing out is an art.</p>
            <p>At Product Sampling Agency, we get it and we’ve got your back.</p>
            <p>
              We’re a team of specialists, nestled in the picturesque town of Old Amersham, many of
              us are young mums.
            </p>
            <p>
              Our approach is rooted in collaboration – we’re not a typical faceless big agency.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              When you work with us, you’re not just a client. You’ll get to know our team because
              we’re real humans who truly care about your success.
            </p>
            <p>
              Our clients trust us because we’re the dependable choice, guided by unwavering
              integrity with a good sense of humour.
            </p>
            <p className="font-semibold text-ink">The time for authentic relationships is now.</p>
            <PillLink to="/contact">Get in touch</PillLink>
          </div>
        </div>
      </Panel>

      <Panel tone="white" className="!py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              src: "/images/a-busy-outdoor-indoor-mall-2.webp",
              alt: "Product Sampling Agency staff chatting",
            },
            {
              src: "/images/a-clean-modern-social-media-2.webp",
              alt: "Product Sampling Agency staff",
            },
          ].map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </Panel>

      <Panel tone="cloud">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              src: "/images/a-lively-outdoor-indoor-mall.webp",
              alt: "Product Sampling Agency staff talking",
            },
            {
              src: "/images/a-realistic-street-sidewalk-scene.webp",
              alt: "Product Sampling Agency staff chatting",
            },
            {
              src: "/images/a-bright-outdoor-covered-community.webp",
              alt: "Product Sampling Agency staff",
            },
          ].map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </Panel>

      <Panel tone="white">
        <h2 className="font-display text-3xl font-bold md:text-4xl">News, views and inspiration</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article key={post.title} className="overflow-hidden rounded-3xl bg-cloud">
              <img
                src={post.image}
                alt={`Product Sampling Agency - ${post.title}`}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-7">
                <p className="text-sm font-semibold text-ink/60">{post.date}</p>
                <h3 className="font-display mt-2 text-xl font-bold">{post.title}</h3>
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
