import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL, OFFICES, SITE_URL } from "@/data/site";
import { breadcrumb, graph } from "@/data/schema";
import { PageHero, Panel } from "@/components/site/ui";
import { JsonLd } from "@/components/site/JsonLd";

const UPDATED = "7 September 2026";

export const Route = createFileRoute("/privacy-cookie-policy")({
  head: () => ({
    meta: [
      { title: "Privacy & Cookie Policy | Product Sampling Agency" },
      {
        name: "description",
        content:
          "What we collect through this site, who processes it, how long we keep it and how to ask us to delete it.",
      },
      { property: "og:title", content: "Privacy & Cookie Policy" },
      {
        property: "og:description",
        content: "What we collect through this site, who processes it, and how to have it deleted.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/a-clean-modern-marketing-comms.webp`,
      },
      { property: "og:url", content: `${SITE_URL}/privacy-cookie-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy-cookie-policy` }],
  }),
  component: PrivacyPolicy,
});

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display pt-8 text-heading font-semibold text-foreground">{children}</h2>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Where this page sits in the site, for the breadcrumb trail in search
 *  results. The business itself is described once, in the root schema. */
const SCHEMA = graph(
  breadcrumb([{ name: "Privacy & Cookie Policy", path: "/privacy-cookie-policy" }]),
);

function PrivacyPolicy() {
  const office = OFFICES[0];

  return (
    <div className="space-y-5 pb-5">
      <JsonLd schema={SCHEMA} />
      <PageHero
        title="Privacy & Cookie Policy"
        intro="What this site collects, who else can see it, and how to have it removed."
      />

      <Panel tone="base">
        <div className="max-w-[68ch] space-y-4 text-foreground/75">
          <p className="text-caption text-muted-foreground">Last updated {UPDATED}</p>

          <p>
            This policy covers {SITE_URL.replace("https://", "")} and the enquiry form on it. It is
            written to describe what this website actually does, rather than every practice a
            marketing agency might have.
          </p>

          <H>What we collect</H>
          <p>
            The only information you give us through this site is what you type into the enquiry
            form:
          </p>
          <Bullets
            items={[
              "Your name, email address and company",
              "Your phone number, if you choose to give it. That field is optional",
              "What kind of enquiry it is, and the message you write",
              "Whether you ticked the box to receive occasional field notes by email",
            ]}
          />
          <p>
            We record the time the enquiry arrived. The form also contains a hidden field that
            people never see; if it is filled in we treat the submission as automated and discard
            it. That is spam prevention, and nothing from a discarded submission is stored.
          </p>

          <H>What we do not collect</H>
          <p>
            This site runs no analytics. There is no Google Analytics, Tag Manager, Meta pixel or
            any other tracking script on it. We do not build a profile of you, we do not track you
            across other websites, and we do not sell or share your details with anyone for
            marketing.
          </p>

          <H>Cookies</H>
          <p>
            This site sets no cookies of its own. There is no analytics cookie, no advertising
            cookie and therefore no cookie banner to click through, because there is nothing to
            consent to. If that changes, this page changes with it.
          </p>

          <H>Who else handles your information</H>
          <p>
            We use a small number of services to run the site and to receive enquiries. Each of them
            handles some of your data:
          </p>
          <Bullets
            items={[
              <>
                <strong className="text-foreground">Cloudflare</strong> hosts this site and carries
                every request to it. Like any host, it processes your IP address and basic request
                information in order to serve the page and to block attacks.
              </>,
              <>
                <strong className="text-foreground">Google</strong> receives your enquiry. It is
                stored in a Google Sheet in our own account, and the confirmation email you get back
                is sent through Gmail.
              </>,
              <>
                <strong className="text-foreground">Google Fonts</strong> supplies the typeface this
                site is set in. Your browser requests it from Google when the page loads, which
                means Google sees your IP address even if you never contact us.
              </>,
            ]}
          />

          <H>Why we hold it, and for how long</H>
          <p>
            We hold what you send so we can reply to your enquiry and, if it becomes a project,
            deliver it. We keep enquiries for as long as there is a live conversation or an ongoing
            relationship, and we clear out ones that went nowhere. If you asked for field notes, we
            keep your email address until you tell us to stop.
          </p>

          <H>Your choices</H>
          <p>
            You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Say
            so by email and we will do it. You do not need to give a reason, and asking will not
            affect anything else we are doing for you. If you want off the field notes list, one
            line by email is enough.
          </p>

          <H>Children</H>
          <p>
            This site is for people doing business with us. It is not aimed at children, and we do
            not knowingly collect anything from them.
          </p>

          <H>Changes</H>
          <p>
            If we add anything that collects data, such as analytics, we will update this page and
            change the date at the top before turning it on.
          </p>

          <H>Contact</H>
          <p>
            For anything on this page, including a request to see or delete your data, email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-green-300 underline wrap-anywhere underline-offset-4 hover:text-green-200"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          {office ? (
            <address className="not-italic">
              <p className="font-semibold text-foreground">{office.entity}</p>
              <p className="mt-1">{office.lines.join(", ")}</p>
            </address>
          ) : null}
        </div>
      </Panel>
    </div>
  );
}
