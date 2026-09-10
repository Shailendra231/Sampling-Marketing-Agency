import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, SITE_URL } from "@/data/site";
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
      { title: "Live brand activations | Product Sampling Agency" },
      {
        name: "description",
        content: "Live brand activations planned, staffed and run across Indian cities.",
      },
      { property: "og:title", content: "Live brand activations | Product Sampling Agency" },
      {
        property: "og:description",
        content: "Built around what the day has to achieve, then staffed and run by us.",
      },
      { property: "og:image", content: `${SITE_URL}/images/a-vibrant-candid-outdoor-indoor.webp` },
      { name: "twitter:image", content: `${SITE_URL}/images/a-vibrant-candid-outdoor-indoor.webp` },
      { property: "og:url", content: `${SITE_URL}/what-we-do/brand-experience` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/what-we-do/brand-experience` }],
  }),
  component: BrandExperience,
});

function BrandExperience() {
  return (
    <div className="space-y-5 pb-5">
      <PageHero
        title="Brand Experience Agency"
        intro="Planned around what the day has to achieve, then staffed and run by us."
      />

      <Panel tone="base">
        <h2 className="font-display max-w-3xl text-display font-semibold">
          Every activation should have a job
        </h2>
        <div className="mt-7 grid gap-12.5 text-foreground/75 lg:grid-cols-2">
          <p>
            Before anything gets designed we want one sentence on what the activation has to
            achieve. Trial, footfall, sign ups, or shifting stock in a specific store. The answer
            changes the whole build.
          </p>
          <p>
            We run these in malls, metro stations, campuses, markets and at events across Indian
            cities. Sometimes the right answer is a small table in the right doorway rather than a
            stage.
          </p>
        </div>
        <div className="mt-11.5">
          <PillLink to="/contact">Get in touch</PillLink>
        </div>
      </Panel>

      <Panel tone="raised">
        <h2 className="font-display text-display font-semibold">Recent activations</h2>
        <Marquee />
        <CaseStudyGrid items={CASE_STUDIES.slice(0, 6)} />
      </Panel>

      <Panel>
        <h2 className="font-display text-display font-semibold">Why brand experience works</h2>
        <p className="mt-7 max-w-3xl text-foreground/80">
          An activation earns its budget when it changes what someone does next. Usually that means
          one of these:
        </p>
        <div className="mt-section grid gap-12.5 md:grid-cols-2">
          {[
            {
              image: "/images/a-busy-indoor-mall-cinema.webp",
              alt: "Thrust brand activation crowd",
              title: "Put a product in front of people who have never tried it",
            },
            {
              image: "/images/a-lively-outdoor-indoor-mall.webp",
              alt: "woman taking photo of staff",
              title: "Give a launch somewhere physical to happen",
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
                <h3 className="font-display text-title font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
