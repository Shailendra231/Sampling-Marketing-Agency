import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/data/site";
import { breadcrumb, graph } from "@/data/schema";
import { ContactCta, PageHero, Panel, PillLink } from "@/components/site/ui";
import { JsonLd } from "@/components/site/JsonLd";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who you will be dealing with | About Our Brand Activation Team" },
      {
        name: "description",
        content:
          "A sampling and activation team based in Gurugram, running campaigns across Indian cities.",
      },
      { property: "og:title", content: "Who you will be dealing with" },
      {
        property: "og:description",
        content: "A sampling and activation team based in Gurugram.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/culture-intelligence-summit-portrait.webp`,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/culture-intelligence-summit-portrait.webp`,
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: About,
});

/** Where this page sits in the site, for the breadcrumb trail in search
 *  results. The business itself is described once, in the root schema. */
const SCHEMA = graph(breadcrumb([{ name: "About", path: "/about" }]));

function About() {
  return (
    <div className="space-y-5 pb-5">
      <JsonLd schema={SCHEMA} />
      <PageHero
        title="Who you will be dealing with"
        intro="We are a sampling and activation team based in Gurugram, working across Indian cities."
        extra={
          <p className="mt-4 max-w-2xl text-foreground/80">
            Most of our work happens on a footpath, in a mall atrium or at a society gate, on a
            weekday, in the heat.
          </p>
        }
      />

      <Panel tone="base">
        <div className="grid gap-12.5 md:grid-cols-2">
          {[
            {
              src: "/images/travel-solutions-exhibition-stand.webp",
              alt: "Staff on a travel solutions stand at a trade exhibition",
            },
            {
              src: "/images/bma-infosolutions-exhibition-stand.webp",
              alt: "A BMA Infosolutions stand at a trade exhibition",
            },
            {
              src: "/images/trident-group-brand-experience.webp",
              alt: "Visitors at a Trident Group brand experience event",
            },
            {
              src: "/images/culture-intelligence-summit-portrait.webp",
              alt: "At the ShareChat and Moj Culture Intelligence Summit backdrop",
            },
          ].map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </Panel>

      <Panel>
        <h2 className="font-display max-w-4xl text-display font-semibold">
          Small team. You will speak to the person running your campaign
        </h2>
        <div className="mt-7 grid gap-12.5 text-foreground/80 lg:grid-cols-2">
          <div className="space-y-4">
            <p>Sampling is an operations job wearing a marketing costume.</p>
            <p>
              The idea is usually the easy part. Getting thirty trained people to the right places
              on the right morning is not.
            </p>
            <p>We are based in Gurugram and run campaigns across the NCR and other metros.</p>
            <p>
              We are small enough that the person who plans your route is the person who answers the
              phone.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              You will get the same person from the first call to the final report, and they will
              have visited the sites.
            </p>
            <p>
              When a day goes badly we say so in the report. That is worth more to you than a clean
              slide.
            </p>
            <p className="font-semibold text-foreground">
              Come and see a shift before you commit to anything.
            </p>
            <PillLink to="/contact">Get in touch</PillLink>
          </div>
        </div>
      </Panel>

      <ContactCta />
    </div>
  );
}
