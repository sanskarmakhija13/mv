import { SectionTitle } from "@/components/SectionTitle";
import { stats } from "@/lib/content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="subhero subhero-about">
        <div className="page-shell subhero-content">
          <div className="eyebrow">ABOUT MV</div>
          <h1>Where competition meets culture.</h1>
          <p>
            Manfest-Varchasva is IIM Lucknow&apos;s annual business, cultural and sports festival.
          </p>
        </div>
      </section>

      <section className="section section-ink">
        <div className="page-shell split-copy">
          <SectionTitle
            eyebrow="ONE FESTIVAL"
            title="Business. Culture."
            accent="Sport."
          />
          <div className="prose-block">
            <p>
              Across three days, the campus becomes a meeting ground for competitions,
              performances, speaker sessions, workshops and community-led experiences.
            </p>
            <p>
              The modern site is designed around the same idea: make the scale of MV easy to
              understand, while keeping events, people and visual memories at the centre.
            </p>
          </div>
        </div>

        <div className="page-shell stats-grid compact-stats">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
