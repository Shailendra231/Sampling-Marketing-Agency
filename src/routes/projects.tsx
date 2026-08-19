import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, CDN } from "@/data/site";
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
      { property: "og:image", content: `${CDN}/2025/09/Big-Dish-Live-51-1500x1000.jpg` },
      { name: "twitter:image", content: `${CDN}/2025/09/Big-Dish-Live-51-1500x1000.jpg` },
      { property: "og:url", content: "https://purity-clone-hub.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://purity-clone-hub.lovable.app/projects" }],
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

      <Panel tone="white" className="!py-10">
        <Marquee text="Case Studies" />
        <CaseStudyGrid items={CASE_STUDIES} />
      </Panel>

      <ContactCta />
    </div>
  );
}
