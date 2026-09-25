import { BarChart3, BookOpen, Cookie, Lightbulb, Users, UsersRound } from "lucide-react";

/** Canonical public origin. Defined in lib/canonical-url so the Worker entry
 *  can read it without importing this module (and its icons); re-exported here
 *  because every route imports SITE_URL from "@/data/site". */
export { SITE_URL } from "@/lib/canonical-url";

/** Public contact address. Used for every mailto link on the site. */
export const CONTACT_EMAIL = "productsamplingagency@gmail.com";

/** Where we actually are. Both the footer and the contact page render this, and
 *  a business address that disagrees with itself between pages is a real
 *  local-search problem, so it lives in one place. */
export const GURUGRAM = {
  street: ["DLF Star Tower", "119, Block A", "Sector 30"],
  locality: "Gurugram",
  region: "Haryana",
  postalCode: "122001",
  country: "India",
  /** ISO 3166-1 alpha-2, which is what schema.org addressCountry expects. */
  countryCode: "IN",
} as const;

export const OFFICES = [
  {
    region: "India",
    email: CONTACT_EMAIL,
    entity: "Product Sampling Agency",
    /** The structured address. PostalAddress schema is built from this, and so
     *  are the display lines below, so the two can never disagree. */
    postal: GURUGRAM,
    /** The same address as a visitor reads it, one line per row. */
    lines: [
      ...GURUGRAM.street,
      GURUGRAM.locality,
      `${GURUGRAM.region} ${GURUGRAM.postalCode}`,
      GURUGRAM.country,
    ],
  },
];

/** Profiles we control, in the order they appear in the header. schema.org
 *  sameAs is built from this too: those links are how search engines tie this
 *  site to the same business elsewhere, so a stale URL here is a broken claim
 *  about identity rather than just a dead link. */
export const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/product-sampling-agency-in/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/productsamplingagency/",
  },
] as const;

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
    image: "/images/a-bright-outdoor-indoor-courtyard.webp",
    alt: "A promoter handing out samples from a branded counter",
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

