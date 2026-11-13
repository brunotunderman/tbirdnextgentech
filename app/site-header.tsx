"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          aria-label="Tbird NextGenTech home"
          className="brand"
          href="/"
          onClick={closeMenu}
        >
          <Image
            alt=""
            className="brand-logo"
            height={300}
            priority
            src="/tbird-nextgentech-logo-new.png"
            width={833}
          />
        </Link>
        <button
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          aria-label="Hoofdnavigatie"
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          id="main-navigation"
        >
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact" onClick={closeMenu}>
            Samenwerken <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
