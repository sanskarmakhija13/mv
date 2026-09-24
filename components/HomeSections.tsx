import Image from "next/image";
import Link from "next/link";
import {
  galleryImages,
  headliners,
  leaders,
  partnerLogos,
  site,
  stats,
} from "@/lib/content";
import { SectionTitle } from "@/components/SectionTitle";
import { Countdown } from "@/components/Countdown";

export function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${site.heroImage})` }}
    >
      <div className="hero-scrim" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-content page-shell">
        <Image className="hero-logo" src="/mv-logo.svg" alt="Manfest Varchasva" width={92} height={92} priority />
        <div className="hero-kicker">IIM LUCKNOW</div>
        <h1>
          MANFEST-<span>VARCHASVA</span>
        </h1>
        <div className="hero-year">{site.edition}</div>

        <div className="hero-info">
          <span>{site.dates}</span>
          <i />
          <span>{site.venue}</span>
        </div>

        <Countdown />

        <p>{site.tagline}</p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="/events">
            Explore events <span>→</span>
          </Link>
          <Link className="btn btn-ghost" href="/gallery">
            View gallery
          </Link>
        </div>
      </div>

      <a className="scroll-cue" href="#headliners" aria-label="Scroll to content">
        <span />
      </a>
    </section>
  );
}

export function Headliners() {
  return (
    <section id="headliners" className="section section-dark">
      <div className="page-shell">
        <SectionTitle
          eyebrow="THE STAGE"
          title="Past"
          accent="Headliners"
          description="Artists who turned Manfest-Varchasva nights into memories."
        />

        <div className="headliner-grid">
          {headliners.map((artist, index) => (
            <article className="headliner-card" key={artist.name}>
              <img
                src={artist.image}
                alt={artist.name}
                className={`headliner-photo${index < 3 ? " final-crop" : ""}`}
                loading="lazy"
                decoding="async"
              />
              <div className="card-gradient" />
              <div className="headliner-copy">
                <span>{artist.edition}</span>
                <h3>{artist.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadersExpress() {
  return (
    <section className="section section-ink">
      <div className="page-shell">
        <SectionTitle
          eyebrow="IDEAS ON STAGE"
          title="Leaders"
          accent="Express"
          description="Conversations with leaders across public life, business and entrepreneurship."
        />

        <div className="leaders-grid">
          {leaders.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-image">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 800px) 45vw, 18vw"
                />
              </div>
              <div className="speaker-copy">
                <h3>{speaker.name}</h3>
                <p>{speaker.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OverTheYears() {
  return (
    <section className="section years-section">
      <div className="year-outline year-outline-left">2023</div>
      <div className="year-outline year-outline-right">2024</div>

      <div className="page-shell years-inner">
        <SectionTitle
          eyebrow="THE EXPERIENCE"
          title="Manfest-Varchasva"
          accent="Over the Years"
          description="A look back at the moments, memories and milestones that have defined Manfest-Varchasva."
          align="center"
        />

        <div className="video-grid">
          <VideoCard id="l6qw-fCkYRM" label="MANFEST-VARCHASVA" year="2023" />
          <VideoCard id="OspT5n1DuOo" label="MANFEST-VARCHASVA" year="2024" />
        </div>
      </div>
    </section>
  );
}

function VideoCard({ id, label, year }: { id: string; label: string; year: string }) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={`Manfest-Varchasva ${year}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="video-meta">
        <span className="video-line" />
        <strong>{label}</strong>
        <b>{year}</b>
      </div>
    </article>
  );
}

export function Highlights() {
  return (
    <section className="section stats-section">
      <div className="page-shell">
        <SectionTitle
          eyebrow="BY THE NUMBERS"
          title="Manfest-Varchasva"
          accent="2025–26"
          align="center"
        />

        <div className="stats-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersPreview() {
  return (
    <section className="section section-light">
      <div className="page-shell">
        <div className="title-row">
          <SectionTitle
            eyebrow="BACKED BY"
            title="Our"
            accent="Partners"
            description="Organisations that have supported Manfest-Varchasva across editions."
          />
          <Link href="/partners" className="text-link">
            View all partners →
          </Link>
        </div>

        <div className="logo-grid">
          {partnerLogos.slice(0, 10).map((partner) => (
            <div className="logo-card" key={partner.name}>
              <Image
                src={partner.image}
                alt={partner.name}
                width={180}
                height={90}
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="section section-dark gallery-preview">
      <div className="page-shell">
        <div className="title-row">
          <SectionTitle
            eyebrow="IN PIC4URES"
            title="The"
            accent="MV Energy"
            description="Stage lights, conversations, competitions and crowds."
          />
          <Link href="/gallery" className="text-link light-link">
            Open gallery →
          </Link>
        </div>

        <div className="gallery-strip">
          {galleryImages.slice(0, 6).map((item, index) => (
            <div className={`gallery-tile tile-${(index % 3) + 1}`} key={`${item.src}-${index}`}>
              <Image src={item.src} alt={item.alt} fill sizes="33vw" />
            </div>
         ))}
        </div>
      </div>
    </section>
  );
}
