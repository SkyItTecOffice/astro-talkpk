import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import { PageHead, ServiceGrid } from "@/components/Sections";
import { isLocale, locales } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getService, services } from "@/lib/content";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SITE, absUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => services.map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const s = getService(slug);
  if (!isLocale(lang) || !s) return {};
  return pageMeta({ lang, path: `/services/${slug}`, title: s.title[lang], description: s.short[lang] });
}

export default async function ServicePage({ params }: PageProps<"/[lang]/services/[slug]">) {
  const { lang, slug } = await params;
  const s = getService(slug);
  if (!isLocale(lang) || !s) notFound();
  const d = getDict(lang);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title[lang],
    description: s.long[lang],
    url: absUrl(`/${lang}/services/${slug}`),
    serviceType: s.title.en,
    inLanguage: lang,
    provider: { "@id": absUrl("/#org") },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };

  return (
    <>
      <PageHead
        title={s.title[lang]}
        sub={s.short[lang]}
        crumbs={[
          { href: `/${lang}`, label: d.nav.home },
          { href: `/${lang}/services`, label: d.nav.services },
          { label: s.title[lang] },
        ]}
      />
      <section className="section">
        <div className="container layout-aside">
          <div className="prose">
            <p>{s.long[lang]}</p>
            <h2>{d.sections.includes}</h2>
            <ul className="checklist">
              {s.includes.map((i) => <li key={i.en}>{i[lang]}</li>)}
            </ul>
            <p className="muted">{d.footer.disclaimer}</p>
          </div>
          <aside>
            <BookingForm
              labels={d.form}
              whatsapp={SITE.whatsapp}
              services={services.map((x) => ({ slug: x.slug, title: x.title[lang] }))}
              initialService={s.title[lang]}
            />
          </aside>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="section-head"><h2>{d.sections.related}</h2></div>
          <ServiceGrid lang={lang} d={d} exclude={slug} />
          <p><Link href={`/${lang}/services`}>{d.sections.viewAll} →</Link></p>
        </div>
      </section>
      <JsonLd
        data={[
          serviceLd,
          breadcrumbLd(lang, [
            { name: d.nav.home, path: "" },
            { name: d.nav.services, path: "/services" },
            { name: s.title[lang], path: `/services/${slug}` },
          ]),
        ]}
      />
    </>
  );
}
