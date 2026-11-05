import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { AstrologerGrid, PageHead } from "@/components/Sections";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/astrologers">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return pageMeta({ lang, path: "/astrologers", title: d.pages.astroTitle, description: d.pages.astroDesc });
}

export default async function AstrologersPage({ params }: PageProps<"/[lang]/astrologers">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  return (
    <>
      <PageHead
        title={d.pages.astroTitle}
        sub={d.pages.astroDesc}
        crumbs={[{ href: `/${lang}`, label: d.nav.home }, { label: d.nav.astrologers }]}
      />
      <section className="section">
        <div className="container"><AstrologerGrid lang={lang} d={d} /></div>
      </section>
      <JsonLd data={breadcrumbLd(lang, [{ name: d.nav.home, path: "" }, { name: d.nav.astrologers, path: "/astrologers" }])} />
    </>
  );
}
