import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase().split("-")[0];
    const match = locales.find((l) => l === tag);
    if (match) return match;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.headers.set("Vary", "Accept-Language");
  return res;
}

export const config = {
  // Skip Next internals and any path with a file extension (sitemap.xml, robots.txt, llms.txt, icons).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
