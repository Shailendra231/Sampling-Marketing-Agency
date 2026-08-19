import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Panel } from "@/components/site/ui";
import { SITE_URL } from "@/data/site";

export const Route = createFileRoute("/privacy-cookie-policy")({
  head: () => ({
    meta: [
      { title: "Privacy & Cookie Policy | Product Sampling Agency" },
      {
        name: "description",
        content:
          "How Product Sampling Agency collects, uses and protects personal data, and how we use cookies across productsamplingagency.com.",
      },
      { property: "og:title", content: "Privacy & Cookie Policy | Product Sampling Agency" },
      {
        property: "og:description",
        content: "How Product Sampling Agency handles personal data and cookies.",
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
      <Panel tone="white">
        <div className="max-w-3xl space-y-4 text-lg text-ink/75">
          <p>
            Product Sampling Agency Ltd respects your privacy. This policy explains what personal
            information we collect, why we collect it and how we look after it.
          </p>
          <h2 className="font-display pt-4 text-2xl font-bold text-ink">Information we collect</h2>
          <p>
            We collect the details you share with us through our enquiry and newsletter forms, such
            as your name, email address, phone number and company, along with anonymous analytics
            data about how the site is used.
          </p>
          <h2 className="font-display pt-4 text-2xl font-bold text-ink">How we use cookies</h2>
          <p>
            We use essential cookies to run the website and third-party cookies to understand how
            visitors use it and to deliver relevant content. You can opt out of non-essential
            cookies at any time.
          </p>
          <h2 className="font-display pt-4 text-2xl font-bold text-ink">Contact</h2>
          <p>
            For any data or privacy request, email{" "}
            <a href="mailto:uk@productsamplingagency.com" className="underline">
              uk@productsamplingagency.com
            </a>
            .
          </p>
        </div>
      </Panel>
    </div>
  );
}
