import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Clock, ListOrdered } from "lucide-react";
import { SITE_URL } from "@/data/site";
import { breadcrumb, graph } from "@/data/schema";
import { ContactCta, Panel } from "@/components/site/ui";

const HERO = "/images/a-lively-outdoor-indoor-mall.webp";
const CONSULTATION = "https://calendly.com/ramkumarshailendra/30min";
const TITLE = "20 Product Sampling Ideas to Get Your Product Into Consumers' Hands";
const PATH = "/blog/20-product-sampling-ideas";
const PUBLISHED = "2026-09-06";
const PUBLISHED_LABEL = "September 2026";

export const Route = createFileRoute("/blog/20-product-sampling-ideas")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content:
          "Looking for product sampling ideas? Explore 20 ways to get your product into the right hands, from malls and gyms to retail, events, offices and experiential campaigns.",
      },
      { property: "og:title", content: TITLE },
      {
        property: "og:description",
        content: "Twenty ways to put a product in the right hands, and how to choose between them.",
      },
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

/** The twenty ideas, kept as data so the page body stays readable and the
 *  numbering, the contents list and the anchors cannot drift apart. */
const IDEAS = [
  {
    title: "Mall Sampling: Go Where People Already Come to Explore",
    copy: "Malls offer footfall plus time. People browse, eat, shop and meet friends, making malls a natural environment for product sampling. Create a small experience around the product instead of simply handing out a sample. A beverage can use a tasting counter, skincare can offer a quick consultation, and a snack can turn sampling into a taste challenge. The objective is not maximum distribution. It is meaningful trial.",
  },
  {
    title: "Gym Sampling: Catch Consumers in the Right Mindset",
    copy: "People in gyms are actively thinking about health, fitness, nutrition and performance. That makes gyms powerful for protein bars, electrolytes, healthy beverages, supplements, skincare and functional foods. The product should fit naturally into the consumer's routine rather than interrupt it.",
  },
  {
    title: "College and Campus Sampling: Let the Audience Do the Talking",
    copy: "College campuses are social ecosystems. One person tries something, another asks about it, someone posts it, and a group decides to try it. Youth-focused brands can combine product trial with games, challenges, creator content, QR rewards or social sharing. Make it feel like something students want to participate in.",
  },
  {
    title: "Office Sampling: Put the Product Where Decisions Happen",
    copy: "Offices are an overlooked sampling opportunity. A healthy snack can sample during afternoon hunger hours, a coffee brand can activate around the morning routine, and personal care can target working professionals. One sample can travel through a team as colleagues ask what it is and try it.",
  },
  {
    title: "Residential Society Sampling: Take the Product Home",
    copy: "Residential societies offer access to families, professionals and community groups in a concentrated environment. For household products, food, beverages, cleaning products, personal care, baby products and wellness, consumers can take the experience home and share it with others.",
  },
  {
    title: "Retail and In-Store Sampling: Let the Product Sell Itself",
    copy: "The consumer is already close to a purchase decision. A food brand can offer a tasting near the shelf, a beauty brand can demonstrate texture or finish, and a beverage brand can offer a chilled trial. The journey becomes simple: see it, try it, like it, buy it.",
  },
  {
    title: "Supermarket Sampling: Turn 'Maybe' Into 'I'll Take One'",
    copy: "Supermarkets work especially well when taste or physical experience can remove purchase hesitation. Sample close to the buying moment and make the next step obvious. If someone loves the product, make buying it easy.",
  },
  {
    title: "Events and Exhibitions: Make Your Product Part of the Experience",
    copy: "Events offer an audience that expects interaction. At exhibitions, lifestyle events, consumer expos, music events or conferences, create a reason to stop: a challenge, demonstration, consultation, photo opportunity or taste test. The sample gets people to stop. The experience gives them a reason to remember.",
  },
  {
    title: "Festivals and Large Gatherings: Sample Where Culture Is Happening",
    copy: "Festivals are full of energy and social interaction. A beverage can create a cooling station, a snack brand can own the hunger window, and a beauty brand can create a refresh zone. The strongest festival sampling feels like the brand understood what people needed at that moment.",
  },
  {
    title: "Product Launch Sampling: Don't Just Announce It, Let People Experience It",
    copy: "A launch can generate plenty of noise, but consumers still need a way to experience the new product. Sampling brings the launch from the screen into the real world. It is especially useful for new flavours, formats, beverages, snacks, beauty products and wellness products where trial can overcome uncertainty.",
  },
  {
    title: "D2C Sampling: Take the Trial Beyond the First Purchase",
    copy: "D2C brands know their customers. Sampling can introduce an existing customer to the next product: face wash to moisturiser, coffee to another roast, or one protein flavour to another. Sampling can become part of the customer journey, not just acquisition.",
  },
  {
    title: "Influencer-Led Sampling: Let Someone They Trust Try It First",
    copy: "Consumers often want to see someone else experience a product. Influencer-led sampling works best when creators have a genuine reason to use, test, compare or demonstrate the product. The strongest approach is not simply asking for promotion, but giving the creator something worth experiencing.",
  },
  {
    title: "Food and Beverage Sampling: Let Taste Do the Selling",
    copy: "Food and beverages have an obvious sampling advantage. You can let people taste rather than explain flavour. Context makes it stronger: a healthy snack after a workout, coffee in the morning, or an ice cream experience in summer. The product becomes part of a moment.",
  },
  {
    title: "Beauty and Skincare Sampling: Make the Trial Personal",
    copy: "Beauty is experiential. Texture, fragrance, finish and application matter. Personalised sampling can make the interaction more valuable by using simple questions or consultations to recommend the right product or variant instead of giving everyone the same sample.",
  },
  {
    title: "FMCG Sampling: Win the First-Try Battle",
    copy: "FMCG shoppers have plenty of choices, so familiarity can become a barrier. Sampling helps break it. Campaigns can run across supermarkets, retail stores, malls, societies, offices, colleges and neighbourhoods. The better question is not how many samples were distributed, but how many relevant consumers genuinely tried the product.",
  },
  {
    title: "Roadshows and Mobile Sampling: Take the Brand to the Consumer",
    copy: "A mobile sampling setup can take products into high-footfall neighbourhoods, markets, campuses, business districts and event zones. A branded vehicle, mobile tasting station or moving experience can make the sampling unit itself part of the creative idea.",
  },
  {
    title: "Door-to-Door Sampling: Go Hyperlocal",
    copy: "Door-to-door sampling allows brands to select specific neighbourhoods, consumer profiles or residential clusters instead of distributing randomly. It can work well for household products, food, beverages, personal care and local launches. The format is simple: relevance, convenience and a product worth trying.",
  },
  {
    title: "Experiential Sampling: Don't Just Give the Product, Give Them a Story",
    copy: "A sample can have a short shelf life in someone's memory. An experience can last longer. Turn a skincare trial into self-care, a beverage sample into a refreshing break, a snack trial into a game, or a demonstration into a challenge. The product remains the hero, while the experience gives people a reason to remember it.",
  },
  {
    title: "Targeted Sampling: Stop Giving Everyone Everything",
    copy: "More samples do not automatically mean better sampling. Start with who is most likely to want the product, then build around audience, location, lifestyle, occasion or behaviour. Sometimes fewer samples can mean far more meaningful trials.",
  },
  {
    title: "Sampling Plus Feedback: Don't Just Give, Listen",
    copy: "Sampling can become a source of consumer intelligence. Ask what people liked, what they did not, whether they would buy, whether they would recommend it, and what would make them choose it over another product. A sampling interaction can create both trial and insight.",
  },
];

