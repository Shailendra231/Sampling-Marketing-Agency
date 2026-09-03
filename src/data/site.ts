import { BarChart3, BookOpen, Cookie, Lightbulb, Users, UsersRound } from "lucide-react";

/** Canonical public origin. Used for canonical links, og:url, and the sitemap. */
export const SITE_URL = "https://productsamplingagency.in";

/** Public contact address. Used for every mailto link on the site. */
export const CONTACT_EMAIL = "productsamplingagency@gmail.com";

/** Where we actually are. Both the footer and the contact page render this, and
 *  a business address that disagrees with itself between pages is a real
 *  local-search problem, so it lives in one place. */
export const OFFICES = [
  {
    region: "India",
    email: CONTACT_EMAIL,
    entity: "Product Sampling Agency",
    lines: ["Star Tower", "Sector 30", "Gurugram", "Haryana 122001", "India"],
  },
];

/** Message cap on the enquiry form. Shared so the counter the visitor sees and
 *  the server-side check that guards the sheet can never drift apart. */
export const MESSAGE_MAX = 200;

export type NavItem = {
  label: string;
  to?: string;
  href?: string;
  children?: { label: string; to: string }[];
};

export const NAV: NavItem[] = [
  { label: "Brand Experience", to: "/what-we-do/brand-experience" },
  { label: "Product Sampling", to: "/what-we-do/product-sampling" },
  {
    label: "Services",
    to: "/what-we-do/staffing",
    children: [
      { label: "Field Teams", to: "/what-we-do/staffing" },
      { label: "Promotional Staffing", to: "/what-we-do/staffing" },
      { label: "Event Staffing", to: "/what-we-do/staffing" },
      { label: "Product Sampling Staffing", to: "/what-we-do/staffing" },
    ],
  },
  { label: "Our Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    title: "Brand Experience",
    image: "/images/a-vibrant-candid-outdoor-indoor.webp",
    alt: "A brand activation running inside a shopping mall",
    copy: "Tell us what the day has to achieve and we will build the thing that does it. Design, permissions, staff, the lot.",
    cta: "See how we build experiences",
    to: "/what-we-do/brand-experience",
  },
  {
    title: "Product Sampling",
    image: "/images/a-busy-outdoor-indoor-mall.webp",
    alt: "A sampling counter with staff handing products to shoppers",
    copy: "Your product in the right hands, in places people already go. Malls, campuses, metro stations, housing societies, markets and events.",
    cta: "See how sampling works",
    to: "/what-we-do/product-sampling",
  },
  {
    title: "Field Teams",
    image: "/images/a-bright-modern-office-interior.webp",
    alt: "A field team preparing product kits before a shift",
    copy: "Promoters and event staff who know your product before they meet your customer. Nobody goes out on a shift unbriefed.",
    cta: "Meet the field teams",
    to: "/what-we-do/staffing",
  },
] as const;

/** Client logos, served from /public. Each renders on its own tile because the
 *  artwork is mostly dark on transparency and would vanish on our ground. */
export const CLIENT_LOGOS: {
  src: string;
  name: string;
  wide?: boolean;
  /** Lifts the height cap for marks that are squarer than the wordmarks around
   *  them and would otherwise sit at half the panel height. */
  tall?: boolean;
  /** Tile ground, drawn from the logo's own dominant hue. Kept near-white for
   *  dark artwork so the tint costs almost no contrast; light-inked logos get a
   *  dark tile instead, which is the only way they read at all. */
  tile: string;
}[] = [
  // `wide` is for long, short wordmarks: the tile constrains those by width, so
  // they land shorter than the rest and need the padding trimmed to compensate.
  { src: "/eema.png", name: "Event & Entertainment Management Association", tile: "#FAE8E1" },
  { src: "/CoTravpng.png", name: "CoTrav", tile: "#E6E1FA" },
  { src: "/newgen.svg", name: "Newgen", tile: "#FAECE1" },
  { src: "/Ondios.png", name: "OneDios", tile: "#E1FAF2" },
  { src: "/Safeobuddy.png", name: "Safe'O'Buddy", tile: "#E1ECFA" },
  // White artwork, so it is 1.00:1 on any light tile — literally invisible.
  // A dark neutral ground puts it at 14.6:1.
  { src: "/the-wedding-square.webp", name: "The Wedding Square", tile: "#2A2733", tall: true },
  { src: "/Trident.svg", name: "Trident Hotels", tile: "#FAE1E3" },
  // Gold artwork: ink luminance 0.65 against white is 1.49:1, effectively
  // invisible. A deep ground of the same hue takes it to 9.9:1.
  { src: "/the-event-square.png", name: "The Event Square", tile: "#2B2818" },
  { src: "/Barsys.png", name: "Barsys", tile: "#F4F4F6", tall: true },
];

