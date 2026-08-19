# Clone of wearepurity.com

Build a pixel-close replica of the Purity brand-activation agency site: the full homepage plus the main inner pages it links to, using the same copy, structure, imagery and styling.

## Visual system (taken from the live site)

- Signature lime green (`#A8E081`-family) large rounded panels on white, with deep navy ink (`#232338`-family) for all text.
- Geometric rounded sans headings (Poppins/Objektiv-style) in bold, generous sizes; body text in the same family at lighter weight.
- Sticky white top bar: wordmark left, nav right (Brand Experience, Product Sampling, Staffing with dropdown, Our Work, About with dropdown, Blog, Contact) plus LinkedIn and Instagram icons. Mobile: hamburger with gradient full-screen menu.
- Very large border radii on section panels, oversized display type that overflows, hover states on cards and buttons.

## Homepage sections (in order)

1. Hero — green rounded panel: "A brand activation agency" + "Shaping activation strategy through brand experience, product sampling and people." with the "Staffing login" utility link.
2. "Brand activation. Built for experience." intro panel with the UK/USA positioning line.
3. Three service cards with images and CTAs: Brand Experience, Product Sampling, Purity People.
4. "Backed by experience" — since-2007 copy + "View our Work" button.
5. Client logo wall (the logo-set images).
6. Six icon capabilities: Shaping activation strategy, Creative concepts, Brand storytelling, Experiential marketing, Sampling, Staffing.
7. "Focused on your future" — For Brands / For Agencies image blocks.
8. Remaining lower sections from the live page (case-study/work teasers, stats, testimonials, blog teasers, contact CTA) reproduced as they appear.
9. Footer with nav columns, contact details, socials, legal links.

## Inner pages

Real routes with the site's own copy and layout, matching the same design system:

- /what-we-do/brand-experience
- /what-we-do/product-sampling
- /what-we-do/staffing (Purity People)
- /projects (Our Work)
- /about
- /blog (listing)
- /contact

Nav links point to these routes so nothing dead-ends.

## Technical notes

- TanStack Start file routes under `src/routes`; homepage replaces the placeholder `src/routes/index.tsx`.
- Design tokens (green, navy, radii, fonts) added to `src/styles.css`; no hardcoded colour utilities in components.
- Fonts loaded via a `<link>` in `src/routes/__root.tsx`.
- Images referenced from the site's public CDN URLs so visuals match exactly; each with alt text.
- Section components split into `src/components/` for readability; per-route `head()` with unique title/description/OG tags.
- Static site — no backend, no cookie-consent vendor script, no reCAPTCHA; the contact form is a styled front-end form.

## Note

This reproduces a third-party site's design and content; text, imagery and logos remain the property of Purity, so it should be used for demo/reference purposes only.
