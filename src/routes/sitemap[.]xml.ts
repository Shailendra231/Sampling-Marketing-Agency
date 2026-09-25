import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CASE_STUDIES, SITE_URL } from "@/data/site";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/what-we-do/brand-experience", changefreq: "monthly", priority: "0.9" },
          { path: "/what-we-do/product-sampling", changefreq: "monthly", priority: "0.9" },
          { path: "/what-we-do/staffing", changefreq: "monthly", priority: "0.9" },
          { path: "/projects", changefreq: "monthly", priority: "0.8" },
          ...CASE_STUDIES.map((study) => ({
            path: `/projects/${study.slug}`,
            changefreq: "yearly" as const,
            priority: "0.7",
          })),
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          {
            path: "/blog/what-to-look-for-in-a-product-sampling-agency",
            changefreq: "monthly",
            priority: "0.8",
          },
          { path: "/blog/what-is-product-sampling", changefreq: "monthly", priority: "0.8" },
          { path: "/blog/20-product-sampling-ideas", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          { path: "/privacy-cookie-policy", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
