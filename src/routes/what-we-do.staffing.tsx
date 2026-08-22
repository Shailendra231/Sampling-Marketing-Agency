import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, SITE_URL } from "@/data/site";
import { CaseStudyGrid, ContactCta, PageHero, Panel, PillLink } from "@/components/site/ui";

export const Route = createFileRoute("/what-we-do/staffing")({
  head: () => ({
    meta: [
      { title: "PSA People | Promotional & Event Staffing Agency" },
      {
        name: "description",
        content:
          "PSA People is a specialist staffing agency delivering expertly trained promotional, event and sampling teams across the UK, Europe and the USA.",
      },
      { property: "og:title", content: "PSA People | Staffing Agency" },
      {
        property: "og:description",
        content:
          "High-performing, expertly trained ambassadors, promotional staff and event teams.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/a-bright-realistic-outdoor-community.webp`,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/a-bright-realistic-outdoor-community.webp`,
      },
      { property: "og:url", content: `${SITE_URL}/what-we-do/staffing` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/what-we-do/staffing` }],
  }),
  component: Staffing,
});

const REASONS = [
  {
    title: "Specialist staffing expertise",
    copy: "18 years of experience supporting brand activations, product trials, and live events of every scale around the world.",
  },
  {
    title: "Diversity-driven casting",
    copy: "Representation matters. We champion diverse talent to ensure your campaigns reflect your audiences authentically.",
  },
  {
    title: "Seamless logistics",
    copy: "From recruitment and briefing to onsite support and managing feedback, we manage every detail – so you don’t have to.",
  },
  {
    title: "Reliable, ready-to-go teams",
    copy: "Whether it’s short notice or a long lead campaign, we can quickly deploy staff who’ve been properly briefed and trained.",
  },
  {
    title: "Insight-led performance",
    copy: "Our staffing doesn’t stop at delivery. We gather feedback, measure impact and help optimise future campaigns.",
  },
];

const OFFERS = [
  {
    title: "Promotional Staffing",
    copy: "Street teams, samplers, brand ambassadors and more – driving brand visibility, engagement and trial.",
    cta: "Find your team",
  },
  {
    title: "Event Staffing",
    copy: "Front-of-house teams, event hosts, supervisors and support staff for seamless guest experiences.",
    cta: "Hire event teams",
  },
  {
    title: "Product Sampling Staffing",
    copy: "Trained sampling staff who influence behaviour and capture valuable insights in-store, on-street or at events.",
    cta: "Book sampling staff",
  },
];

function Staffing() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="PSA People"
        intro="As a specialist staffing agency, PSA People delivers high-performing, expertly trained teams for brand activations, events, product sampling campaigns, retail projects and more."
        extra={
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-ink/80">
            <p>
              We work with brands, agencies, venues and events across the UK, Europe and the USA to
              supply staff who are not only professional and reliable, but who understand how to
              connect with audiences.
            </p>
            <p>
              We provide flexible, scalable staffing solutions that bring your campaigns and events
              to life.
            </p>
          </div>
        }
      />

      <Panel tone="white">
        <h2 className="font-display text-3xl font-bold md:text-5xl">We always put people first</h2>
        <p className="mt-6 max-w-3xl text-lg font-semibold text-ink">
          We believe that the right people make all the difference. That’s why we don’t just fill
          roles, we match individuals to brands, briefs and audiences with precision and care.
        </p>
        <p className="mt-4 max-w-3xl text-lg text-ink/75">
          Our national and international talent pool is diverse, experienced, and fully supported by
          our PSA People team to ensure every shift is delivered with energy, professionalism and
          accountability.
        </p>
        <div className="mt-8">
          <PillLink to="/contact">Get in touch</PillLink>
        </div>
      </Panel>

      <Panel tone="cloud">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Why Brands, Agencies, Venues and Events Work With Us
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="rounded-3xl bg-background p-7">
              <h3 className="font-display text-xl font-bold">{reason.title}</h3>
              <p className="mt-3 text-ink/70">{reason.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <PillLink to="/contact">Work with us</PillLink>
        </div>
      </Panel>

      <Panel>
        <h2 className="font-display text-3xl font-bold md:text-5xl">What We Offer</h2>
        <p className="mt-6 max-w-3xl text-lg text-ink/80">
          Each service is backed by our established recruitment, training, and management processes
          then brought to life by people who represent your brand or event with pride.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OFFERS.map((offer) => (
            <div key={offer.title} className="flex flex-col rounded-3xl bg-background p-7">
              <h3 className="font-display text-2xl font-bold">{offer.title}</h3>
              <p className="mt-3 flex-1 text-ink/70">{offer.copy}</p>
              <span className="mt-6 text-sm font-semibold">{offer.cta} →</span>
            </div>
          ))}
        </div>
      </Panel>

      <Panel tone="white">
        <h2 className="font-display text-3xl font-bold md:text-4xl">See It In Action</h2>
        <p className="mt-6 max-w-3xl text-lg text-ink/75">
          Our case studies showcase how PSA People have helped brands, venues and events deliver
          standout activations, from the highest profile sporting events in the world to retail
          campaigns. Whether you’re looking for quality at scale or personality-led presence, our
          people perform.
        </p>
        <div className="mt-10">
          <CaseStudyGrid items={CASE_STUDIES.slice(2, 5)} />
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
