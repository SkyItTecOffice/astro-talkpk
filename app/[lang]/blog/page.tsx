import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { PageHead } from "@/components/Sections";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { posts } from "@/lib/content";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return pageMeta({ lang, path: "/blog", title: d.pages.blogTitle, description: d.pages.blogDesc });
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  return (
    <>
      <PageHead
        title={d.pages.blogTitle}
        sub={d.pages.blogDesc}
        crumbs={[{ href: `/${lang}`, label: d.nav.home }, { label: d.nav.blog }]}
      />
      <section className="section">
        <div className="container grid grid-3">
          {posts.map((p) => (
            <article key={p.slug} className="card service-card">
              <p className="muted">
                <time dateTime={p.date}>{new Intl.DateTimeFormat(lang === "ur" ? "ur-PK" : "en-GB", { dateStyle: "long" }).format(new Date(p.date))}</time>
                {" · "}{p.minutes} {d.pages.minutes}
              </p>
              <h2 style={{ fontSize: "1.2rem" }}>{p.title[lang]}</h2>
              <p>{p.description[lang]}</p>
              <Link className="more" href={`/${lang}/blog/${p.slug}`}>{d.sections.readMore} →</Link>
            </article>
          ))}
        </div>
      </section>
      <JsonLd data={breadcrumbLd(lang, [{ name: d.nav.home, path: "" }, { name: d.nav.blog, path: "/blog" }])} />
    </>
  );
}
