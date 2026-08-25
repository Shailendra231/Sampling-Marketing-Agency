import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, SITE_URL } from "@/data/site";
import { CaseStudyGrid, ContactCta, Marquee, PageHero, Panel } from "@/components/site/ui";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Work | Brand Activation Case Studies | Product Sampling Agency" },
      {
        name: "description",
        content:
          "Explore Product Sampling Agency brand activation case studies across brand experience, product sampling and staffing for brands including Heineken, Malibu and Uber Eats.",
      },
      { property: "og:title", content: "Our Work | Product Sampling Agency Case Studies" },
      {
        property: "og:description",
        content: "Brand activation case studies from the UK, USA and international markets.",
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
        intro="Brand activations, product sampling campaigns and staffing projects delivered for brands and agencies around the world."
      />

      <Panel tone="base" className="!py-10">
        <Marquee text="Case Studies" />
        <CaseStudyGrid items={CASE_STUDIES} />
      </Panel>

      <ContactCta />
    </div>
  );
}