/** Capability icons come from lucide-react so they inherit currentColor — the
 *  previous SVGs were dark-on-dark once the site moved to a dark ground. */
export const CAPABILITIES = [
  { Icon: BarChart3, title: "Activation planning", copy: "Which sites, which hours" },
  { Icon: Lightbulb, title: "Creative concepts", copy: "Ideas built for a footpath, not a deck" },
  { Icon: BookOpen, title: "Brand storytelling", copy: "Say it before they walk past" },
  { Icon: Users, title: "Experiential marketing", copy: "Something worth stopping for" },
  { Icon: Cookie, title: "Sampling", copy: "First try, then the second purchase" },
  { Icon: UsersRound, title: "Field staffing", copy: "Staff who know the product" },
];

export type CaseStudy = { title: string; image: string };

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Beverage launch across metro stations",
    image: "/images/a-busy-indoor-mall-cinema.webp",
  },
  {
    title: "Snack sampling on intercity trains",
    image: "/images/a-crowded-indoor-scene-inside.webp",
  },
  { title: "Skincare trial in premium malls", image: "/images/a-lively-outdoor-indoor-mall.webp" },
  {
    title: "Personal care on a high street footpath",
    image: "/images/a-realistic-street-sidewalk-scene.webp",
  },
  {
    title: "Ready to drink sampling in a market district",
    image: "/images/a-realistic-street-urban-outdoor.webp",
  },
  {
    title: "Wellness brand at residential society gates",
    image: "/images/outdoor-daytime-scene-at-the.webp",
  },
  {
    title: "Energy drink at a city road race",
    image: "/images/outdoor-event-road-race-scene.webp",
  },
  {
    title: "Food brand with feedback capture at a weekend market",
    image: "/images/outdoor-street-market-scene-with.webp",
  },
  {
    title: "Campus activation during fest week",
    image: "/images/a-bright-outdoor-indoor-courtyard.webp",
  },
];

export type BlogPost = { date: string; title: string; image: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    date: "July 2026",
    title: "What actually happens on a sampling day",
    image: "/images/a-wide-promotional-infographic-style.webp",
  },
  {
    date: "July 2026",
    title: "Picking sites: footfall is not the whole story",
    image: "/images/a-clean-modern-graphic-advertising.webp",
  },
  {
    date: "July 2026",
    title: "How many samples is enough?",
    image: "/images/a-clean-modern-marketing-comms.webp",
  },
  {
    date: "May 2026",
    title: "Briefing a field team so the message survives",
    image: "/images/a-clean-modern-social-media.webp",
  },
  {
    date: "April 2026",
    title: "Sampling inside Indian malls, and what it costs you",
    image: "/images/a-realistic-indoor-public-space.webp",
  },
  {
    date: "April 2026",
    title: "Why some trials convert and others go nowhere",
    image: "/images/wide-outdoor-street-scene-in.webp",
  },
  {
    date: "March 2026",
    title: "Measuring a sampling campaign without guessing",
    image: "/images/a-clean-minimal-product-social.webp",
  },
  {
    date: "January 2026",
    title: "Planning around festival season",
    image: "/images/a-bright-outdoor-covered-community.webp",
  },
];
