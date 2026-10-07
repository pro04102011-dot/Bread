"use client";

import { useState } from "react";
import { business } from "@/lib/data";

const links = [
  { href: "#products", label: "Асортимент" },
  { href: "#features", label: "Чому ми" },
  { href: "#about", label: "Про нас" },
  { href: "#contact", label: "Контакти" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">
          <span aria-hidden>🌾</span> {business.name}
        </a>
        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Головне меню">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={business.phoneHref} className="btn btn--small nav__phone">
            {business.phone}
          </a>
        </nav>
        <button
          className="burger"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
