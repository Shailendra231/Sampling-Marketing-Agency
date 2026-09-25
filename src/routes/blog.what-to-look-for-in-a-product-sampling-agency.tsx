import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, HelpCircle, PenLine } from "lucide-react";
import { SITE_URL } from "@/data/site";
import { breadcrumb } from "@/data/schema";
import { ContactCta, Panel } from "@/components/site/ui";

const HERO = "/images/a-realistic-street-sidewalk-scene.webp";
const TITLE = "What to Look for in a Product Sampling Agency";
const PATH = "/blog/what-to-look-for-in-a-product-sampling-agency";
const AUTHOR = "Praveen Singh";
const PUBLISHED = "2026-09-21";
const PUBLISHED_LABEL = "September 2026";
const SUMMARY =
  "A practical checklist for brand and category managers: the twelve questions worth asking before you hand a campaign to a sampling agency.";

export const Route = createFileRoute("/blog/what-to-look-for-in-a-product-sampling-agency")({
  head: () => ({
    meta: [
      { title: `${TITLE}? | Brand Checklist` },
      {
        name: "description",
        content:
          "Choosing a product sampling agency? Know what to check before hiring, from audience and locations to field teams, execution, measurement and reporting.",
      },
      { name: "author", content: AUTHOR },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SUMMARY },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:author", content: AUTHOR },
      { property: "og:image", content: `${SITE_URL}${HERO}` },
      { name: "twitter:image", content: `${SITE_URL}${HERO}` },
      { property: "og:url", content: `${SITE_URL}${PATH}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
  }),
  component: Post,
});

type Question = {
  heading: string;
  /** Short label for the contents list, where the full heading is too long to sit in a grid. */
  label: string;
  body: string[];
  /** The line to actually put to the agency. Pulled out so it can be skimmed. */
  ask?: string;
  /** Lead-in for the list, so the bullets are not left hanging off the last paragraph. */
  listIntro?: string;
  bullets?: string[];
  outro?: string[];
};

/** The article kept as data so the contents list, the anchors and the sections
 *  cannot drift apart when the copy is edited. */
const QUESTIONS: Question[] = [
  {
    heading: "Do they understand your audience before talking about distribution?",
    label: "Audience first",
    body: [
      "This should be one of the first things you look for. Before an agency starts talking about locations, sample numbers or manpower, it should understand who your product is actually meant for.",
      "Who is your ideal customer? What is their age group? Where are they located? What do they usually buy? What are they already using? What problem does your product solve for them?",
      "You do not need the agency to know every answer before the first call. You should expect it to ask the right questions.",
    ],
    outro: [
      "If you are a nutrition brand targeting people who actively work out, an agency should be able to think past “young audience” and start discussing the right type of fitness audience, the location, the timing and the interaction. That tells you whether they are planning around your product, or trying to fit your product into the locations they already have.",
    ],
  },
  {
    heading: "Can they explain why a location is right for your product?",
    label: "Location logic",
    body: [
      "This is one of the easiest ways to read the quality of an agency, because a location can have high footfall and still be a poor sampling location.",
      "Ask why a site was selected. A weak answer is “because there is a lot of footfall.” A better answer explains who visits the location, when the relevant audience is there and why those people are likely to interact with the product. A premium skincare product, a protein snack and a ready-to-drink beverage can all need very different environments.",
    ],
    ask: "Who exactly are we trying to meet there?",
    outro: [
      "The right location is not always the busiest one. It is the one where the right consumer is already present.",
    ],
  },
  {
    heading: "Can they explain the campaign behind the photographs?",
    label: "Past work",
    body: [
      "Past work matters, but the pictures are only one part of the story. A campaign can look excellent in photographs and still tell you very little about what happened on the ground.",
      "So ask the agency to talk you through the work:",
    ],
    bullets: [
      "What was the objective?",
      "Who was the target audience?",
      "Why was that location selected?",
      "How long did the campaign run?",
      "What happened during execution?",
      "What did the team learn, and what would they do differently?",
    ],
    outro: [
      "This is where you start to see the difference between a portfolio and actual experience. A good case study helps you understand the thinking behind the execution, and sometimes a smaller campaign tells you more than a large one, because the agency can describe the problem it hit and how it solved it.",
    ],
  },
  {
    heading: "Who is going to be on the ground?",
    label: "The field team",
    body: [
      "This gets ignored during most pitches. You may meet a senior person who explains the entire campaign beautifully, and then never see them again once the campaign starts.",
      "So ask who will actually run it. Who briefs the promoters? Who supervises the team? Who checks attendance? Who handles a problem at a location? Who reports back to you, and who takes the decision when something changes?",
      "Sampling is an on-ground activity. A location can underperform. A promoter may not turn up. Stock can arrive late. Timing can move.",
    ],
    outro: [
      "You want to know that someone is responsible for handling those situations, rather than reporting them to you after the campaign has finished.",
    ],
  },
  {
    heading: "Do they have a proper execution plan?",
    label: "Execution plan",
    body: [
      "A good sampling campaign has a clear plan before the first sample is distributed, and the agency should be able to walk you from planning through to execution.",
    ],
    listIntro: "That usually covers:",
    bullets: [
      "Location selection and permissions",
      "Logistics and stock movement",
      "Manpower, briefing and supervision",
      "Distribution and the interaction itself",
      "Monitoring and reporting",
    ],
    ask: "What happens from the time the campaign starts until the final report reaches me?",
    outro: [
      "If the answer is vague, keep asking. You should understand the process well enough to know where your product is going, who is handling it and how the campaign will be watched. Your campaign should not depend on people working things out after they reach the location.",
    ],
  },
  {
    heading: "Do they know what success means for your campaign?",
    label: "Defining success",
    body: [
      "Not every campaign should be judged on the number of samples distributed. Sometimes the goal is trial. Sometimes it is awareness, feedback, lead generation, or getting someone to make a first purchase.",
      "The agency should understand your actual objective before it decides what to report. If you are testing a new product, consumer feedback may be worth more than a higher distribution count. If your goal is conversion, then the step after the sample is what matters, and you may want to measure QR scans, coupon use, enquiries, purchases or another campaign-specific action.",
    ],
    outro: [
      "The right agency helps you connect the sampling activity to the outcome you care about, rather than to the number that is easiest to report.",
    ],
  },
  {
    heading: "Can they adapt the plan to your product?",
    label: "Fit to product",
    body: [
      "There is no single sampling formula that works for every product, and that should become obvious during the conversation.",
      "A beverage may need quick trial and easy consumption. A skincare product may need more explanation. A nutrition product may need a trained promoter who can describe how it is used. A packaged snack may work best in a high-consumption environment.",
    ],
    ask: "How would you run this campaign differently for our product?",
    outro: [
      "You are not only checking whether they have locations. You are checking whether they understand how the product should be introduced to the person receiving it. A campaign gets stronger when the sampling experience suits the product, instead of the product being forced into a standard campaign format.",
    ],
  },
  {
    heading: "What happens when a location does not perform?",
    label: "When it slips",
    body: [
      "This is the one I would most strongly recommend asking. Every location looks good in a proposal; the real test comes once the campaign starts.",
      "Suppose one site is generating lower engagement than expected. What happens next? Does the team spot it? Does the agency propose a change? Can the location or the timing be adjusted? Does anyone tell you while there is still time to act?",
    ],
    outro: [
      "You are not looking for an agency that promises everything will go perfectly. You are looking for one that knows what to do when it does not.",
    ],
  },
  {
    heading: "Is the quotation clear enough to understand?",
    label: "The quotation",
    body: [
      "Price matters, but the cheapest quotation is rarely the easiest one to compare. Two agencies can quote very different numbers while offering very different scopes.",
      "So instead of asking only what the total cost is, ask what is inside it.",
    ],
    listIntro: "Look at the full scope:",
    bullets: [
      "Locations and campaign duration",
      "Manpower and supervision",
      "Permissions and logistics",
      "Sample handling",
      "Reporting and any campaign-specific requirements",
    ],
    outro: [
      "The clearer the scope, the easier it is to compare agencies rather than comparing final numbers. What looks like a cheaper campaign often just has fewer things in it.",
    ],
  },
  {
    heading: "Can they tell you what they would improve?",
    label: "Their own view",
    body: [
      "This is a simple question that tells you a great deal. Explain your product and your objective, then ask it.",
    ],
    ask: "If this were your campaign, what would you change?",
    outro: [
      "Listen carefully to the answer. An agency that agrees with everything you say may simply be following instructions. An experienced team should bring its own thinking into the discussion. That does not mean rejecting your idea; it means being able to say where it sees an opportunity, what it would change and why. That conversation is usually worth more than another slide about the agency.",
    ],
  },
  {
    heading: "What will you actually learn after the campaign?",
    label: "What you learn",
    body: [
      "The campaign should not end when the last sample is handed out. You should be able to look back and understand what happened.",
      "Which locations worked? How many samples were genuinely distributed? How did people respond? Were there common questions or objections? Did consumers show real interest? What did the field team notice, and what should change next time?",
    ],
    outro: [
      "This is where sampling becomes more than distribution. The field can give you information that is difficult to get from a digital dashboard alone: consumer reactions, product questions and location-level differences that help you understand your audience better.",
    ],
  },
  {
    heading: "The final question to ask before you hire",
    label: "The last question",
    body: ["Before you close the discussion, ask one more thing."],
    ask: "What would you need from us to make this campaign successful?",
    outro: [
      "The answer tells you how the agency sees its own role. Does it treat the campaign as a partnership? Does it need product information, audience insight, brand guidelines, product training or a clearer campaign goal? A straight answer here shows how seriously the team is thinking about execution before the campaign has even begun.",
    ],
  },
];

/** The same twelve questions, compressed into something you can run down the
 *  side of a page during the call. */
const CHECKLIST = [
  "Did they understand my audience?",
  "Did they have a reason behind their location choices?",
  "Could they explain their past work?",
  "Did they name a clear field team?",
  "Could they explain the execution, start to finish?",
  "Did they understand how success would be measured?",
  "Could they adapt the campaign to the product?",
  "Did they explain what happens when something goes wrong?",
  "Was the quotation clear?",
  "Could they tell me what they would improve?",
];

const FAQS = [
  {
    q: "What should I ask a product sampling agency before hiring?",
    a: "Ask about their understanding of your target audience, their location strategy, their past campaign experience, the field team, the execution process, and how they will measure and report the campaign. Also ask how they handle problems when a location or an activity does not perform as expected.",
  },
  {
    q: "How do I evaluate a product sampling agency?",
    a: "Look at more than the presentation. Review previous work, ask how the agency selects locations, understand who will actually execute your campaign, and check whether the proposal clearly explains what is included.",
  },
  {
    q: "What should be included in a product sampling agency proposal?",
    a: "A proposal should clearly set out the campaign objective, target audience, locations, timing, manpower, permissions, logistics, sample requirements, execution plan and reporting.",
  },
  {
    q: "Should I choose a product sampling agency based only on price?",
    a: "Price is one part of the decision. Compare the full scope of work, including locations, manpower, supervision, logistics and reporting, so you know what each quotation actually covers.",
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
  "This is one of the first questions a brand or category manager runs into once a sampling campaign is on the table.",
  "Plenty of agencies can distribute samples. They can show you large numbers, attractive campaign photographs and a long list of locations. But sampling is rarely successful just because a lot of samples were handed out. The real question is simpler: can the agency put your product in front of the right people, at the right place, at the right time, and give you something useful back?",
  "Before you judge a book by its cover, have a proper conversation and look at the work behind it. Something can look unimpressive in a presentation and have strong execution behind it. A campaign can look excellent in photographs and tell you almost nothing about what happened on the ground. So instead of only looking at the presentation, look at how the agency thinks.",
  "Here are the questions worth keeping in mind during that call.",
];

const READ_MINUTES = Math.max(
  1,
  Math.round(
    [
      ...LEAD,
      ...QUESTIONS.flatMap((q) => [
        q.heading,
        ...q.body,
        q.ask ?? "",
        q.listIntro ?? "",
        ...(q.bullets ?? []),
        ...(q.outro ?? []),
      ]),
      ...CHECKLIST,
      ...FAQS.flatMap((f) => [f.q, f.a]),
    ]
      .join(" ")
      .split(/\s+/).length / 200,
  ),
);

/** Article schema plus the FAQ graph, so the four questions brands actually
 *  search for can be lifted directly by search and answer engines. */
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Blog", path: "/blog" },
      { name: TITLE, path: PATH },
    ]),
    {
      "@type": "BlogPosting",
      headline: TITLE,
      description: SUMMARY,
      datePublished: PUBLISHED,
      image: `${SITE_URL}${HERO}`,
      mainEntityOfPage: `${SITE_URL}${PATH}`,
      author: { "@type": "Person", name: AUTHOR },
      publisher: { "@type": "Organization", name: "Product Sampling Agency" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
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
          <span className="inline-flex items-center gap-2 font-semibold text-on-violet">
            <PenLine className="h-4 w-4" strokeWidth={1.8} />
            {AUTHOR}
          </span>
          <span className="font-semibold text-green-300">{PUBLISHED_LABEL}</span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" strokeWidth={1.8} />
            {READ_MINUTES} min read
          </span>
          <span className="inline-flex items-center gap-2">
            <HelpCircle className="h-4 w-4" strokeWidth={1.8} />
            {QUESTIONS.length} questions
          </span>
        </div>
      </Panel>

      <Panel tone="base">
        <img
          src={HERO}
          alt="A promoter handing a snack sample to a commuter beside a feedback board on a city footpath"
          className="aspect-[16/7] w-full rounded-3xl object-cover"
        />

        <div className="mt-12 max-w-[68ch] space-y-4">
          <p className="text-foreground">{LEAD[0]}</p>
          {LEAD.slice(1).map((para) => (
            <p key={para} className="text-foreground">
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
          {QUESTIONS.map((question, i) => (
            <li key={question.heading}>
              <a
                href={`#${slug(question.heading)}`}
                className="group flex gap-3 rounded-brand-md py-2 text-body transition-colors hover:text-green-300"
              >
                <span className="tabular-nums text-muted-foreground transition-colors group-hover:text-green-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {question.label}
              </a>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel tone="base">
        <div className="space-y-14">
          {QUESTIONS.map((question, i) => (
            <section
              key={question.heading}
              id={slug(question.heading)}
              className="scroll-mt-24 border-t border-border-strong/40 pt-12 first:border-t-0 first:pt-0"
            >
              <p className="font-display text-button font-semibold tabular-nums text-green-300/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-3 max-w-[68ch] text-heading font-semibold">
                {question.heading}
              </h2>

              <div className="mt-7 max-w-[68ch] space-y-4">
                {question.body.map((para) => (
                  <p key={para} className="text-foreground">
                    {para}
                  </p>
                ))}
              </div>

              {question.listIntro ? (
                <p className="mt-4 max-w-[68ch] text-foreground">{question.listIntro}</p>
              ) : null}

              {question.bullets ? (
                <ul className="mt-6 space-y-4">
                  {question.bullets.map((item) => (
                    <li key={item} className="flex max-w-[68ch] gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400"
                      />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {question.ask ? (
                <p className="mt-6 max-w-[68ch] border-l-2 border-green-500/60 pl-6 text-foreground">
                  Ask: &ldquo;{question.ask}&rdquo;
                </p>
              ) : null}

              {question.outro ? (
                <div className="mt-4 max-w-[68ch] space-y-4">
                  {question.outro.map((para) => (
                    <p key={para} className="text-foreground">
                      {para}
                    </p>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </Panel>

      <Panel tone="raised">
        <h2 className="font-display max-w-[68ch] text-heading font-semibold">
          A simple way to evaluate the agency
        </h2>
        <p className="mt-7 max-w-[68ch] text-foreground">
          Run down this list after the call. If you have a clear answer to each line, you are in a
          much better position to judge the agency you are considering.
        </p>
        <ul className="mt-9 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1.5 h-4 w-4 shrink-0 rounded-[5px] border border-green-400/70"
              />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel tone="base">
        <h2 className="font-display max-w-[68ch] text-heading font-semibold">
          Frequently asked questions
        </h2>
        <dl className="mt-9 space-y-10">
          {FAQS.map((faq) => (
            <div key={faq.q} className="max-w-[68ch]">
              <dt className="font-display text-subtitle font-semibold">{faq.q}</dt>
              <dd className="mt-3 text-foreground">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </Panel>

      <Panel tone="raised">
        <div className="max-w-[68ch]">
          <h2 className="font-display text-heading font-semibold">Final thought</h2>
          <div className="mt-7 space-y-4 text-foreground">
            <p>
              Choosing a product sampling agency is not about finding the biggest presentation or
              the lowest quotation. It is about finding a team that understands your product,
              understands your audience, and knows what has to happen once the campaign reaches the
              ground.
            </p>
            <p>
              The best agency conversation is not the one where you hear the most promises. It is
              the one you leave with a clear picture of who you are targeting, where you are going,
              how the campaign will run and what you will learn from it.
            </p>
            <p className="border-l-2 border-green-500/60 pl-6 text-foreground">
              So before you hire, do not only ask, &lsquo;How many samples can you
              distribute?&rsquo; Ask: &lsquo;Why this audience? Why this location? Who will execute
              it? How will you measure it? And what happens if the plan changes?&rsquo;
            </p>
            <p>Those answers tell you far more than a presentation ever will.</p>
          </div>

          <h2 className="font-display mt-16 text-heading font-semibold">
            Ready to plan your product sampling campaign?
          </h2>
          <div className="mt-7 space-y-4 text-foreground">
            <p>
              Have a product, an audience or a campaign objective in mind? Talk to our team about
              where your product should be sampled, who should receive it and how the campaign can
              be planned around your goals.
            </p>
            <p>
              Start with{" "}
              <Link
                to="/what-we-do/product-sampling"
                className="font-semibold text-green-300 underline underline-offset-4 hover:text-green-200"
              >
                how we run product sampling
              </Link>
              , or read{" "}
              <Link
                to="/blog/what-is-product-sampling"
                className="font-semibold text-green-300 underline underline-offset-4 hover:text-green-200"
              >
                what product sampling is
              </Link>{" "}
              and{" "}
              <Link
                to="/blog/20-product-sampling-ideas"
                className="font-semibold text-green-300 underline underline-offset-4 hover:text-green-200"
              >
                twenty ways to put a product in the right hands
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 border-t border-border-strong/60 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-button font-semibold text-green-300 transition-colors hover:text-green-200"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
              All field notes
            </Link>
          </div>
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
