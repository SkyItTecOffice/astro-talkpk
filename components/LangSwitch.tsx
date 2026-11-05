"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LangSwitch({ lang }: { lang: Locale }) {
  const pathname = usePathname() || `/${lang}`;
  const other: Locale = lang === "en" ? "ur" : "en";
  const href = pathname.replace(/^\/(en|ur)(?=\/|$)/, `/${other}`);

  return (
    <Link href={href} lang={other} hrefLang={other} prefetch={false} className="lang-switch">
      {other === "ur" ? "اردو" : "English"}
    </Link>
  );
}