export type CaseStudy = {
  slug: string;
  title: string;
  image: string;
  /** Card summary, and the meta description on the case study page. */
  excerpt: string;
  sector: string;
  where: string;
  format: string;
  /** What the brand was up against before the campaign ran. */
  challenge: string;
  /** How the route was planned. */
  approach: string[];
  /** What we ran on the ground. */
  delivered: string[];
  /** What came back in the report. Counts and rates go in the client's own
   *  numbers; this is the list of what was actually captured. */
  measured: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "beverage-launch-metro-stations",
    title: "Beverage launch across metro stations",
    image: "/images/a-busy-indoor-mall-cinema.webp",
    excerpt:
      "A chilled-drink launch run on the commuter window, where the queue does the targeting for you.",
    sector: "Beverage",
    where: "Metro stations, Delhi NCR",
    format: "Commuter sampling",
    challenge:
      "A new drink with no shelf recognition and a launch window measured in weeks. Advertising was already running, but nobody had tasted the product. The brief was trial at volume, in a city where the same person passes the same point twice a day.",
    approach: [
      "Picked stations on the evening commute rather than the morning one. People heading home will drink something cold; people heading to work are carrying coffee.",
      "Concourse positions after the gate line, so anyone who stopped had already cleared the crowd and was not blocking a barrier.",
      "Kept stock cold on site rather than trusting an insulated box to hold through a shift.",
      "Ran the same stations on repeat days, so the second exposure landed on people who had already seen the first.",
    ],
    delivered: [
      "Station permissions and the operator paperwork",
      "Cold chain from depot to concourse",
      "Promoters briefed on the product, not just the script",
      "Shift-by-shift stock reconciliation",
    ],
    measured: [
      "Samples handed over, counted against stock issued",
      "Refusals, so we could tell a bad position from a bad hour",
      "Best and worst stations by hour",
      "Verbatim reactions to the flavour",
    ],
  },
  {
    slug: "snack-sampling-intercity-trains",
    title: "Snack sampling on intercity trains",
    image: "/images/a-crowded-indoor-scene-inside.webp",
    excerpt:
      "A captive audience, a long journey and a snack that needed a first bite rather than an explanation.",
    sector: "Snacks",
    where: "Intercity routes",
    format: "On-board sampling",
    challenge:
      "The product tasted better than it looked on a shelf. Getting it into a mouth was the whole job, and the brand had been buying reach that never translated into a first bite.",
    approach: [
      "Sampled mid-journey rather than at boarding. People settle after the first half hour and are far more willing to take something.",
      "Worked the carriage in one direction so nobody was approached twice.",
      "Paired the sample with a where-to-buy line, because a train passenger cannot act on it for hours.",
      "Chose routes with a long unbroken run, so the team could finish a carriage without a station interruption.",
    ],
    delivered: [
      "Route selection and on-board permissions",
      "Staff rostered by leg, not by day",
      "Portion sizes that travel without a spill",
      "Waste collection so carriages were left clean",
    ],
    measured: [
      "Samples per carriage and per leg",
      "Take rate by time of day",
      "Which routes carried the target profile",
      "Requests for where to buy",
    ],
  },
  {
    slug: "skincare-trial-premium-malls",
    title: "Skincare trial in premium malls",
    image: "/images/a-lively-outdoor-indoor-mall.webp",
    excerpt:
      "A consultation-led counter, because skincare sells on texture and finish rather than a leaflet.",
    sector: "Beauty and skincare",
    where: "Premium malls",
    format: "Consultation sampling",
    challenge:
      "Handing a sachet to everyone who walks past wastes product on people who will never buy this range. The brand needed the right variant in the right hands, and a reason for the shopper to stop long enough to feel the product.",
    approach: [
      "Two questions before a sample, so the promoter could match the variant to the skin type.",
      "Applied on the back of the hand at the counter. Texture is the argument, and it does not survive being read about.",
      "Positioned near beauty retail rather than at the entrance, so the trial sat close to the purchase.",
      "Fewer samples than a footfall-led plan would have used, aimed at people who fit the range.",
    ],
    delivered: [
      "Mall permissions and counter build",
      "Promoters trained on the range and on skin types",
      "Variant-level stock control",
      "Daily counter reset and hygiene routine",
    ],
    measured: [
      "Consultations completed, not just samples given",
      "Split of variants recommended",
      "Questions asked most often at the counter",
      "Footfall converted to a consultation, by hour",
    ],
  },
  {
    slug: "personal-care-high-street",
    title: "Personal care on a high street footpath",
    image: "/images/a-realistic-street-sidewalk-scene.webp",
    excerpt:
      "Street sampling where the pavement, the permission and the hour matter more than the crowd size.",
    sector: "Personal care",
    where: "High street, urban",
    format: "Footpath sampling",
    challenge:
      "A busy pavement is not automatically a good pavement. The brand had run street activity before and got volume without relevance, on a stretch where most of the crowd was passing through rather than shopping.",
    approach: [
      "Surveyed the stretch on foot at three different hours before committing to a position.",
      "Set up where people slow down, near crossings and shopfronts, not mid-flow.",
      "Ran shorter shifts across more days rather than long days in one spot.",
      "Dropped the two weakest positions after the first week instead of finishing the plan for its own sake.",
    ],
    delivered: [
      "Municipal permissions for the stretch",
      "Site survey and position selection",
      "Field team with a supervisor on the ground",
      "Daily counts reconciled the same evening",
    ],
    measured: [
      "Samples per position per hour",
      "Which hours carried the target shopper",
      "Positions that underperformed, and why",
      "Stock lost to weather or spoilage",
    ],
  },
  {
    slug: "rtd-sampling-market-district",
    title: "Ready to drink sampling in a market district",
    image: "/images/a-realistic-street-urban-outdoor.webp",
    excerpt:
      "Trial placed next to the shops that stock the product, so the next step was a few steps away.",
    sector: "Ready to drink",
    where: "Market district",
    format: "Retail-adjacent sampling",
    challenge:
      "The drink was already on shelves in the area and not moving. Awareness was not the problem. Nobody had a reason to pick it over the brand they always buy.",
    approach: [
      "Sampled within sight of stores that already stocked it, so trial and purchase sat in the same trip.",
      "Told the retailers the dates in advance, so stock was faced up and not buried.",
      "Chilled service, because the product is bought cold and judged cold.",
      "Weekend and evening hours, when the district fills with shoppers rather than traders.",
    ],
    delivered: [
      "Market association and shop-front permissions",
      "Retailer briefing before the activity",
      "Chilled stock handling through the shift",
      "Team positioned across the district rather than in one cluster",
    ],
    measured: [
      "Samples by position and by hour",
      "Retailer feedback on movement during the activity window",
      "Which shop fronts drew the most stops",
      "Reasons given for the usual brand choice",
    ],
  },
  {
    slug: "wellness-residential-societies",
    title: "Wellness brand at residential society gates",
    image: "/images/outdoor-daytime-scene-at-the.webp",
    excerpt:
      "Doorstep trial in gated societies, where one sample reaches a household rather than a passer-by.",
    sector: "Wellness",
    where: "Gated residential societies",
    format: "Society and doorstep sampling",
    challenge:
      "A household product with a considered purchase. A sample handed to someone in a mall goes to one person; the brand needed it to reach the person who actually buys for the home.",
    approach: [
      "Worked with society management rather than around it, which is the difference between a stall and a shut gate.",
      "Sampled at gate and doorstep in the late morning and early evening, when someone is home.",
      "Sized societies by household count, not by how impressive the address looked.",
      "One sample per household, tracked against a tower and flat list.",
    ],
    delivered: [
      "Society approvals and RWA coordination",
      "Route plan across towers and blocks",
      "Field team with society-issued passes",
      "Household-level distribution records",
    ],
    measured: [
      "Households reached against households targeted",
      "Coverage by tower, so gaps were visible",
      "Refusals and not-at-home rates by time slot",
      "Questions raised at the door",
    ],
  },
  {
    slug: "energy-drink-city-road-race",
    title: "Energy drink at a city road race",
    image: "/images/outdoor-event-road-race-scene.webp",
    excerpt:
      "Sampling at the finish line, where the product does not need explaining because the need is already there.",
    sector: "Energy drink",
    where: "City road race",
    format: "Event sampling",
    challenge:
      "An event crowd is generous with attention and short on time. The brand had one morning, a fixed field of runners and no second chance if the position was wrong.",
    approach: [
      "Took the finish line rather than the start. A runner at the start does not want a drink; a runner who has just stopped does.",
      "Second position in the recovery area, for the people who walk past the first table without registering it.",
      "Cold service throughout, which for this product is the whole proposition.",
      "Staffed for the peak, not the average, because a race field arrives in a wave.",
    ],
    delivered: [
      "Event permissions and organiser coordination",
      "Cold chain through a morning outdoors",
      "Staffing tuned to the finishing curve",
      "Bin plan and post-event clear-up",
    ],
    measured: [
      "Samples handed over across the finishing window",
      "Take rate at each of the two positions",
      "Peak and trough by ten-minute band",
      "Stock remaining against the field size",
    ],
  },
  {
    slug: "food-brand-feedback-weekend-market",
    title: "Food brand with feedback capture at a weekend market",
    image: "/images/outdoor-street-market-scene-with.webp",
    excerpt: "A tasting table built to collect answers as well as hand out product.",
    sector: "Food",
    where: "Weekend market",
    format: "Sampling with feedback capture",
    challenge:
      "The brand had two flavours and an internal argument about which to push. It needed something better than opinion, from people who had just tasted both.",
    approach: [
      "Tasted both flavours side by side rather than one at a time, because preference needs a comparison.",
      "Four questions on a card, asked while the taste was still in the mouth.",
      "Wrote answers down at the table instead of trusting recall at the end of the shift.",
      "Ran across a full weekend, so the sample covered both days of a different crowd.",
    ],
    delivered: [
      "Market pitch and permissions",
      "Tasting table, hygiene setup and serving routine",
      "Feedback cards and a promoter trained to ask, not lead",
      "Daily data entry and a clean file at the end",
    ],
    measured: [
      "Preference split between the two flavours",
      "Would buy, would recommend",
      "What people compared it against",
      "Reasons given for the flavour they rejected",
    ],
  },
  {
    slug: "campus-activation-fest-week",
    title: "Campus activation during fest week",
    image: "/images/a-bright-outdoor-indoor-courtyard.webp",
    excerpt:
      "A youth brand placed inside fest week, where students bring their own crowd and their own phones.",
    sector: "Youth brand",
    where: "College campuses, fest week",
    format: "Campus activation",
    challenge:
      "Fest week is crowded with brands doing the same thing. Handing out product in that noise gets a sample taken and the brand forgotten by the next stall.",
    approach: [
      "Built a reason to stop rather than a table to walk past, so the product came with something to do.",
      "Ran during the gaps between events, when students are looking for something to fill twenty minutes.",
      "Gave people something worth photographing, because a campus crowd distributes itself.",
      "Briefed promoters close to the students' own age, which changes how the first sentence lands.",
    ],
    delivered: [
      "Campus and fest committee permissions",
      "Activation build and on-site setup",
      "Field team briefed on the product and the format",
      "Stock control across multiple days",
    ],
    measured: [
      "Participations, not just samples taken",
      "Time spent at the activation",
      "Which campuses and which days performed",
      "Content generated by students themselves",
    ],
  },
];

