import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, SITE_URL } from "@/data/site";
import { CaseStudyGrid, ContactCta, Marquee, PageHero, Panel } from "@/components/site/ui";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Work | Sampling and activation campaigns" },
      {
        name: "description",
        content:
          "Sampling routes, mall activations and staffed campaigns we have run across India.",
      },
      { property: "og:title", content: "Our Work | Product Sampling Agency" },
      {
        property: "og:description",
        content: "Sampling routes, mall activations and field campaigns we have run across India.",
      },
      { property: "og:image", content: `${SITE_URL}/images/a-lively-outdoor-indoor-mall.webp` },
      { name: "twitter:image", content: `${SITE_URL}/images/a-lively-outdoor-indoor-mall.webp` },
      { property: "og:url", content: `${SITE_URL}/projects` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projects` }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero
        title="Our Work"
        intro="Sampling routes, mall activations and staffed campaigns from the last few seasons."
      />

      <Panel tone="base" className="!py-10">
        <Marquee text="Case Studies" />
        <CaseStudyGrid items={CASE_STUDIES} />
      </Panel>

      <ContactCta />
    </div>
  );
}
