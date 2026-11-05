import type { Metadata } from "next";
import { locales, ogLocale, type Locale } from "./i18n";
import { SITE } from "./site";

type Args = {
  lang: Locale;
  path?: string; // path after the locale, e.g. "/services"
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMeta({ lang, path = "", title, description, type = "website", publishedTime }: Args): Metadata {
  const url = `/${lang}${path}`;
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  languages["x-default"] = `/en${path}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name[lang],
      locale: ogLocale(lang),
      alternateLocale: ogLocale(lang === "en" ? "ur" : "en"),
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function breadcrumbLd(lang: Locale, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}/${lang}${it.path}`,
    })),
  };
}
