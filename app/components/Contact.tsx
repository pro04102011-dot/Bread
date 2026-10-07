"use client";

import { useState } from "react";
import { business } from "@/lib/data";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div>
          <h2 className="section__title section__title--left">Замовлення та контакти</h2>
          <p>Залиште заявку — ми передзвонимо протягом години в робочий час.</p>
          <ul className="info">
            <li>
              📍 <span>{business.address}</span>
            </li>
            <li>
              📞 <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              ✉️ <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            {business.hours.map((h) => (
              <li key={h.days}>
                🕖{" "}
                <span>
                  {h.days}: <strong>{h.time}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Ім’я
            <input name="name" required maxLength={80} autoComplete="name" />
          </label>
          <label>
            Телефон
            <input
              name="phone"
              type="tel"
              required
              pattern="[+0-9\s()\-]{9,20}"
              placeholder="+380…"
              autoComplete="tel"
            />
          </label>
          <label>
            Що бажаєте замовити?
            <textarea
              name="message"
              rows={4}
              required
              maxLength={1000}
              placeholder="Наприклад: 2 подових, 1 набір пампушок на завтра до 9:00"
            />
          </label>
          <button className="btn" disabled={status === "sending"}>
            {status === "sending" ? "Надсилаємо…" : "Надіслати заявку"}
          </button>
          {status === "ok" && (
            <p className="msg msg--ok">Дякуємо! Ми зв’яжемося з вами найближчим часом.</p>
          )}
          {status === "error" && (
            <p className="msg msg--err">
              Не вдалося надіслати. Зателефонуйте нам: {business.phone}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
