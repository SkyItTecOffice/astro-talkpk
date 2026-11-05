import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import { SITE } from "@/lib/site";
import { services } from "@/lib/content";

export default function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">✦ {SITE.name[lang]}</p>
          <p>{SITE.tagline[lang]}</p>
          <p className="muted-on-dark">{d.footer.disclaimer}</p>
        </div>
        <div>
          <h2 className="footer-h">{d.nav.services}</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/${lang}/services/${s.slug}`}>{s.title[lang]}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">{d.footer.explore}</h2>
          <ul>
            <li><Link href={`/${lang}/astrologers`}>{d.nav.astrologers}</Link></li>
            <li><Link href={`/${lang}/blog`}>{d.nav.blog}</Link></li>
            <li><Link href={`/${lang}/contact`}>{d.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-h">{d.footer.contact}</h2>
          <address>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} dir="ltr">{SITE.phone}</a><br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
            {SITE.addressLine[lang]}
          </address>
          <p className="footer-h">{d.footer.follow}</p>
          <ul className="social">
            <li><a href={SITE.social.facebook} rel="noopener noreferrer me" target="_blank">Facebook</a></li>
            <li><a href={SITE.social.instagram} rel="noopener noreferrer me" target="_blank">Instagram</a></li>
            <li><a href={SITE.social.youtube} rel="noopener noreferrer me" target="_blank">YouTube</a></li>
          </ul>
        </div>
      </div>
      <p className="container copyright">© {new Date().getFullYear()} {SITE.name[lang]}. {d.footer.rights}</p>
    </footer>
  );
}
