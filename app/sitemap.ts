import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { posts, services } from "@/lib/content";
import { absUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly"; lastModified?: string }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
    { path: "/astrologers", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, changeFrequency: "monthly" as const, lastModified: p.date })),
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return pages.flatMap((p) =>
    locales.map((lang) => ({
      url: absUrl(`/${lang}${p.path}`),
      lastModified: p.lastModified ? new Date(p.lastModified) : new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, absUrl(`/${l}${p.path}`)])),
          "x-default": absUrl(`/en${p.path}`),
        },
      },
    })),
  );
}
