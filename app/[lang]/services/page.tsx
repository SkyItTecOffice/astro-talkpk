import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { PageHead, ServiceGrid } from "@/components/Sections";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { services } from "@/lib/content";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { absUrl } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return pageMeta({ lang, path: "/services", title: d.pages.servicesTitle, description: d.pages.servicesDesc });
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/${lang}/services/${s.slug}`),
      name: s.title[lang],
    })),
  };

  return (
    <>
      <PageHead
        title={d.pages.servicesTitle}
        sub={d.pages.servicesDesc}
        crumbs={[{ href: `/${lang}`, label: d.nav.home }, { label: d.nav.services }]}
      />
      <section className="section">
        <div className="container"><ServiceGrid lang={lang} d={d} /></div>
      </section>
      <JsonLd data={[listLd, breadcrumbLd(lang, [{ name: d.nav.home, path: "" }, { name: d.nav.services, path: "/services" }])]} />
    </>
  );
}
