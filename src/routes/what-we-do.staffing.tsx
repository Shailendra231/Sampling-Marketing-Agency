import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, SITE_URL } from "@/data/site";
import { CaseStudyGrid, ContactCta, PageHero, Panel, PillLink } from "@/components/site/ui";

export const Route = createFileRoute("/what-we-do/staffing")({
  head: () => ({
    meta: [
      { title: "Field teams | Promotional and event staffing" },
      {
        name: "description",
        content:
          "Trained promotional, event and sampling staff for campaigns across Indian cities.",
      },
      { property: "og:title", content: "Field teams | Product Sampling Agency" },
      {
        property: "og:description",
        content: "Promoters, samplers and event staff, briefed on your product before the shift.",
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
    title: "We only staff this kind of work",
    copy: "We staff sampling routes, mall activations and retail promotions week in, week out. Most of our supervisors came up through those shifts themselves.",
  },
  {
    title: "Diversity-driven casting",
    copy: "We hire locally for each city, so the team speaks the language your customers actually use.",
  },
  {
    title: "Seamless logistics",
    copy: "We recruit, brief, supervise on the day and collect what people said. You approve the plan and read the report.",
  },
  {
    title: "Teams that turn up",
    copy: "Short notice happens. We keep a bench in the main metros, so a replacement is a phone call rather than a crisis.",
  },
  {
    title: "Insight-led performance",
    copy: "After the shift you get counts, photos and the objections people raised. That is usually what changes the next route.",
  },
];

const OFFERS = [
  {
    title: "Promotional Staffing",
    copy: "Street teams and samplers for footpaths, markets, society gates and transit points.",
    cta: "Find your team",
  },
  {
    title: "Event Staffing",
    copy: "Hosts, registration desks, supervisors and support staff for events and launches.",
    cta: "Hire event teams",
  },
  {
    title: "Product Sampling Staffing",
    copy: "In store sampling staff who can demo a product and write down what shoppers say about it.",
    cta: "Book sampling staff",
  },
];

function Staffing() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="Field teams"
        intro="Trained staff for sampling routes, mall activations, retail promotions and events."
        extra={
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-foreground/80">
            <p>
              We supply staff to brands, agencies, malls and event organisers across Indian cities.
              Reliability matters, but so does whether someone can actually start a conversation
              with a stranger.
            </p>
            <p>Two people for a weekend or eighty across a month. Same briefing either way.</p>
          </div>
        }
      />

      <Panel tone="base">
        <h2 className="font-display text-3xl font-bold md:text-5xl">Who we send</h2>
        <p className="mt-6 max-w-3xl text-lg font-semibold text-foreground">
          A promoter who understands the product will outsell a better looking one who does not. We
          pick for the brief, not from a spreadsheet.
        </p>
        <p className="mt-4 max-w-3xl text-lg text-foreground/75">
          Everyone gets briefed on the product, the objections and the count before a shift. A
          supervisor is on site, and attendance is tracked so you are not paying for people who did
          not turn up.
        </p>
        <div className="mt-8">
          <PillLink to="/contact">Get in touch</PillLink>
        </div>
      </Panel>

      <Panel tone="raised">
        <h2 className="font-display text-3xl font-bold md:text-5xl">Why people call us back</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="rounded-3xl bg-background p-7">
              <h3 className="font-display text-xl font-bold">{reason.title}</h3>
              <p className="mt-3 text-foreground/70">{reason.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <PillLink to="/contact">Work with us</PillLink>
        </div>
      </Panel>

      <Panel>
        <h2 className="font-display text-3xl font-bold md:text-5xl">What We Offer</h2>
        <p className="mt-6 max-w-3xl text-lg text-foreground/80">
          Recruitment, briefing and supervision are ours to handle. You get one point of contact,
          and a team that has been told what the product does.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OFFERS.map((offer) => (
            <div key={offer.title} className="flex flex-col rounded-3xl bg-background p-7">
              <h3 className="font-display text-2xl font-bold">{offer.title}</h3>
              <p className="mt-3 flex-1 text-foreground/70">{offer.copy}</p>
              <span className="mt-6 text-sm font-semibold">{offer.cta} →</span>
            </div>
          ))}
        </div>
      </Panel>

      <Panel tone="base">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Where these teams work</h2>
        <p className="mt-6 max-w-3xl text-lg text-foreground/75">
          Malls, metro stations, campuses, markets, society gates and road races. Different crowds,
          different pitch, same discipline about turning up prepared.
        </p>
        <div className="mt-10">
          <CaseStudyGrid items={CASE_STUDIES.slice(2, 5)} />
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
