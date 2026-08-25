import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Panel } from "@/components/site/ui";
import { CONTACT_EMAIL, SITE_URL } from "@/data/site";

export const Route = createFileRoute("/privacy-cookie-policy")({
  head: () => ({
    meta: [
      { title: "Privacy & Cookie Policy | Product Sampling Agency" },
      {
        name: "description",
        content:
          "What we do with the details you send through this site, and what the cookies are for.",
      },
      { property: "og:title", content: "Privacy & Cookie Policy | Product Sampling Agency" },
      {
        property: "og:description",
        content: "What we do with your details, and what the cookies are for.",
      },
      { property: "og:url", content: `${SITE_URL}/privacy-cookie-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy-cookie-policy` }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="space-y-6 pb-6">
      <PageHero title="Privacy & Cookie Policy" />
      <Panel tone="base">
        <div className="max-w-3xl space-y-4 text-lg text-foreground/75">
          <p>
            This page covers what we do with the details you send us through this site, and what the
            cookies are for.
          </p>
          <h2 className="font-display pt-4 text-2xl font-bold text-foreground">
            Information we collect
          </h2>
          <p>
            If you fill in the enquiry form or sign up for emails, we keep what you typed: name,
            email, phone and company. We also see anonymous traffic data about which pages get
            visited.
          </p>
          <h2 className="font-display pt-4 text-2xl font-bold text-foreground">
            How we use cookies
          </h2>
          <p>
            Some cookies are needed for the site to work. The rest tell us which pages people read.
            You can refuse the second kind and nothing will break.
          </p>
          <h2 className="font-display pt-4 text-2xl font-bold text-foreground">Contact</h2>
          <p>
            For any data or privacy request, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Panel>
    </div>
  );
}