const LEAD = [
  "You can tell people your product is great. You can show them a beautiful ad, put a celebrity behind it, and spend money getting it onto their screens again and again. Or, you can simply put the product in their hands.",
  "Because sometimes, the distance between ‘I’ve heard of it’ and ‘I want it’ is just one good first experience. That is where product sampling comes in.",
  "Sampling isn’t simply about standing somewhere busy and handing out free products. The location, audience, timing, interaction, product experience and follow-up can determine whether someone remembers your brand five minutes later, or becomes a customer.",
  "So, if you’re planning a product sampling campaign, here are 20 product sampling ideas that can help you take your product from ‘Have you heard of this?’ to ‘Have you tried this?’",
];

/** Anchors are derived from the heading rather than hand-written, so a reworded
 *  idea keeps its contents entry and its link pointing at the same section. */
const slug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** Short label for the contents list: the part before the colon. */
const shortTitle = (title: string) => title.split(":")[0];

const READ_MINUTES = Math.max(
  1,
  Math.round(
    [...LEAD, ...IDEAS.map((i) => `${i.title} ${i.copy}`)].join(" ").split(/\s+/).length / 200,
  ),
);

/** A hairline that fills as the article scrolls. Cheap orientation on a page
 *  this long, and it costs one listener rather than an observer per section. */
