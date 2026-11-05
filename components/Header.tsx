import Link from "next/link";
import LangSwitch from "./LangSwitch";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import { SITE } from "@/lib/site";

export default function Header({ lang, d }: { lang: Locale; d: Dict }) {
  const links = [
    { href: `/${lang}`, label: d.nav.home },
    { href: `/${lang}/services`, label: d.nav.services },
    { href: `/${lang}/astrologers`, label: d.nav.astrologers },
    { href: `/${lang}/blog`, label: d.nav.blog },
    { href: `/${lang}/contact`, label: d.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="container bar">
        <Link href={`/${lang}`} className="brand">
          <span className="brand-mark" aria-hidden="true">✦</span>
          {SITE.name[lang]}
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="bar-actions">
          <LangSwitch lang={lang} />
          <Link href={`/${lang}/contact`} className="btn btn-gold btn-sm book-btn">{d.nav.book}</Link>
          <details className="menu">
            <summary aria-label={d.nav.menu}><span aria-hidden="true">☰</span></summary>
            <nav aria-label="Mobile">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
              <Link href={`/${lang}/contact`} className="btn btn-gold">{d.nav.book}</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
