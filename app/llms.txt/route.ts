import { posts, services } from "@/lib/content";
import { SITE, absUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name.en}`,
    "",
    `> ${SITE.tagline.en}. Private online consultations in Urdu and English for clients in Pakistan, the UK and worldwide, covering Istikhara, Ilm-ul-Adad (Islamic numerology), rishta and marriage guidance, rizq and business, baby names, and authentic wazaif and duas. We do not claim knowledge of the unseen or guarantee outcomes.`,
    "",
    "## Key facts",
    `- Based in: ${SITE.addressLine.en}; serves clients in Pakistan, the UK and worldwide online`,
    `- Languages: English (/en), Urdu (/ur)`,
    `- Contact: ${SITE.phone} (phone and WhatsApp), ${SITE.email}`,
    `- Hours: ${SITE.hoursLabel.en}`,
    "",
    "## Main pages",
    `- [Home](${absUrl("/en")}): Overview of services and how to book`,
    `- [Services](${absUrl("/en/services")}): All consultation services`,
    `- [Astrologers](${absUrl("/en/astrologers")}): Who gives the guidance`,
    `- [Blog](${absUrl("/en/blog")}): Articles on Istikhara, numerology and marriage`,
    `- [Contact & booking](${absUrl("/en/contact")}): Book a consultation`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.title.en}](${absUrl(`/en/services/${s.slug}`)}): ${s.short.en}`),
    "",
    "## Articles",
    ...posts.map((p) => `- [${p.title.en}](${absUrl(`/en/blog/${p.slug}`)}): ${p.description.en}`),
    "",
    "## Urdu versions",
    `- Every page is also available in Urdu by replacing /en with /ur, for example ${absUrl("/ur/services")}`,
    "",
    "## Optional",
    `- [Sitemap](${absUrl("/sitemap.xml")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
