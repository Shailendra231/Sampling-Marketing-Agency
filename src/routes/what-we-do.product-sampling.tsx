import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, SITE_URL } from "@/data/site";
import { CaseStudyGrid, ContactCta, PageHero, Panel, PillLink } from "@/components/site/ui";

export const Route = createFileRoute("/what-we-do/product-sampling")({
  head: () => ({
    meta: [
      { title: "Product sampling, run properly | Product Sampling Agency" },
      {
        name: "description",
        content:
          "Product sampling campaigns planned around the right sites, the right hours and a properly briefed team.",
      },
      { property: "og:title", content: "Product sampling, run properly" },
      {
        property: "og:description",
        content:
          "Product sampling campaigns planned around the right sites, the right hours and a properly briefed team.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/a-bright-outdoor-indoor-courtyard.webp`,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/a-bright-outdoor-indoor-courtyard.webp`,
      },
      { property: "og:url", content: `${SITE_URL}/what-we-do/product-sampling` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/what-we-do/product-sampling` }],
  }),
  component: ProductSampling,
});

const BENEFITS = [
  {
    title: "Trial beats advertising",
    copy: "Someone who has used your product once already knows whether they like it. That is a shorter argument than any ad has to make.",
  },
  {
    title: "You reach people who never see your ads",
    copy: "Commuters, students, shoppers mid errand. Plenty of them are not scrolling where your media budget is pointed.",
  },
  {
    title: "You hear the objection out loud",
    copy: "Price, smell, texture, packaging. Our teams write down what people actually say, including the unflattering parts.",
  },
  {
    title: "It works next to the shelf",
    copy: "Sample inside or beside the store that stocks you and the walk from trying it to buying it is about ten steps.",
  },
  {
    title: "You can see the geography",
    copy: "Per site counts tell you which neighbourhoods responded and which were a waste of a Saturday.",
  },
  {
    title: "It scales down as well as up",
    copy: "One mall for a weekend is a real test. You do not need thirty cities to learn something useful.",
  },
];

function ProductSampling() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="Product sampling, run properly"
        intro="The shortest route from never heard of you to bought it twice."
      />

      <Panel tone="base">
        <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Getting a product into someone’s hands
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg text-foreground/75">
            <p>
              Stand somewhere busy, hand things out. That is the whole idea, and it is why people
              assume it cannot really go wrong. It goes wrong constantly.
            </p>
            <p>It is usually one of these:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>The site had footfall but the wrong people in it</li>
              <li>The team was there at the wrong hour</li>
              <li>Nobody told the staff what the product is for</li>
            </ul>
          </div>
          <div className="space-y-4 text-lg text-foreground/75">
            <p>So that is where we spend the planning time.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Sites</strong>: chosen for who walks through,
                not just how many
              </li>
              <li>
                <strong className="text-foreground">Timing</strong>: the hours your buyer is
                actually there
              </li>
              <li>
                <strong className="text-foreground">Briefing</strong>: staff who can answer the
                second question, not only the first
              </li>
            </ul>
            <p className="font-semibold text-foreground">
              Then we count it, and tell you what the count means.
            </p>
          </div>
        </div>
      </Panel>

      <Panel tone="raised">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          What trial actually buys you
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="font-display text-xl font-bold">{benefit.title}</h3>
              <p className="mt-3 text-foreground/70">{benefit.copy}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-4xl text-lg font-semibold text-foreground">
          Sampling is not the cheapest way to reach a thousand people. It is one of the few ways to
          find out whether they like what you sell. If that is the question you have, it is worth
          the logistics.
        </p>
      </Panel>

      <Panel>
        <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Why brands keep us on the route
        </h2>
        <div className="mt-8 grid gap-8 text-lg text-foreground/80 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="font-semibold text-foreground">Mostly, it is the boring discipline.</p>
            <p>
              A metro gate in Gurugram at 9am and the same gate at 4pm are two different audiences.
              We plan for the one you want rather than the one that is easier to reach.
            </p>
            <p>
              Before a campaign starts we want to know what the product is for and who has already
              said no to it. That shapes the pitch more than any deck does.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Our field staff are trained to start a conversation without cornering anyone. People
              can tell the difference, and so can your numbers at the end of the day.
            </p>
            <p>
              You will have one person to call for the whole campaign, and they will have been to
              the sites.
            </p>
            <PillLink to="/contact">Start your project</PillLink>
          </div>
        </div>
      </Panel>

      <Panel tone="base">
        <h2 className="font-display text-3xl font-bold md:text-4xl">What you get back</h2>
        <p className="mt-6 max-w-3xl text-lg text-foreground/75">
          Counts per site and per shift, what people said when they tried it, photos from the day,
          and stock reconciled against what went out. If a site underperformed you will hear that
          from us before you spot it in the report.
        </p>
        <div className="mt-10">
          <CaseStudyGrid items={CASE_STUDIES.filter((_, i) => [3, 1, 5].includes(i))} />
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
