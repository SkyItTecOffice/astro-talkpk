import Link from "next/link";
import { dictionaries } from "@/lib/dictionaries";

// Not-found renders without params, so show both languages.
export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p>{dictionaries.en.pages.notFoundSub}</p>
        <p lang="ur" dir="rtl">{dictionaries.ur.pages.notFoundSub}</p>
        <p>
          <Link className="btn btn-gold" href="/en">{dictionaries.en.pages.backHome}</Link>{" "}
          <Link className="btn btn-gold" href="/ur" lang="ur">{dictionaries.ur.pages.backHome}</Link>
        </p>
      </div>
    </section>
  );
}
