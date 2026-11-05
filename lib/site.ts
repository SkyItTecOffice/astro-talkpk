import type { L } from "./i18n";

// TODO: replace every value below with the real business details.
export const SITE = {
  name: { en: "Astro Talk Pk", ur: "ایسٹرو ٹاک پی کے" } as L,
  tagline: {
    en: "Islamic astrology & spiritual guidance for Pakistan and the UK",
    ur: "پاکستان اور برطانیہ کے لیے اسلامی علمِ نجوم اور روحانی رہنمائی",
  } as L,
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://astrotalkpk.com").replace(/\/$/, ""),
  phone: "+44 7432 555505",
  whatsapp: "447432555505", // international format, digits only
  email: "info@astrotalkpk.com",
  address: {
    street: "", // TODO: add street + postcode if you have a public office
    city: "London",
    region: "England",
    postalCode: "",
    country: "GB",
  },
  addressLine: { en: "London, United Kingdom", ur: "لندن، برطانیہ" } as L,
  geo: { lat: 51.5072, lng: -0.1276 },
  hours: "Mo-Su 10:00-22:00",
  hoursLabel: { en: "Daily, 10:00 am – 10:00 pm (PKT)", ur: "روزانہ، صبح 10 تا رات 10 بجے (پاکستانی وقت)" } as L,
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
  themeColor: "#0B1F3A",
};

export const absUrl = (path = "") => `${SITE.url}${path}`;
