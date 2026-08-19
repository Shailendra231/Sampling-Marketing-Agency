import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, CDN } from "@/data/site";
import { CaseStudyGrid, ContactCta, PageHero, Panel, PillLink } from "@/components/site/ui";

export const Route = createFileRoute("/what-we-do/product-sampling")({
  head: () => ({
    meta: [
      { title: "Product Sampling Agency | Product Sampling Agency" },
      {
        name: "description",
        content:
          "Product Sampling Agency designs product sampling campaigns that boost sales, build loyalty and inspire advocacy for brands in the UK, USA and worldwide.",
      },
      { property: "og:title", content: "Product Sampling Agency | Product Sampling Agency" },
      {
        property: "og:description",
        content: "Boost sales, build loyalty and inspire advocacy with Product Sampling Agency product sampling.",
      },
      { property: "og:image", content: `${CDN}/2023/08/heineken_staff-2.jpg` },
      { name: "twitter:image", content: `${CDN}/2023/08/heineken_staff-2.jpg` },
      { property: "og:url", content: "https://purity-clone-hub.lovable.app/what-we-do/product-sampling" },
    ],
    links: [{ rel: "canonical", href: "https://purity-clone-hub.lovable.app/what-we-do/product-sampling" }],
  }),
  component: ProductSampling,
});

const BENEFITS = [
  {
    title: "Sales Growth",
    copy: "Product sampling campaigns have been proven to drive sales growth, with conversion rates soaring as high as 70%. It’s a persuasive force that motivates consumers to take action and make a purchase.",
  },
  {
    title: "Heightened Brand Awareness",
    copy: "Sampling not only introduces your brand to new audiences but also creates a buzz and generates word-of-mouth recommendations. This helps to amplify your brand’s visibility and increase awareness among consumers.",
  },
  {
    title: "Strong Return on Investment",
    copy: "With a staggering 81% of consumers who receive a sample ending up making a purchase from that brand, product sampling delivers a strong return on investment.",
  },
  {
    title: "Influence Buyer Behaviour",
    copy: "By offering consumers a hands-on experience with your product, sampling has the ability to influence their decision-making process, increasing the likelihood of future purchases.",
  },
  {
    title: "Gain Valuable Consumer Insights",
    copy: "Product sampling provides an opportunity to gather real-time consumer feedback and valuable insights to refine your marketing strategies and product offerings.",
  },
  {
    title: "Real-Time Consumer Feedback",
    copy: "Through product sampling, you receive immediate feedback from consumers, enabling you to gauge their reactions and opinions and shape future campaigns.",
  },
];

function ProductSampling() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="Product sampling for your brand"
        intro="How can product sampling benefit brands and consumers"
      />

      <Panel tone="white">
        <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Boost Sales, Build Loyalty &amp; Inspire Advocacy with Product Sampling Agency
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg text-ink/75">
            <p>
              Product Sampling Agency is more than a product sampling agency; we’re a trusted partner for top brands
              like Mondelez, Danone, Adidas, Pernod Ricard, Samsung, and Diageo.
            </p>
            <p>
              We know strategic product sampling can be game-changing. Studies show that brands using
              sampling outperform competitors and achieve higher ROI. Why? Because:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>People buy what they’ve tried and loved</li>
              <li>Happy customers become brand champions</li>
              <li>Trial experiences create lasting positive associations</li>
            </ul>
          </div>
          <div className="space-y-4 text-lg text-ink/75">
            <p>At Product Sampling Agency, we design sampling campaigns that:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-ink">Drive sales</strong>: Get your product into potential
                customers’ hands
              </li>
              <li>
                <strong className="text-ink">Create advocates</strong>: Turn satisfied samplers into
                loyal champions
              </li>
              <li>
                <strong className="text-ink">Build success</strong>: Lay the foundation for long-term
                brand love
              </li>
            </ul>
            <p className="font-semibold text-ink">
              Unlock the power of product sampling with Product Sampling Agency.
            </p>
          </div>
        </div>
      </Panel>

      <Panel tone="cloud">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Why choose product sampling?
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="font-display text-xl font-bold">{benefit.title}</h3>
              <p className="mt-3 text-ink/70">{benefit.copy}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-4xl text-lg font-semibold text-ink">
          When it comes to reaching consumers, driving sales, and amplifying your brand’s impact,
          product sampling is a strategic choice that yields impressive results. Trust Product Sampling Agency, the
          experts in product sampling, to design and execute impactful campaigns that deliver
          exceptional outcomes for your brand.
        </p>
      </Panel>

      <Panel>
        <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Product Sampling Agency is the world’s leading product sampling agency
        </h2>
        <div className="mt-8 grid gap-8 text-lg text-ink/80 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="font-semibold text-ink">Why?</p>
            <p>
              We recognise the diversity of different demographics, the nuances in worldwide consumer
              expectations, and evolving trends that influence global markets.
            </p>
            <p>
              We also invest time into understanding your brand’s unique qualities and core elements,
              building meaningful and memorable experiences that resonate, and generate sales.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              PSA People understand that they are in the business of relationships and are trained
              in the art of connecting with consumers, through body language and sales techniques.
            </p>
            <p>
              We will work closely with you to deliver successful product sampling campaigns that
              drive tangible results for your business.
            </p>
            <PillLink to="/contact">Start your project</PillLink>
          </div>
        </div>
      </Panel>

      <Panel tone="white">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          We create measurable moments
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-ink/75">
          Product Sampling Agency, the leading product sampling agency, has a remarkable track record of{" "}
          <strong className="text-ink">
            successfully reaching over 3 million consumers in the past 5 years around the world
          </strong>
          . As specialists in product sampling, we understand the importance of precise consumer
          targeting and implementing the right strategy to achieve maximum impact.
        </p>
        <div className="mt-10">
          <CaseStudyGrid items={CASE_STUDIES.filter((_, i) => [3, 1, 5].includes(i))} />
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
