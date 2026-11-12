import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Tbird NextGenTech over een idee, samenwerking of moderne SaaS-oplossing.",
};

const topics = [
  {
    number: "01",
    title: "Een nieuw idee",
    text: "Verken de mogelijkheden voor een nieuw digitaal product of SaaS-platform.",
    subject: "Idee voor een nieuw digitaal product",
  },
  {
    number: "02",
    title: "Samenwerking",
    text: "Bespreek hoe onze technologie en expertise kunnen aansluiten op jouw plannen.",
    subject: "Samenwerking met Tbird NextGenTech",
  },
  {
    number: "03",
    title: "Vraag over onze aanpak",
    text: "Meer weten over onze architectuur, snelheid van ontwikkelen of manier van werken?",
    subject: "Vraag over Tbird NextGenTech",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div aria-hidden="true" className="hero-grid" />
        <div className="container page-hero-content">
          <span className="eyebrow"><span className="status-dot" /> LATEN WE KENNISMAKEN</span>
          <h1>
            Goed idee?
            <br />
            <span>We denken graag met je mee.</span>
          </h1>
          <p>
            Of je nu een eerste idee wilt verkennen, een vraag hebt over onze
            oplossingen of samen wilt bouwen: we horen graag van je.
          </p>
          <div className="page-hero-meta">
            <span>VERTEL ONS WAT JE WILT BEREIKEN</span>
            <span aria-hidden="true">✳</span>
            <span>WE DENKEN MET JE MEE</span>
          </div>
        </div>
      </section>

      <section className="contact-content section-pad">
        <div className="container contact-layout">
          <div className="contact-intro">
            <span className="eyebrow eyebrow-dark">WAAR KUNNEN WE JE MEE HELPEN?</span>
            <h2 className="section-title">
              Begin met een
              <br />
              <span>goed gesprek</span>
            </h2>
            <p>
              Geef in je bericht kort aan waar je aan werkt en wat je wilt
              bereiken. Dan kunnen we gericht reageren en samen kijken welke
              volgende stap past.
            </p>
            <a
              className="contact-email"
              href="mailto:info@tbirdnextgentech.com?subject=Vraag%20aan%20Tbird%20NextGenTech"
            >
              <span aria-hidden="true" className="contact-email-icon">↗</span>
              <span><small>ALGEMENE VRAGEN</small><strong>info@tbirdnextgentech.com</strong></span>
            </a>
            <address className="company-details">
              <strong>Tbird NextGenTech BV</strong>
              <span>Vuurtoren 11</span>
              <span>3894 KA Zeewolde</span>
              <span className="company-registration">KvK 99983664</span>
            </address>
          </div>
          <div className="contact-topics">
            <span className="contact-topics-label">KIES JE ONDERWERP</span>
            {topics.map((topic) => (
              <a
                className="contact-topic"
                href={`mailto:info@tbirdnextgentech.com?subject=${encodeURIComponent(topic.subject)}`}
                key={topic.number}
              >
                <span className="topic-number">{topic.number}</span>
                <span className="topic-copy"><strong>{topic.title}</strong><small>{topic.text}</small></span>
                <span aria-hidden="true" className="topic-arrow">↗</span>
              </a>
            ))}
            <div className="contact-note">
              <span aria-hidden="true">✳</span>
              <p>
                Liever eerst zien hoe we denken?{" "}
                <Link href="/about">Lees meer over onze aanpak</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container contact-bottom-inner">
          <div><span className="eyebrow">SAMENWERKEN AAN WAT HIERNA KOMT</span><h2>Laten we het verschil maken</h2></div>
          <span className="contact-bottom-mark" aria-hidden="true">✳</span>
          <p>Van eerste vraag tot werkende oplossing: zet de volgende stap wanneer jij er klaar voor bent.</p>
        </div>
      </section>
    </>
  );
}
