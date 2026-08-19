export const CDN = "https://naboo.lon1.cdn.digitaloceanspaces.com/wearepurity/uploads";

/** Canonical public origin. Used for canonical links, og:url, and the sitemap. */
export const SITE_URL = "https://productsamplingagency.in";

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
    label: "Staffing",
    to: "/what-we-do/staffing",
    children: [
      { label: "PSA People", to: "/what-we-do/staffing" },
      { label: "Promotional Staffing", to: "/what-we-do/staffing" },
      { label: "Event Staffing", to: "/what-we-do/staffing" },
      { label: "Product Sampling Staffing", to: "/what-we-do/staffing" },
    ],
  },
  { label: "Our Work", to: "/projects" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "We are PSA", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    title: "Brand Experience",
    image: `${CDN}/2025/11/winners-1500x1000.jpg`,
    alt: "Product Sampling Agency - Brand Experience",
    copy: "Campaigns designed to ensure brands show up in the moments that matter, driving engagement, trial and action through live experiences.",
    cta: "Build your brand experience",
    to: "/what-we-do/brand-experience",
  },
  {
    title: "Product Sampling",
    image: `${CDN}/2023/08/heineken_staff-2.jpg`,
    alt: "Product Sampling Agency - Product Sampling",
    copy: "Face-to-face sampling that lands in the right place at the right time is a powerful tool for boosting sales, loyalty and creating brand champions.",
    cta: "Unlock your product power",
    to: "/what-we-do/product-sampling",
  },
  {
    title: "PSA People",
    image: `${CDN}/2025/09/FB_IMG_1474524669123.jpg`,
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

export const CAPABILITIES = [
  {
    icon: `${CDN}/2026/03/chart-bar-regular-full.svg`,
    title: "Shaping activation strategy",
    copy: "Leveraging cultural trends",
  },
  {
    icon: `${CDN}/2026/03/lightbulb-message-regular-full.svg`,
    title: "Creative concepts",
    copy: "From ideation to execution",
  },
  {
    icon: `${CDN}/2026/03/book-arrow-right-regular-full.svg`,
    title: "Brand storytelling",
    copy: "Crafting authentic stories that connect",
  },
  {
    icon: `${CDN}/2026/03/people-arrows-regular-full.svg`,
    title: "Experiential marketing",
    copy: "Creating engaging experiences",
  },
  {
    icon: `${CDN}/2026/03/cookie-bite-regular-full-1.svg`,
    title: "Sampling",
    copy: "Laying the foundations for loyalty",
  },
  {
    icon: `${CDN}/2025/09/people-group-regular-full-1.svg`,
    title: "Staffing",
    copy: "Putting people first",
  },
];

export type CaseStudy = { title: string; image: string };

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "N3on Token Launch – Thrust x Blockchain Futurist Conference",
    image: `${CDN}/2025/11/Thrust_Hardrock_-10-of-82-1500x1000.jpg`,
  },
  {
    title: "Dirtea Sampling Campaign",
    image: `${CDN}/2025/10/dirtea-header-1365x1024.jpeg`,
  },
  {
    title: "Big Dish Energy Live with Time Out and Uber Eats",
    image: `${CDN}/2025/09/Big-Dish-Live-51-1500x1000.jpg`,
  },
  {
    title: "Heineken 0.0 at Grand Central Terminal",
    image: `${CDN}/2025/09/heineken_staff-1.jpg`,
  },
  {
    title: "Lee Kum Kee at Barcode 2025",
    image: `${CDN}/2025/08/IKK-Barcode-25-26-1500x1000.jpg`,
  },
  {
    title: "Malibu ‘Clock off’",
    image: `${CDN}/2025/08/EV-MalibuClockOffBirmingham_02july25-0558-KK-1280x1024.jpg`,
  },
  {
    title: "BOSS & Aston Martin Helmet",
    image: `${CDN}/2024/10/IMG_3656-1500x1000.jpg`,
  },
  {
    title: "Hiscox Energy Express",
    image: `${CDN}/2025/02/DSC_7436-Enhanced-NR-1500x1000.jpg`,
  },
  {
    title: "Time Out & Madri",
    image: `${CDN}/2024/10/WhatsApp-Image-2024-08-04-at-19.29.12-1365x1024.jpeg`,
  },
];

export type BlogPost = { date: string; title: string; image: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    date: "July 2026",
    title: "What to Look for in a Brand Activation Agency",
    image: `${CDN}/2026/03/DSC09482-667x500.jpg`,
  },
  {
    date: "July 2026",
    title: "The Role of Experiential Marketing in the Marketing Mix",
    image: `${CDN}/2026/02/N02_8986-750x500.jpg`,
  },
  {
    date: "July 2026",
    title: "How a USA Brand Activation empowered community-driven culture",
    image: `${CDN}/2025/11/Thrust_Hardrock_-45-of-82-750x500.jpg`,
  },
  {
    date: "May 2026",
    title: "PSA People’s Guide to Festival Staffing",
    image: `${CDN}/2025/09/FB_IMG_1474524669123.jpg`,
  },
  {
    date: "April 2026",
    title: "Leaving a lasting impression – how live Brand Experiences connect",
    image: `${CDN}/2025/09/heineken_photo.jpg`,
  },
  {
    date: "April 2026",
    title: "Why product sampling at summer sporting events is a recipe for success",
    image: `${CDN}/2023/08/heineken_staff-2.jpg`,
  },
  {
    date: "March 2026",
    title: "From Experience to Activation: Why Strategy and People Matter Most",
    image: `${CDN}/2025/11/winners-1500x1000.jpg`,
  },
  {
    date: "January 2026",
    title: "New year, new brand experience opportunities",
    image: `${CDN}/2023/07/kfc-delivery-pit-stop-4.jpg`,
  },
];
