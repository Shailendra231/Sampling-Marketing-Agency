import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, CDN } from "@/data/site";
import {
  CaseStudyGrid,
  ContactCta,
  Marquee,
  PageHero,
  Panel,
  PillLink,
} from "@/components/site/ui";

export const Route = createFileRoute("/what-we-do/brand-experience")({
  head: () => ({
    meta: [
      { title: "Brand Experience Agency | Product Sampling Agency" },
      {
        name: "description",
        content:
          "Product Sampling Agency is a brand experience agency creating live experiences that deliver brand activations and drive results in the UK, USA and beyond.",
      },
      { property: "og:title", content: "Brand Experience Agency | Product Sampling Agency" },
      {
        property: "og:description",
        content: "Live experiences that deliver brand activations and drive results.",
      },
      { property: "og:image", content: `${CDN}/2025/11/Thrust_Hardrock_-45-of-82-1500x1000.jpg` },
      { name: "twitter:image", content: `${CDN}/2025/11/Thrust_Hardrock_-45-of-82-1500x1000.jpg` },
      { property: "og:url", content: "https://purity-clone-hub.lovable.app/what-we-do/brand-experience" },
    ],
    links: [{ rel: "canonical", href: "https://purity-clone-hub.lovable.app/what-we-do/brand-experience" }],
  }),
  component: BrandExperience,
});

function BrandExperience() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="Brand Experience Agency"
        intro="Live experiences that deliver brand activations and drive results."
      />

      <Panel tone="white">
        <h2 className="font-display max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          We’re an experiential marketing agency with intent
        </h2>
        <div className="mt-8 grid gap-6 text-lg text-ink/75 lg:grid-cols-2">
          <p>
            Every brand experience is built with purpose. We start by understanding <em>why</em> an
            experience is needed; What needs to be achieved? Who do we need to reach? Where will a
            live experience have the greatest impact?
          </p>
          <p>
            We design experiences for our brand activations in the UK, USA and selected
            international markets, from major sporting events and cultural moments to retail spaces
            and public commuter hotspots.
          </p>
        </div>
        <div className="mt-8">
          <PillLink to="/contact">Get in touch</PillLink>
        </div>
      </Panel>

      <Panel tone="cloud" className="!py-10">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Proven experiential marketing results
        </h2>
        <Marquee />
        <CaseStudyGrid items={CASE_STUDIES.slice(0, 6)} />
      </Panel>

      <Panel>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Why brand experience works</h2>
        <p className="mt-6 max-w-3xl text-lg text-ink/80">
          Our campaigns ensure brands show up in the moments that really matter, driving engagement,
          trial and action through live experiences. Perfect for when you need to:
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              image: `${CDN}/2025/11/Thrust_Hardrock_-45-of-82-1500x1000.jpg`,
              alt: "Thrust brand activation crowd",
              title: "Turn activation into experiences that perform",
            },
            {
              image: `${CDN}/2025/09/heineken_photo-1500x1000.jpg`,
              alt: "woman taking photo of staff",
              title: "Launch a new product to the right audience",
            },
          ].map((card) => (
            <div key={card.title} className="overflow-hidden rounded-3xl bg-background">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
