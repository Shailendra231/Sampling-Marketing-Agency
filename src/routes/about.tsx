import { createFileRoute } from "@tanstack/react-router";
import { BLOG_POSTS, SITE_URL } from "@/data/site";
import { ContactCta, PageHero, Panel, PillLink } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who you will be dealing with | About Our Brand Activation Team" },
      {
        name: "description",
        content:
          "A sampling and activation team based in Gurugram, running campaigns across Indian cities.",
      },
      { property: "og:title", content: "Who you will be dealing with" },
      {
        property: "og:description",
        content: "A sampling and activation team based in Gurugram.",
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
        title="Who you will be dealing with"
        intro="We are a sampling and activation team based in Gurugram, working across Indian cities."
        extra={
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Most of our work happens on a footpath, in a mall atrium or at a society gate, on a
            weekday, in the heat.
          </p>
        }
      />

      <Panel tone="base">
        <div className="grid gap-8 md:grid-cols-2">
          <img
            src={"/images/a-bright-modern-office-interior.webp"}
            alt="Mark Dunn"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-3xl object-cover"
          />
          <img
            src={"/images/outdoor-daytime-scene-at-the.webp"}
            alt="Promoters sampling at a housing society gate"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-3xl object-cover"
          />
        </div>
      </Panel>

      <Panel>
        <h2 className="font-display max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          Small team. You will speak to the person running your campaign
        </h2>
        <div className="mt-8 grid gap-8 text-lg text-foreground/80 lg:grid-cols-2">
          <div className="space-y-4">
            <p>Sampling is an operations job wearing a marketing costume.</p>
            <p>
              The idea is usually the easy part. Getting thirty trained people to the right places
              on the right morning is not.
            </p>
            <p>We are based in Gurugram and run campaigns across the NCR and other metros.</p>
            <p>
              We are small enough that the person who plans your route is the person who answers the
              phone.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              You will get the same person from the first call to the final report, and they will
              have visited the sites.
            </p>
            <p>
              When a day goes badly we say so in the report. That is worth more to you than a clean
              slide.
            </p>
            <p className="font-semibold text-foreground">
              Come and see a shift before you commit to anything.
            </p>
            <PillLink to="/contact">Get in touch</PillLink>
          </div>
        </div>
      </Panel>

      <Panel tone="base" className="!py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              src: "/images/a-crowded-indoor-scene-inside.webp",
              alt: "Sampling on an intercity train",
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

      <Panel tone="raised">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              src: "/images/a-lively-outdoor-indoor-mall.webp",
              alt: "Promoter talking to a shopper",
            },
            {
              src: "/images/a-realistic-street-sidewalk-scene.webp",
              alt: "Field team briefing before a shift",
            },
            {
              src: "/images/a-bright-outdoor-indoor-courtyard.webp",
              alt: "Field staff at a campus activation",
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

      <Panel tone="base">
        <h2 className="font-display text-3xl font-bold md:text-4xl">News, views and inspiration</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article key={post.title} className="overflow-hidden rounded-3xl bg-raised">
              <img
                src={post.image}
                alt={`Product Sampling Agency - ${post.title}`}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-7">
                <p className="text-sm font-semibold text-foreground/60">{post.date}</p>
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
