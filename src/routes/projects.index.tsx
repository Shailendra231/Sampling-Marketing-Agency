import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, SITE_URL } from "@/data/site";
import { breadcrumb, graph } from "@/data/schema";
import { CaseStudyGrid, ContactCta, Marquee, PageHero, Panel } from "@/components/site/ui";
import { JsonLd } from "@/components/site/JsonLd";

export const Route = createFileRoute("/projects/")({
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

/** Where this page sits in the site, for the breadcrumb trail in search
 *  results. The business itself is described once, in the root schema. */
const SCHEMA = graph(breadcrumb([{ name: "Projects", path: "/projects" }]));

function Projects() {
  return (
    <div className="space-y-5 pb-5">
      <JsonLd schema={SCHEMA} />
      <PageHero
        title="Our Work"
        intro="Sampling routes, mall activations and staffed campaigns from the last few seasons."
      />

      <Panel tone="base">
        <Marquee text="Case Studies" />
        <CaseStudyGrid items={CASE_STUDIES} />
      </Panel>

      <ContactCta />
    </div>
  );
}
