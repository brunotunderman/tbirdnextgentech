import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tbird NextGenTech | Innovatie die werkt",
    template: "%s | Tbird NextGenTech",
  },
  description:
    "Tbird NextGenTech bouwt veilige, schaalbare SaaS-oplossingen met een korte time to market en een lage totale eigendomskost.",
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <header className="site-header">
          <div className="nav-shell">
            <Link aria-label="Tbird NextGenTech home" className="brand" href="/">
              <Image
                alt=""
                className="brand-logo"
                height={232}
                priority
                src="/tbird-nextgentech-logo.png"
                width={648}
              />
            </Link>
            <nav aria-label="Hoofdnavigatie" className="main-nav">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link className="nav-cta" href="/contact">
              Samenwerken <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-main">
            <div className="footer-brand">
              <Link aria-label="Tbird NextGenTech home" className="brand" href="/">
                <Image
                  alt=""
                  className="brand-logo"
                  height={232}
                  src="/tbird-nextgentech-logo.png"
                  width={648}
                />
              </Link>
              <p>
                Slimme software. Veilige fundamenten.
                <br />
                Klaar voor wat hierna komt.
              </p>
            </div>
            <div className="footer-column">
              <span className="footer-label">Ontdek</span>
              <Link href="/">Home</Link>
              <Link href="/about">Over ons</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-column">
              <span className="footer-label">Onze aanpak</span>
              <a href="/#architectuur">Meerlaags ontworpen</a>
              <a href="/#voordelen">Gebouwd voor groei</a>
              <a href="/contact">Bespreek je idee </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Tbird NextGenTech BV</span>
            <span>Next Genereation Technology IT Innovation</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
