import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import { astrologers, services, type Astrologer } from "@/lib/content";

type P = { lang: Locale; d: Dict };

export function PageHead({ title, sub, crumbs }: { title: string; sub?: string; crumbs: { href?: string; label: string }[] }) {
  return (
    <section className="page-head">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={i}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              {i < crumbs.length - 1 ? " / " : ""}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}

export function ServiceGrid({ lang, d, exclude }: P & { exclude?: string }) {
  const list = services.filter((s) => s.slug !== exclude);
  return (
    <div className="grid grid-3">
      {list.map((s, i) => (
        <article key={s.slug} className="card service-card">
          <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <h3>{s.title[lang]}</h3>
          <p>{s.short[lang]}</p>
          <Link className="more" href={`/${lang}/services/${s.slug}`}>{d.sections.learnMore} →</Link>
        </article>
      ))}
    </div>
  );
}

export function AstrologerCard({ a, lang, d }: { a: Astrologer; lang: Locale; d: Dict }) {
  return (
    <article className="card">
      <div className="avatar" aria-hidden="true">{a.name[lang].charAt(0)}</div>
      <h3>{a.name[lang]}</h3>
      <p className="muted">{a.title[lang]}</p>
      <p>{d.placeholderBio}</p>
      <span className="tag">{a.langs[lang]}</span>
    </article>
  );
}

export function AstrologerGrid({ lang, d, limit }: P & { limit?: number }) {
  return (
    <div className="grid grid-3">
      {astrologers.slice(0, limit).map((a) => (
        <AstrologerCard key={a.id} a={a} lang={lang} d={d} />
      ))}
    </div>
  );
}
