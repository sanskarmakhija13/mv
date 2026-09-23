import { SectionTitle } from "@/components/SectionTitle";

export const metadata = { title: "Workshops" };

const workshops = [
  {
    title: "Dance Workshop",
    copy: "A workshop format listed on the current Manfest-Varchasva website.",
  },
  {
    title: "Stock Market Trading Workshop",
    copy: "A practical workshop format listed on the current website.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <section className="subhero workshops-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">LEARN BY DOING</div>
          <h1>Workshops</h1>
          <p>Focused sessions designed to turn curiosity into practice.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell">
          <SectionTitle eyebrow="SESSIONS" title="Featured" accent="Workshops" />
          <div className="event-grid">
            {workshops.map((workshop) => (
              <article className="event-card static-card" key={workshop.title}>
                <span>Workshop</span>
                <h3>{workshop.title}</h3>
                <p>{workshop.copy}</p>
                <b>Details can be updated centrally in content.</b>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
