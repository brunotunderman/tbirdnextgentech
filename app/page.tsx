import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Sneller van idee naar impact",
    text: "Herbruikbare bouwblokken en slimme ontwikkelprocessen verkorten de weg van eerste concept naar een werkende oplossing.",
  },
  {
    number: "02",
    title: "Veiligheid in de basis",
    text: "Een afgeschermde backend, gecontroleerde API’s en een gescheiden gegevenslaag beperken onnodige blootstelling.",
  },
  {
    number: "03",
    title: "Eenvoudig aanpasbaar",
    text: "Een modulaire opzet maakt het overzichtelijk om functionaliteit te beheren, te verbeteren en mee te laten groeien.",
  },
  {
    number: "04",
    title: "Lagere totale kosten",
    text: "Efficiënt ontwikkelen en gericht beheren helpen de totale eigendomskosten laag te houden, zonder in te leveren op kwaliteit.",
  },
];

const layers = [
  {
    number: "01",
    name: "Presentatie",
    tech: "Next.js",
    detail: "De gebruikerservaring en interface",
    className: "layer-presentation",
  },
  {
    number: "02",
    name: "Applicatie",
    tech: "FastAPI · Python",
    detail: "Bedrijfslogica, validatie en autorisatie",
    className: "layer-application",
  },
  {
    number: "03",
    name: "Gegevens",
    tech: "PostgreSQL",
    detail: "Betrouwbare opslag, integriteit en audit",
    className: "layer-data",
  },
  {
    number: "04",
    name: "Beveiliging",
    tech: "Zero Trust",
    detail: "Versleutelde verbindingen en afgeschermde diensten",
    className: "layer-security",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div aria-hidden="true" className="hero-grid" />
        <div aria-hidden="true" className="hero-glow" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow"><span className="status-dot" /> SOFTWARE VOOR DE VOLGENDE STAP</span>
            <h1>
              Innovatie die je
              <br />
              <span>verder brengt</span>
            </h1>
            <p className="hero-description">
              We bouwen veilige, flexibele SaaS-oplossingen die ideeën sneller
              werkelijkheid maken. Slim ontworpen, eenvoudig te beheren en
              klaar om mee te groeien.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Ontdek wat mogelijk is <span aria-hidden="true">↗</span>
              </Link>
              <a className="text-link" href="#architectuur">
                Bekijk onze architectuur <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-icon" aria-hidden="true">✳</span>
              <span>Gebouwd voor snelheid, veiligheid en schaalbaarheid</span>
            </div>
          </div>
          <div aria-label="Illustratie van een gelaagde softwarearchitectuur" className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-core">
              <span className="core-spark" aria-hidden="true">✳</span>
              <span className="core-name">TBIRD</span>
              <span className="core-caption">NEXTGENTECH PLATFORM</span>
            </div>
            <div className="visual-node node-top">
              <span className="node-icon node-ui" aria-hidden="true">▧</span>
              <span><strong>Presentatie</strong><small>Ervaring, helder geregeld</small></span>
              <span className="node-pulse" />
            </div>
            <div className="visual-node node-right">
              <span className="node-icon node-api" aria-hidden="true">⌘</span>
              <span><strong>Applicatie</strong><small>Logica, veilig verbonden</small></span>
              <span className="node-pulse" />
            </div>
            <div className="visual-node node-bottom">
              <span className="node-icon node-data" aria-hidden="true">◈</span>
              <span><strong>Gegevens</strong><small>Beschermd en betrouwbaar</small></span>
              <span className="node-pulse" />
            </div>
            <div className="visual-node node-left">
              <span className="node-icon node-secure" aria-hidden="true">⌑</span>
              <span><strong>Beveiliging</strong><small>Zero Trust by design</small></span>
              <span className="node-pulse" />
            </div>
            <span className="orbit-label label-top">MODULAIR</span>
            <span className="orbit-label label-bottom">VEILIG ONTWORPEN</span>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>TECHNOLOGIE DIE MET JE MEEBEWEEGT</span>
          <span className="hero-bottom-line" />
          <span>VAN EERSTE IDEE TOT SCHAALBAAR PLATFORM</span>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-layout">
          <div>
            <span className="eyebrow eyebrow-dark">WAAROM TBIRD NEXTGENTECH</span>
            <h2 className="section-title">
              Goede software maakt
              <br />
              <span>complexiteit eenvoudig</span>
            </h2>
          </div>
          <div className="intro-text">
            <p>
              Veel organisaties willen vooruit, maar traditionele
              softwareontwikkeling maakt vernieuwen vaak traag en kostbaar.
              Tbird NextGenTech BV is gestart om dat anders te doen.
            </p>
            <p>
              Met moderne architectuur, een strak ontwerp en herbruikbare componenten maken we
              software op basis van AI accellerators die snel inzetbaar is, prettig om mee te werken en haalbaar om te beheren.
              Zo kunnen organisaties innoveren zonder onnodige complexiteit en kosten.
            </p>
            <Link className="inline-link" href="/about">
              Leer ons kennen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="benefits-section section-pad" id="voordelen">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow eyebrow-dark">EEN SLIMMERE MANIER VAN BOUWEN</span>
              <h2 className="section-title">
                Minder frictie
                <br />
                <span>Meer vooruitgang</span>
              </h2>
            </div>
            <p className="section-heading-note">
              Van eerste versie tot doorontwikkeling: onze aanpak is gericht op
              tastbare waarde, met een solide fundament voor later.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.number}>
                <div className="benefit-card-top">
                  <span className="benefit-number">{benefit.number}</span>
                  <span aria-hidden="true" className="benefit-arrow">↗</span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="architecture-section section-pad" id="architectuur">
        <div aria-hidden="true" className="architecture-glow" />
        <div className="container architecture-layout">
          <div className="architecture-copy">
            <span className="eyebrow"><span className="status-dot" /> VEILIGHEID IS GEEN EXTRA LAAGJE</span>
            <h2 className="section-title">
              Sterk door
              <br />
              <span>slimme scheiding</span>
            </h2>
            <p>
              Onze meerlaagsarchitectuur geeft elk onderdeel een duidelijke
              verantwoordelijkheid. De interface staat niet rechtstreeks in
              verbinding met de database: beveiligde API’s vormen de
              gecontroleerde schakel.
            </p>
            <Link className="button button-outline" href="/about#architectuur">
              Meer over onze aanpak <span aria-hidden="true">↗</span>
            </Link>
            <span className="architecture-footnote">
              Gebaseerd op live-productie omgeving https://www.tbirdtrader.com.
            </span>
          </div>
          <div className="architecture-diagram">
            <div className="diagram-topline">
              <span>GELAAGDE APPLICATIEARCHITECTUUR</span>
              <span><i /> VERBONDEN, NIET VERVLOCHTEN</span>
            </div>
            <div className="layer-stack">
              {layers.map((layer, index) => (
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
                  {index < layers.length - 1 && <div aria-hidden="true" className="layer-connector"><span /></div>}
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
      </section>

      <section className="closing-section">
        <div className="container closing-layout">
          <div>
            <span className="eyebrow eyebrow-dark">KLAAR OM VOORUIT TE KIJKEN?</span>
            <h2 className="section-title">
              Jouw volgende idee
              <br />
              verdient <span>een vliegende start</span>
            </h2>
          </div>
          <div className="closing-action">
            <p>Vertel ons waar je naartoe wilt. Dan denken we met je mee over een slimme route.</p>
            <Link className="button button-primary" href="/contact">
              Start een gesprek <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
