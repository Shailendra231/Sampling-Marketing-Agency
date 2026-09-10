import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { SITE_URL } from "@/data/site";
import { ContactCta, Panel } from "@/components/site/ui";

const HERO = "/images/a-realistic-indoor-public-space.webp";
const TITLE = "What Is Product Sampling?";
const PATH = "/blog/what-is-product-sampling";
const PUBLISHED = "2026-09-10";
const PUBLISHED_LABEL = "September 2026";
const SUMMARY =
  "What sampling is, why it works, where it fits, what it costs and how to plan a campaign that earns a real first try.";

export const Route = createFileRoute("/blog/what-is-product-sampling")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Product Sampling Agency` },
      {
        name: "description",
        content:
          "Product sampling is giving people a chance to try a product before they buy it. Here is why it matters, which categories it suits, what it costs in India and how to plan your next campaign.",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SUMMARY },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "og:image", content: `${SITE_URL}${HERO}` },
      { name: "twitter:image", content: `${SITE_URL}${HERO}` },
      { property: "og:url", content: `${SITE_URL}${PATH}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
  }),
  component: Post,
});

type Section = {
  heading: string;
  /** Short label for the contents list, when the heading is too long to sit in a grid. */
  label: string;
  body: string[];
  /** Lead-in for the list, so the bullets are not left hanging off the last paragraph. */
  listIntro?: string;
  bullets?: string[];
  /** Numbered where the order is the point, plain where it is only a set. */
  ordered?: { title: string; copy: string }[];
  outro?: string[];
};

/** The article kept as data so the contents list, the anchors and the sections
 *  cannot drift apart when the copy is edited. */
const SECTIONS: Section[] = [
  {
    heading: "What is product sampling?",
    label: "What it is",
    body: [
      "Product sampling is the process of giving people an opportunity to try a product before they decide to purchase it. That is the whole idea. Everything else, the location, the staffing, the packaging and the reporting, exists to serve that one moment.",
      "It can be conducted broadly, to reach a large audience, or targeted towards a specific audience that is more likely to be interested in the product. Broad sampling buys reach. Targeted sampling buys relevance. Most campaigns need a deliberate choice between the two rather than a drift into whichever is easier to execute.",
    ],
  },
  {
    heading: "Why is product sampling important?",
    label: "Why it matters",
    body: [
      "Product sampling is important because people are often less familiar with new products or brands, especially in competitive markets. Before making a purchase, customers need to develop trust and understand the value of a product. An advertisement can make a claim. A sample lets someone check it.",
      "By allowing potential customers to experience your product firsthand, sampling can help you:",
    ],
    bullets: [
      "Build awareness and trust around your brand",
      "Give customers an opportunity to experience the product before purchasing",
      "Collect feedback from real users",
      "Understand how people respond to your product",
      "Identify areas where the product or marketing approach can be improved",
    ],
    outro: [
      "The feedback you receive through sampling can also help you make better decisions about your product and its positioning in the market. A campaign that only counts units handed out throws away half of what it paid for.",
    ],
  },
  {
    heading: "Where is product sampling best suited?",
    label: "Where it fits",
    body: [
      "Product sampling can work across a wide range of product categories. It is particularly useful for products where customers benefit from experiencing, testing or trying the product before making a purchase, and where a description does the product no favours.",
      "Some common categories include:",
    ],
    bullets: [
      "Apparel and clothing",
      "Food and beverages",
      "Cosmetics and personal care",
      "Daily-use products",
      "DIY products",
      "New consumer products",
    ],
    outro: [
      "The right sampling approach depends on the product, the target audience, the location and the objective of the campaign. The same snack can call for a supermarket tasting, a campus activation or an on-board distribution depending on who you are trying to reach and what you want to learn.",
    ],
  },
  {
    heading: "How much does product sampling cost?",
    label: "What it costs",
    body: [
      "One of the first questions brands usually have is: how much does product sampling cost?",
      "There is no fixed cost, because the overall sampling budget depends on several factors, including the size of the brand, the campaign objective, the number of locations, the duration, the audience and the sampling requirements.",
      "For example, a startup may start with a sampling campaign costing around ₹50,000 for one location over a one-week period, excluding additional locations and campaign-specific requirements.",
      "The final cost can vary significantly depending on the scale and execution of the campaign. It is more useful to work backwards from the objective than to start from a number: how many relevant trials do you need, in how many places, over how long?",
    ],
  },
  {
    heading: "When is the best time to execute a sampling campaign?",
    label: "When to run it",
    body: [
      "The best time to conduct product sampling depends largely on the product and its target audience.",
      "If you are an ice cream brand, for example, a large sampling campaign in winter is unlikely to be as effective as one running in warmer months, when demand for ice cream is naturally higher. The same principle applies to other products.",
    ],
    listIntro: "Consider factors such as:",
    bullets: [
      "Seasonality",
      "Customer demand",
      "Product usage occasions",
      "Location",
      "Target audience behaviour",
      "Product launch timelines",
    ],
    outro: [
      "Choosing the right time can help you get better participation and more meaningful feedback from your sampling campaign. Timing also works at the scale of hours, not just seasons: an office snack sample lands differently at four in the afternoon than it does at ten in the morning.",
    ],
  },
  {
    heading: "How to plan your next product sampling campaign",
    label: "How to plan it",
    body: [
      "Before planning your next sampling campaign, make sure your product is ready for the market from end to end.",
      "If you are still testing your product or evaluating product-market fit, sampling can be used as a way to gather feedback and understand how your target audience responds to the product. If you have already established product-market fit and are ready to scale, you can plan a more structured campaign around your marketing and business objectives.",
    ],
    listIntro: "Start by defining:",
    ordered: [
      {
        title: "Your objective",
        copy: "Decide whether you want to build awareness, collect feedback, generate trials or support a product launch. The objective decides everything downstream, and a campaign chasing all four usually delivers none of them well.",
      },
      {
        title: "Your target audience",
        copy: "Identify the people who are most relevant to your product, in enough detail that a field team can recognise them on sight.",
      },
      {
        title: "Your locations",
        copy: "Select locations where your target audience is most likely to be present, and at the hours they are actually there.",
      },
      {
        title: "Your sampling approach",
        copy: "Decide how and where the product will be distributed, and what the interaction looks like beyond handing something over.",
      },
      {
        title: "Your feedback mechanism",
        copy: "Determine how you will collect and evaluate customer feedback while the campaign is running, not after it has ended.",
      },
      {
        title: "Your budget and timeline",
        copy: "Plan the campaign according to the resources you have, and be honest about what a given budget can cover.",
      },
    ],
  },
];