export type BlogPost = {
  date: string;
  title: string;
  image: string;
  to: string;
  excerpt: string;
  readMinutes: number;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    date: "September 2026",
    title: "What to Look for in a Product Sampling Agency",
    image: "/images/a-realistic-street-sidewalk-scene.webp",
    to: "/blog/what-to-look-for-in-a-product-sampling-agency",
    excerpt:
      "A practical checklist for brand and category managers: the twelve questions worth asking before you hand a campaign to a sampling agency.",
    readMinutes: 9,
  },
  {
    date: "September 2026",
    title: "What Is Product Sampling?",
    image: "/images/a-realistic-indoor-public-space.webp",
    to: "/blog/what-is-product-sampling",
    excerpt:
      "What sampling is, why it works, where it fits, what it costs and how to plan a campaign that earns a real first try.",
    readMinutes: 6,
  },
  {
    date: "September 2026",
    title: "20 Product Sampling Ideas to Get Your Product Into Consumers' Hands",
    image: "/images/a-lively-outdoor-indoor-mall.webp",
    to: "/blog/20-product-sampling-ideas",
    excerpt:
      "Malls, gyms, campuses, offices, societies, retail, events and more. Twenty ways to put a product in the right hands, and how to choose between them.",
    readMinutes: 8,
  },
];
