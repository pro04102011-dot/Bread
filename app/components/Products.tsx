"use client";

import { useState } from "react";
import { categories, products, type Category } from "@/lib/data";

export default function Products() {
  const [active, setActive] = useState<Category | "all">("all");
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section__title">Наш асортимент</h2>
        <p className="section__sub">Випікаємо щодня. Ціни вказані за одиницю.</p>

        <div className="tabs" role="tablist" aria-label="Категорії">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`tab ${active === c.id ? "tab--active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid">
          {list.map((p) => (
            <article key={p.id} className="card">
              <div className="card__img" aria-hidden>
                {p.emoji}
                {p.badge && <span className="badge">{p.badge}</span>}
              </div>
              <div className="card__body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="card__foot">
                  <span className="weight">{p.weight}</span>
                  <span className="price">{p.price} грн</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
