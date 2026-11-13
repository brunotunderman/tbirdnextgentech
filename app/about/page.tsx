import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met Tbird NextGenTech BV: een startup die veilige en schaalbare software toegankelijker maakt.",
};

const principles = [
  {
    index: "01 / VEILIGHEID",
    title: "Ontworpen met vertrouwen als uitgangspunt",
    text: "Een moderne applicatie vraagt om meer dan een goed werkende interface. Door presentatie, bedrijfslogica, gegevens en netwerkbeveiliging van elkaar te scheiden, beperken we onnodige toegang en houden we verantwoordelijkheden helder.",
  },
  {
    index: "02 / SNELHEID",
    title: "Korte lijnen van idee naar oplossing",
    text: "Met herbruikbare componenten en een modulaire basis kunnen we gericht bouwen en sneller waarde opleveren. Zo gaat minder tijd verloren aan opnieuw uitvinden en kan meer aandacht naar wat de gebruiker echt nodig heeft.",
  },
  {
    index: "03 / EENVOUD",
    title: "Software die ook morgen werkbaar blijft",
    text: "Een oplossing moet niet alleen snel live kunnen, maar ook makkelijk te beheren en aan te passen zijn. Duidelijke grenzen tussen onderdelen maken onderhoud, uitbreiding en doorontwikkeling overzichtelijker.",
  },
];

const team = [
  {
    name: "Bruno Tunderman",
    role: "Chief Executive Officer & Founder",
    image: "/team/bruno.png",
    imageWidth: 178,
    imageHeight: 225,
    bio: "Bruno brengt tientallen jaren ervaring in IT mee, met een loopbaan die teruggaat tot de late jaren tachtig en een lange periode bij SAP. Hij richt zich op technologie die klanten helpt vernieuwen en hun organisatie vooruitbrengt. Zijn achtergrond omvat daarnaast marketing en filosofie.",
    education:
      "NIMA-C · Master in Marketing Management Birmingham · Master in Philosophy VU Amsterdam",
  },
  {
    name: "Niels van Oostrum",
    role: "Chief Operating Officer",
    image: "/team/niels.png",
    imageWidth: 198,
    imageHeight: 227,
    bio: "Niels combineert een klantgerichte, ondernemende achtergrond met meer dan tien jaar ervaring in commerciële technologierollen, waaronder zes jaar bij SAP. Zijn werk raakt aan data, automatisering en AI, met aandacht voor oplossingen die betrouwbaar en prettig in gebruik zijn.",
    education: "Bachelor of Commerce · Hogeschool Leiden",
  },
  {
    name: "Thierry Tunderman",
    role: "Chief Revenue Officer",
    image: "/team/thierry.png",
    imageWidth: 400,
    imageHeight: 500,
    bio: "Thierry verbindt technologie met klantbehoeften en commerciële kansen. Vanuit zijn ervaring met klanten, salesteams en technologieproducten helpt hij complexe mogelijkheden vertalen naar duidelijke waarde. Hij richt zich op groei, partnerships en een sterke aansluiting op de markt.",
    education: "Bachelor in Science · Avans Hogeschool 's-Hertogenbosch",
  },
];