function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (reduced) return null;

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div ref={bar} className="h-full w-0 bg-gradient-cta transition-[width] duration-150" />
    </div>
  );
}

/** Article schema so search and answer engines can read the piece as an article
 *  rather than inferring it from the markup. */
const SCHEMA = graph(
  {
    "@type": "BlogPosting",
    headline: TITLE,
    datePublished: PUBLISHED,
    image: `${SITE_URL}${HERO}`,
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    author: { "@type": "Organization", name: "Product Sampling Agency" },
    publisher: { "@type": "Organization", name: "Product Sampling Agency" },
  },
  breadcrumb([
    { name: "Blog", path: "/blog" },
    { name: TITLE, path: PATH },
  ]),
);

function Post() {
  return (
    <div className="space-y-5 pb-5">
      <ReadingProgress />
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
        <p className="mt-9.5 max-w-2xl text-foreground/80">
          Twenty ways to put a product in the right hands, and how to choose between them.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-button text-on-violet/80">
          <span className="font-semibold text-green-300">{PUBLISHED_LABEL}</span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" strokeWidth={1.8} />
            {READ_MINUTES} min read
          </span>
          <span className="inline-flex items-center gap-2">
            <ListOrdered className="h-4 w-4" strokeWidth={1.8} />
            {IDEAS.length} ideas
          </span>
        </div>
      </Panel>

      <Panel tone="base">
        <img
          src={HERO}
          alt="A promoter running a skincare sampling counter inside a mall"
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
          {IDEAS.map((idea, i) => (
            <li key={idea.title}>
              <a
                href={`#${slug(idea.title)}`}
                className="group flex gap-3 rounded-brand-md py-2 text-body transition-colors hover:text-green-300"
              >
                <span className="tabular-nums text-muted-foreground transition-colors group-hover:text-green-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {shortTitle(idea.title)}
              </a>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel tone="base">
        <ol className="space-y-12">
          {IDEAS.map((idea, i) => (
            <li
              key={idea.title}
              id={slug(idea.title)}
              className="scroll-mt-24 border-t border-border-strong/40 pt-10 first:border-t-0 first:pt-0"
            >
              <p className="font-display text-button font-semibold tabular-nums text-green-300/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-3 max-w-[68ch] text-heading font-semibold">
                {idea.title}
              </h2>
              <p className="mt-7 max-w-[68ch] text-foreground/75">{idea.copy}</p>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel tone="raised">
        <div className="max-w-[68ch]">
          <h2 className="font-display text-heading font-semibold">
            So, which product sampling idea should you choose?
          </h2>
          <div className="mt-7 space-y-4 text-foreground/75">
            <p>
              There is no universal answer. The right sampling strategy depends on what you sell,
              who you sell it to and where those consumers naturally spend their time. A protein
              product might belong in gyms. A new beverage might work at colleges, offices or
              events. Skincare may need a more personalised experience. An FMCG product might
              benefit from retail and supermarket sampling. A D2C product might combine targeted
              offline sampling with influencer content and digital follow-up.
            </p>
            <p className="border-l-2 border-green-500/60 pl-6 text-foreground/90">
              The smartest campaigns do not ask, &lsquo;Where can we distribute samples?&rsquo; They
              ask, &lsquo;Where will the right consumer be most open to trying this?&rsquo;
            </p>
            <p>
              That is the real difference. Product sampling is not about giving something away for
              free. It is about creating a first experience. When that experience is relevant,
              memorable and genuinely good, a sample can turn curiosity into trial, trial into
              preference, and preference into purchase.
            </p>
          </div>

          <h2 className="font-display mt-16 text-heading font-semibold">
            Ready to put your product in the right hands?
          </h2>
          <div className="mt-7 space-y-4 text-foreground/75">
            <p>
              A great sampling campaign does not begin with a box of samples. It begins with the
              consumer. Who are they? Where do they spend their time? What are they doing when they
              encounter your brand? And what kind of experience would make them stop, try and
              remember?
            </p>
            <p>
              Product Sampling Agency handles planning, permissions, field teams, sampling and
              reporting across India, with campaigns built around the right audience, site and
              moment.
            </p>
            <p>
              Want to discuss your campaign?{" "}
              <a
                href={CONSULTATION}
                className="font-semibold text-green-300 underline underline-offset-4 hover:text-green-200"
              >
                Book a 30-minute consultation
              </a>
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
