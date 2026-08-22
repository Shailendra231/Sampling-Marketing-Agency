import { BarChart3, BookOpen, Cookie, Lightbulb, Users, UsersRound } from "lucide-react";

export const CDN = "https://naboo.lon1.cdn.digitaloceanspaces.com/wearepurity/uploads";

/** Canonical public origin. Used for canonical links, og:url, and the sitemap. */
export const SITE_URL = "https://productsamplingagency.in";

/** Public contact address. Used for every mailto link on the site. */
export const CONTACT_EMAIL = "productsamplingagency@gmail.com";

export const STAFFING_LOGIN = "https://productsamplingagency.com/apply";

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
      { label: "PSA People", to: "/what-we-do/staffing" },
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
    alt: "Product Sampling Agency - Brand Experience",
    copy: "Campaigns designed to ensure brands show up in the moments that matter, driving engagement, trial and action through live experiences.",
    cta: "Build your brand experience",
    to: "/what-we-do/brand-experience",
  },
  {
    title: "Product Sampling",
    image: "/images/a-busy-outdoor-indoor-mall.webp",
    alt: "Product Sampling Agency - Product Sampling",
    copy: "Face-to-face sampling that lands in the right place at the right time is a powerful tool for boosting sales, loyalty and creating brand champions.",
    cta: "Unlock your product power",
    to: "/what-we-do/product-sampling",
  },
  {
    title: "PSA People",
    image: "/images/a-bright-modern-office-interior.webp",
    alt: "Product Sampling Agency - PSA People",
    copy: "High-performing, expertly trained ambassadors, promotional staff and event teams bring brands to life with confidence, consistency and energy.",
    cta: "Fuel your brand through people",
    to: "/what-we-do/staffing",
  },
] as const;

export const LOGO_SETS = [
  `${CDN}/2023/08/Logo-set-1-1.png`,
  `${CDN}/2023/08/Logo-set-2-1-1-1.png`,
  `${CDN}/2023/08/logos-set3-update.png`,
  `${CDN}/2023/08/Logo-set-5-1.png`,
  `${CDN}/2023/08/Logo-set-6-1.png`,
  `${CDN}/2023/08/Logo-set-7-1.png`,
  `${CDN}/2023/08/Logo-set-8-1.png`,
  `${CDN}/2023/08/Logo-set-9-1.png`,
  `${CDN}/2023/08/Logo-set-10.png`,
];

/** Capability icons come from lucide-react so they inherit currentColor — the
 *  previous SVGs were dark-on-dark once the site moved to a dark ground. */
export const CAPABILITIES = [
  {
    Icon: BarChart3,
    title: "Shaping activation strategy",
    copy: "Leveraging cultural trends",
  },
  {
    Icon: Lightbulb,
    title: "Creative concepts",
    copy: "From ideation to execution",
  },
  {
    Icon: BookOpen,
    title: "Brand storytelling",
    copy: "Crafting authentic stories that connect",
  },
  {
    Icon: Users,
    title: "Experiential marketing",
    copy: "Creating engaging experiences",
  },
  {
    Icon: Cookie,
    title: "Sampling",
    copy: "Laying the foundations for loyalty",
  },
  {
    Icon: UsersRound,
    title: "Staffing",
    copy: "Putting people first",
  },
];

export type CaseStudy = { title: string; image: string };

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "N3on Token Launch – Thrust x Blockchain Futurist Conference",
    image: "/images/a-busy-indoor-mall-cinema.webp",
  },
  {
    title: "Dirtea Sampling Campaign",
    image: "/images/a-crowded-indoor-scene-inside.webp",
  },
  {
    title: "Big Dish Energy Live with Time Out and Uber Eats",
    image: "/images/a-lively-outdoor-indoor-mall.webp",
  },
  {
    title: "Heineken 0.0 at Grand Central Terminal",
    image: "/images/a-realistic-street-sidewalk-scene.webp",
  },
  {
    title: "Lee Kum Kee at Barcode 2025",
    image: "/images/a-realistic-street-urban-outdoor.webp",
  },
  {
    title: "Malibu ‘Clock off’",
    image: "/images/outdoor-daytime-scene-at-the.webp",
  },
  {
    title: "BOSS & Aston Martin Helmet",
    image: "/images/outdoor-event-road-race-scene.webp",
  },
  {
    title: "Hiscox Energy Express",
    image: "/images/outdoor-street-market-scene-with.webp",
  },
  {
    title: "Time Out & Madri",
    image: "/images/a-bright-outdoor-indoor-courtyard.webp",
  },
];

export type BlogPost = { date: string; title: string; image: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    date: "July 2026",
    title: "What to Look for in a Brand Activation Agency",
    image: "/images/a-wide-promotional-infographic-style.webp",
  },
  {
    date: "July 2026",
    title: "The Role of Experiential Marketing in the Marketing Mix",
    image: "/images/a-clean-modern-graphic-advertising.webp",
  },
  {
    date: "July 2026",
    title: "How a USA Brand Activation empowered community-driven culture",
    image: "/images/a-clean-modern-marketing-comms.webp",
  },
  {
    date: "May 2026",
    title: "PSA People’s Guide to Festival Staffing",
    image: "/images/a-clean-modern-social-media.webp",
  },
  {
    date: "April 2026",
    title: "Leaving a lasting impression – how live Brand Experiences connect",
    image: "/images/a-realistic-indoor-public-space.webp",
  },
  {
    date: "April 2026",
    title: "Why product sampling at summer sporting events is a recipe for success",
    image: "/images/wide-outdoor-street-scene-in.webp",
  },
  {
    date: "March 2026",
    title: "From Experience to Activation: Why Strategy and People Matter Most",
    image: "/images/a-clean-minimal-product-social.webp",
  },
  {
    date: "January 2026",
    title: "New year, new brand experience opportunities",
    image: "/images/a-bright-outdoor-covered-community.webp",
  },
];