const architectureLayers = [
  {
    number: "01",
    name: "Presentatielaag",
    detail:
      "De interface toont informatie, formulieren en dashboards. Geen directe databaseverbinding.",
    tech: "NEXT.JS",
    className: "layer-presentation",
  },
  {
    number: "02",
    name: "Applicatielaag",
    detail:
      "API’s verwerken bedrijfsregels, authenticatie, autorisatie en gegevensvalidatie.",
    tech: "FASTAPI",
    className: "layer-application",
  },
  {
    number: "03",
    name: "Gegevenslaag",
    detail:
      "De database wordt alleen benaderd door geautoriseerde applicatiediensten.",
    tech: "POSTGRESQL",
    className: "layer-data",
  },
  {
    number: "04",
    name: "Beveiligingslaag",
    detail:
      "Zero Trust-connectiviteit helpt interne diensten af te schermen en verbindingen te beveiligen.",
    tech: "ZERO TRUST",
    className: "layer-security",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div aria-hidden="true" className="hero-grid" />
        <div className="container page-hero-content">
          <span className="eyebrow"><span className="status-dot" /> OVER TBIRD NEXTGENTECH</span>
          <h1>
            Technologie met
            <br />
            <span>ambitie én richting</span>
          </h1>
          <p>
            Wij zijn een startup met een heldere missie: innovatieve IT
            oplossingen bouwen die krachtig zijn onder de motorkap en eenvoudig
            voelen in gebruik, en tegelijk snel zijn aan te passen zonder enorme beheerkosten.
          </p>
          <div className="page-hero-meta">
            <span>GEBOUWD VOOR VOORUITGANG</span>
            <span aria-hidden="true">✳</span>
            <span>TBIRD NEXTGENTECH BV</span>
          </div>
        </div>
      </section>

      <section className="about-intro section-pad">
        <div className="container about-intro-grid">
          <div className="about-statement">
            <span className="eyebrow eyebrow-dark">WAAR WE IN GELOVEN</span>
            <h2 className="section-title">
              Vernieuwing moet
              <br />
              <span>haalbaar voelen</span>
            </h2>
          </div>
          <div className="about-body">
            <p className="lead">
              Digitale ideeën verdienen een betere route naar de markt.
            </p>
            <p>
              Tbird NextGenTech BV is opgericht om een alternatief te bieden
              voor traditionele automatisering: moderne, veilige technologie
              met een korte time to market, zonder onnodige beheerlast of
              onvoorspelbare complexiteit.
            </p>
            <p>
              Ons doel is helder: oplossingen maken die eenvoudig zijn aan te
              passen, meegroeien met de organisatie tegen minimale kosten van eigendom, 
              implementatie en beheer.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section section-pad" id="team">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow eyebrow-dark">DE MENSEN ACHTER DE TECHNOLOGIE</span>
              <h2 className="section-title">
                Ervaring die
                <br />
                <span>ideeën verder brengt</span>
              </h2>
            </div>
            <p className="section-heading-note">
              Een mix van IT, operations en commerciële ervaring helpt ons
              technologie te verbinden aan wat organisaties en gebruikers
              werkelijk nodig hebben. Het kan écht anders!
            </p>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name}>
                <div className="team-portrait">
                  <Image
                    alt={`Portret van ${person.name}`}
                    className="team-photo-image"
                    height={person.imageHeight}
                    src={person.image}
                    width={person.imageWidth}
                  />
              
                </div>
                <div className="team-card-copy">
                  <span className="team-role">{person.role}</span>
                  <h3>{person.name}</h3>
                  <p>{person.bio}</p>
                  <span className="team-education">{person.education}</span>
                </div>
              </article>
            ))}
          </div>
          
        </div>
      </section>

      <section className="principles-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow eyebrow-dark">HOE WE BOUWEN</span>
              <h2 className="section-title">
                Klein beginnen
                <br />
                <span>Slim doorgroeien</span>
              </h2>
            </div>
            <p className="section-heading-note">
              Technologie werkt pas echt als ze mensen en organisaties helpt vooruit te komen. Onze visie is gericht op het maken van maatwerk als tegenhanger van de standaard software van de afgelopen decennia. Daar waar standaard software veel ongewenste functionaliteit biedt, waar wel voor betaald moet worden, richten wij ons op het leveren van oplossingen zonder overbodige ballast.
              
            </p>
          </div>
          <div className="principle-list">
            {principles.map((principle) => (
              <article className="principle-row" key={principle.index}>
                <span className="principle-index">{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-architecture section-pad" id="architectuur">
        <div className="container about-architecture-grid">
          <div>
            <span className="eyebrow"><span className="status-dot" /> ARCHITECTUUR ALS FUNDAMENT</span>
            <h2 className="section-title">
              Vier lagen
              <br />
              <span>Eén samenhangend geheel</span>
            </h2>
            <p>
              In één van onze projecten, het EH Portaal-platform, is ook gekozen voor een gelaagde opzet waarin iedere laag een duidelijke rol heeft. Dat maakt het platform beter te onderhouden, veilig en ondersteunt gecontroleerde groei.
            </p>
            <a
              className="inline-link inline-link-light"
              href="https://ehportaal.nl/whitepaper"
              rel="noreferrer"
              target="_blank"
            >
              Lees het whitepaper van EH Portaal <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="architecture-diagram">
            <div className="diagram-topline">
              <span>GELAAGDE APPLICATIEARCHITECTUUR</span>
              <span><i /> VERBONDEN, NIET VERVLOCHTEN</span>
            </div>
            <div className="layer-stack">
              {architectureLayers.map((layer, index) => (
                <div className="layer-row-wrap" key={layer.number}>
                  <div className={`layer-row ${layer.className}`}>
                    <span className="layer-number">{layer.number}</span>
                    <span className="layer-main">
                      <strong>{layer.name}</strong>
                      <small>{layer.detail}</small>
                    </span>
                    <span className="layer-tech">{layer.tech}</span>
                    <span className="layer-check" aria-label="Onderdeel van de architectuur">✓</span>
                  </div>
                  {index < architectureLayers.length - 1 && (
                    <div aria-hidden="true" className="layer-connector"><span /></div>
                  )}
                </div>
              ))}
            </div>
            <div className="diagram-foot">
              <span>HELDERE GRENZEN</span>
              <span>AFGESCHERMDE DATA</span>
              <span>GERICHT OPSCHALEN</span>
            </div>
          </div>
        </div>
        <div className="container architecture-caveat">
          <span aria-hidden="true">i</span>
          <p>
            De genoemde architectuur beschrijft het EH Portaal-platform.
            Technische keuzes worden per toepassing afgestemd op de eisen en
            context van het project.
          </p>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-layout">
          <div>
            <span className="eyebrow eyebrow-dark">VAN UITDAGING NAAR OPLOSSING</span>
            <h2 className="section-title">
              Laten we samen
              <br />
              iets <span>vooruitstrevends bouwen</span>
            </h2>
          </div>
          <div className="closing-action">
            <p>Een nieuw product, een slimmer proces of een bestaande applicatie die klaar is voor de volgende stap?</p>
            <Link className="button button-primary" href="/contact">
              Neem contact op <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
