import type { Metadata, Viewport } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import JsonLd from "@/components/JsonLd";
import { dirOf, isLocale, locales } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { SITE, absUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], display: "swap", variable: "--font-ur", preload: false });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const name = SITE.name[lang];
  return {
    metadataBase: new URL(SITE.url),
    title: { default: `${name} | ${SITE.tagline[lang]}`, template: `%s | ${name}` },
    applicationName: name,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    formatDetection: { telephone: true },
    // TODO: paste verification codes from Google Search Console / Bing Webmaster Tools.
    // verification: { google: "..." },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  const orgLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": absUrl("/#org"),
        name: SITE.name.en,
        alternateName: SITE.name.ur,
        url: absUrl(),
        logo: absUrl("/icon.svg"),
        image: absUrl(`/${lang}/opengraph-image`),
        description: SITE.tagline.en,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: "$$",
        openingHours: SITE.hours,
        address: {
          "@type": "PostalAddress",
          ...(SITE.address.street ? { streetAddress: SITE.address.street } : {}),
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          ...(SITE.address.postalCode ? { postalCode: SITE.address.postalCode } : {}),
          addressCountry: SITE.address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
        areaServed: [{ "@type": "Country", name: "Pakistan" }, { "@type": "Country", name: "United Kingdom" }],
        availableLanguage: ["en", "ur"],
        sameAs: Object.values(SITE.social),
      },
      {
        "@type": "WebSite",
        "@id": absUrl("/#website"),
        url: absUrl(),
        name: SITE.name.en,
        inLanguage: ["en", "ur"],
        publisher: { "@id": absUrl("/#org") },
      },
    ],
  };

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${inter.variable} ${nastaliq.variable}`}>
      <body>
        <a className="skip" href="#main">{d.pages.skip}</a>
        <Header lang={lang} d={d} />
        <main id="main">{children}</main>
        <Footer lang={lang} d={d} />
        <WhatsAppFab label={d.hero.cta2} />
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}