/** Anchors are derived from the heading rather than hand-written, so a reworded
 *  section keeps its contents entry and its link pointing at the same place. */
const slug = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const LEAD = [
  "Most brands do not lose a sale because someone disliked the product. They lose it because nobody ever tried it.",
  "Product sampling closes that gap in the most direct way available: you put the product in someone's hand and let it argue for itself. This guide covers what sampling is, why it works, where it fits, what it costs in India and how to plan a campaign that earns a genuine first try.",
];

const READ_MINUTES = Math.max(
  1,
  Math.round(
    [
      ...LEAD,
      ...SECTIONS.flatMap((s) => [
        s.heading,
        ...s.body,
        ...(s.bullets ?? []),
        ...(s.ordered ?? []).map((o) => `${o.title} ${o.copy}`),
        ...(s.outro ?? []),
      ]),
    ]
      .join(" ")
      .split(/\s+/).length / 200,
  ),
);

/** Article schema plus an FAQ graph: every heading here is a question a brand
 *  actually asks, so search and answer engines can lift them directly. */
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: TITLE,
      description: SUMMARY,
      datePublished: PUBLISHED,
      image: `${SITE_URL}${HERO}`,
      mainEntityOfPage: `${SITE_URL}${PATH}`,
      author: { "@type": "Organization", name: "Product Sampling Agency" },
      publisher: { "@type": "Organization", name: "Product Sampling Agency" },
    },
    {
      "@type": "FAQPage",
      mainEntity: SECTIONS.map((section) => ({
        "@type": "Question",
        name: section.heading,
        acceptedAnswer: { "@type": "Answer", text: section.body.join(" ") },
      })),
    },
  ],
};

function Post() {
  return (
    <div className="space-y-5 pb-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <Panel tone="primary">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-button font-semibold text-on-violet transition-colors hover:text-green-300"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
          Field notes
        </Link>

        <h1 className="font-display mt-7 max-w-4xl text-display font-semibold">{TITLE}</h1>
        <p className="mt-9.5 max-w-2xl text-foreground/80">{SUMMARY}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-button text-on-violet/80">
          <span className="font-semibold text-green-300">{PUBLISHED_LABEL}</span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" strokeWidth={1.8} />
            {READ_MINUTES} min read
          </span>
        </div>
      </Panel>

      <Panel tone="base">
        <img
          src={HERO}
          alt="A shopper taking a free sample from a branded sampling vending machine in a mall"
          className="aspect-[16/7] w-full rounded-3xl object-cover"
        />

        <div className="mt-12 max-w-[68ch] space-y-4">
          <p className="text-foreground/90">{LEAD[0]}</p>
          {LEAD.slice(1).map((para) => (
            <p key={para} className="text-foreground/75">
              {para}
            </p>
          ))}
        </div>
      </Panel>

      <Panel tone="raised">
        <h2 className="font-display max-w-[68ch] text-heading font-semibold">
          What is in this guide
        </h2>
        <ol className="mt-7 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section, i) => (
            <li key={section.heading}>
              <a
                href={`#${slug(section.heading)}`}
                className="group flex gap-3 rounded-brand-md py-2 text-body transition-colors hover:text-green-300"
              >
                <span className="tabular-nums text-muted-foreground transition-colors group-hover:text-green-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel tone="base">
        <div className="space-y-14">
          {SECTIONS.map((section) => (
            <section
              key={section.heading}
              id={slug(section.heading)}
              className="scroll-mt-24 border-t border-border-strong/40 pt-12 first:border-t-0 first:pt-0"
            >
              <h2 className="font-display max-w-[68ch] text-heading font-semibold">
                {section.heading}
              </h2>

              <div className="mt-7 max-w-[68ch] space-y-4">
                {section.body.map((para) => (
                  <p key={para} className="text-foreground/75">
                    {para}
                  </p>
                ))}
              </div>

              {section.listIntro ? (
                <p className="mt-4 max-w-[68ch] text-foreground/75">{section.listIntro}</p>
              ) : null}

              {section.bullets ? (
                <ul className="mt-6 space-y-4">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex max-w-[68ch] gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400"
                      />
                      <span className="text-foreground/75">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.ordered ? (
                <ol className="mt-8 max-w-[68ch] space-y-7">
                  {section.ordered.map((step, i) => (
                    <li key={step.title} className="flex gap-5">
                      <span className="font-display shrink-0 text-subtitle font-semibold tabular-nums text-green-300/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-subtitle font-semibold">{step.title}</h3>
                        <p className="mt-2 text-foreground/75">{step.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : null}

              {section.outro ? (
                <div className="mt-4 max-w-[68ch] space-y-4">
                  {section.outro.map((para) => (
                    <p key={para} className="text-foreground/75">
                      {para}
                    </p>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
