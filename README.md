# Astro Talk Pk: Islamic astrology site (Next.js 16, EN + UR)

Statically generated, bilingual (`/en`, `/ur` with RTL), SEO-first.

## Run

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Replace the placeholders

| What | Where |
| --- | --- |
| Brand, phone, WhatsApp, email, address, hours, socials | `lib/site.ts` |
| Services, astrologers, testimonials, FAQs, blog posts (EN + UR) | `lib/content.ts` |
| UI text (EN + UR) | `lib/dictionaries.ts` |
| Colors (navy `#0b1f3a`, gold `#d4a937`) | `:root` in `app/globals.css` |

## SEO / GEO features

- `/sitemap.xml` (with hreflang alternates), `/robots.txt`, `/llms.txt`: `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts`
- Per-page title, description, canonical, hreflang, Open Graph, Twitter cards (`lib/seo.ts`)
- JSON-LD: LocalBusiness, WebSite, Service, Article, FAQPage, BreadcrumbList
- All pages prerendered; fonts self-hosted via `next/font`; minimal client JS (language switch and booking form only)
- Security headers in `next.config.ts`

## Before launch

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
2. Replace sample testimonials and astrologer profiles with real ones (then add Review schema).
3. Add Search Console / Bing verification in `app/[lang]/layout.tsx`.
4. Submit `/sitemap.xml` in Google Search Console.
