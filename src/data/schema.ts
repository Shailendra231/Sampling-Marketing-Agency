import { CONTACT_EMAIL, GURUGRAM, SITE_URL, SOCIALS } from "./site";

/** Stable @id for the business node. Every other node on the site points at
 *  this rather than restating the organisation, so search engines read one
 *  business described once, not a dozen unrelated ones that happen to share a
 *  name. Changing this string orphans those references. */
export const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** ProfessionalService rather than plain Organization: it is a subtype of
 *  LocalBusiness, so it carries the address and service area that a services
 *  business is actually searched by.
 *
 *  Deliberately absent: `telephone`, because no public number exists to cite,
 *  and `aggregateRating`, because we have no review corpus. Both are tempting
 *  and both would be fabricated. */
const organization = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "Product Sampling Agency",
  url: `${SITE_URL}/`,
  email: CONTACT_EMAIL,
  description:
    "Product sampling, live brand activations and trained field teams, planned and run across Indian cities.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/images/a-vibrant-candid-outdoor-indoor.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: GURUGRAM.street.join(", "),
    addressLocality: GURUGRAM.locality,
    addressRegion: GURUGRAM.region,
    postalCode: GURUGRAM.postalCode,
    addressCountry: GURUGRAM.countryCode,
  },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: SOCIALS.map((s) => s.href),
};

/** No SearchAction here: that markup claims a site search exists at a given
 *  URL template, and this site has none. Declaring one it cannot honour is a
 *  false claim, not a free rich result. */
const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Product Sampling Agency",
  publisher: { "@id": ORG_ID },
};

/** The two nodes every page carries. Rendered once, from the root route. */
export const SITE_SCHEMA = graph(organization, website);

type Crumb = { name: string; path: string };

/** A breadcrumb trail, Home first. Google ignores a single-item list, so the
 *  homepage does not get one — only pages that sit under something. */
export function breadcrumb(trail: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

/** One of the three things we sell, tied back to the business that provides
 *  it. `serviceType` is the phrase a buyer would actually search. */
export function service({
  name,
  description,
  serviceType,
  path,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
  };
}

/** Wraps nodes into one @graph document. A single graph per page beats several
 *  loose scripts: the @id references above only resolve if the nodes travel
 *  together. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
