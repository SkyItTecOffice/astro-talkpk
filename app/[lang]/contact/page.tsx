import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import { PageHead } from "@/components/Sections";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { services } from "@/lib/content";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SITE, absUrl } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return pageMeta({ lang, path: "/contact", title: d.contact.title, description: d.contact.desc });
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  const tel = SITE.phone.replace(/\s/g, "");

  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absUrl(`/${lang}/contact`),
    about: { "@id": absUrl("/#org") },
  };

  return (
    <>
      <PageHead
        title={d.contact.title}
        sub={d.contact.desc}
        crumbs={[{ href: `/${lang}`, label: d.nav.home }, { label: d.nav.contact }]}
      />
      <section className="section">
        <div className="container layout-aside">
          <div>
            <ul className="contact-list">
              <li><strong>{d.contact.phone}</strong><a href={`tel:${tel}`} dir="ltr">{SITE.phone}</a></li>
              <li><strong>{d.contact.whatsapp}</strong><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" dir="ltr">{SITE.phone}</a></li>
              <li><strong>{d.contact.email}</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><strong>{d.contact.address}</strong>{SITE.addressLine[lang]}</li>
              <li><strong>{d.contact.hours}</strong>{SITE.hoursLabel[lang]}</li>
            </ul>
          </div>
          <aside>
            <BookingForm
              labels={d.form}
              whatsapp={SITE.whatsapp}
              services={services.map((x) => ({ slug: x.slug, title: x.title[lang] }))}
            />
          </aside>
        </div>
      </section>
      <JsonLd data={[contactLd, breadcrumbLd(lang, [{ name: d.nav.home, path: "" }, { name: d.nav.contact, path: "/contact" }])]} />
    </>
  );
}
