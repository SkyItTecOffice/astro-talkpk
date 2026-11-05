export const locales = ["en", "ur"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type L = Record<Locale, string>;

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dirOf = (lang: Locale) => (lang === "ur" ? "rtl" : "ltr");
export const ogLocale = (lang: Locale) => (lang === "ur" ? "ur_PK" : "en_PK");
