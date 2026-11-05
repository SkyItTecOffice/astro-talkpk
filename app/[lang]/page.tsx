import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { AstrologerGrid, ServiceGrid } from "@/components/Sections";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { faqs, posts, testimonials } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  const meta = pageMeta({ lang, title: d.pages.home, description: d.pages.homeDesc });
  return { ...meta, title: { absolute: `${SITE.name[lang]} | ${d.pages.home}` } };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q[lang],
      acceptedAnswer: { "@type": "Answer", text: f.a[lang] },
    })),
  };

  return (
    <>
      <section className="hero">
        <svg className="hero-stars" viewBox="0 0 100 100" aria-hidden="true" fill="currentColor">
          <path d="M50 4l9 28 29 .5-23 17 8.500 28L50 61 26.500 77.500 35 49.500 12 32.500 41 32z" />
        </svg>
        <div className="container">
          <p className="eyebrow">{d.hero.eyebrow}</p>
          <h1>{d.hero.title}</h1>
          <p>{d.hero.sub}</p>
          <div className="hero-cta">
            <Link className="btn btn-gold" href={`/${lang}/contact`}>{d.hero.cta1}</Link>
            <a className="btn btn-outline" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">{d.hero.cta2}</a>
          </div>
        </div>
      </section>

      <section className="trust" aria-label={d.sections.why}>
        <div className="container grid grid-4">
          {d.trust.map((t) => (
            <div key={t.t}>
              <h3>{t.t}</h3>
              <p>{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{d.sections.services}</h2>
            <p>{d.sections.servicesSub}</p>
          </div>
          <ServiceGrid lang={lang} d={d} />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head"><h2>{d.sections.how}</h2></div>
          <div className="grid grid-3 steps">
            {d.steps.map((s) => (
              <div key={s.t} className="card step">
                <h3>{s.t}</h3>
                <p className="muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><h2>{d.sections.astrologers}</h2></div>
          <AstrologerGrid lang={lang} d={d} />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head"><h2>{d.sections.testimonials}</h2></div>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <figure key={t.name.en} className="card" style={{ margin: 0 }}>
                <blockquote><p>“{t.text[lang]}”</p></blockquote>
                <figcaption><strong>{t.name[lang]}</strong>, <span className="muted">{t.city[lang]}</span></figcaption>
                <p><span className="tag">{d.sampleTag}</span></p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq" style={{ maxWidth: 820 }}>
          <div className="section-head"><h2>{d.sections.faq}</h2></div>
          {faqs.map((f) => (
            <details key={f.q.en}>
              <summary>{f.q[lang]}</summary>
              <p>{f.a[lang]}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head"><h2>{d.sections.blog}</h2></div>
          <div className="grid grid-3">
            {posts.map((p) => (
              <article key={p.slug} className="card service-card">
                <h3>{p.title[lang]}</h3>
                <p>{p.description[lang]}</p>
                <Link className="more" href={`/${lang}/blog/${p.slug}`}>{d.sections.readMore} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>{d.cta.title}</h2>
          <p>{d.cta.sub}</p>
          <Link className="btn btn-gold" href={`/${lang}/contact`}>{d.cta.button}</Link>
        </div>
      </section>

      <JsonLd data={faqLd} />
    </>
  );
}
