"use client";

import { useState, type FormEvent } from "react";

type Props = {
  labels: {
    title: string; sub: string; name: string; phone: string; service: string; pickService: string;
    dob: string; message: string; submit: string; privacy: string; msgIntro: string;
  };
  services: { slug: string; title: string }[];
  whatsapp: string;
  initialService?: string;
};

export default function BookingForm({ labels, services, whatsapp, initialService = "" }: Props) {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const f = new FormData(e.currentTarget);
    const lines = [
      labels.msgIntro,
      `${labels.name}: ${f.get("name")}`,
      `${labels.phone}: ${f.get("phone")}`,
      `${labels.service}: ${f.get("service")}`,
    ];
    if (f.get("dob")) lines.push(`${labels.dob}: ${f.get("dob")}`);
    if (f.get("message")) lines.push(`${labels.message}: ${f.get("message")}`);
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSending(false);
  }

  return (
    <form className="card form" onSubmit={onSubmit}>
      <h2>{labels.title}</h2>
      <p>{labels.sub}</p>
      <label>{labels.name}
        <input name="name" required autoComplete="name" />
      </label>
      <label>{labels.phone}
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" dir="ltr" placeholder="03XX XXXXXXX" />
      </label>
      <label>{labels.service}
        <select name="service" required defaultValue={initialService}>
          <option value="" disabled>{labels.pickService}</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <label>{labels.dob}
        <input name="dob" type="date" />
      </label>
      <label>{labels.message}
        <textarea name="message" rows={3} />
      </label>
      <button className="btn btn-gold" type="submit" disabled={sending}>{labels.submit}</button>
      <small>{labels.privacy}</small>
    </form>
  );
}
