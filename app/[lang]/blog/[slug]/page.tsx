import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { PageHead } from "@/components/Sections";
import { isLocale, locales } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getPost, posts } from "@/lib/content";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SITE, absUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getPost(slug);
  if (!isLocale(lang) || !p) return {};
  return pageMeta({
    lang,
    path: `/blog/${slug}`,
    title: p.title[lang],
    description: p.description[lang],
    type: "article",
    publishedTime: p.date,
  });
}

export default async function PostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  const p = getPost(slug);
  if (!isLocale(lang) || !p) notFound();
  const d = getDict(lang);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title[lang],
    description: p.description[lang],
    inLanguage: lang,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: absUrl(`/${lang}/blog/${slug}`),
    image: absUrl(`/${lang}/opengraph-image`),
    author: { "@id": absUrl("/#org") },
    publisher: { "@id": absUrl("/#org") },
  };

  return (
    <>
      <PageHead
        title={p.title[lang]}
        crumbs={[
          { href: `/${lang}`, label: d.nav.home },
          { href: `/${lang}/blog`, label: d.nav.blog },
          { label: p.title[lang] },
        ]}
      />
      <article className="section">
        <div className="container prose">
          <p className="muted">
            <time dateTime={p.date}>{new Intl.DateTimeFormat(lang === "ur" ? "ur-PK" : "en-GB", { dateStyle: "long" }).format(new Date(p.date))}</time>
            {" · "}{p.minutes} {d.pages.minutes} · {SITE.name[lang]}
          </p>
          <p><strong>{p.description[lang]}</strong></p>
          {p.body.map((s) => (
            <section key={s.h.en}>
              <h2>{s.h[lang]}</h2>
              <p>{s.p[lang]}</p>
            </section>
          ))}
          <p className="muted">{d.footer.disclaimer}</p>
        </div>
      </article>
      <JsonLd
        data={[
          articleLd,
          breadcrumbLd(lang, [
            { name: d.nav.home, path: "" },
            { name: d.nav.blog, path: "/blog" },
            { name: p.title[lang], path: `/blog/${slug}` },
          ]),
        ]}
      />
    </>
  );
}
