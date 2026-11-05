import { ImageResponse } from "next/og";
import { locales } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const alt = SITE.name.en;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Latin text only: the default OG font has no Urdu glyphs.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(160deg, #0B1F3A, #12305A)",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 40, color: "#D4A937", display: "flex" }}>Islamic Astrology</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 20, display: "flex" }}>{SITE.name.en}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#cdd8ea", display: "flex" }}>
          Istikhara · Ilm-ul-Adad · Rishta · Rizq
        </div>
      </div>
    ),
    size,
  );
}
