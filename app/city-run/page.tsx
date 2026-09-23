import { SectionTitle } from "@/components/SectionTitle";

export const metadata = { title: "Lucknow City Run" };

export default function CityRunPage() {
  return (
    <>
      <section className="subhero cityrun-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">COMMUNITY • MOVEMENT • LUCKNOW</div>
          <h1>Lucknow City Run</h1>
          <p>One city. One morning. Thousands moving together.</p>
        </div>
      </section>

      <section className="section section-ink">
        <div className="page-shell">
          <div className="archive-pill">2025 edition archive</div>
          <div className="cityrun-grid">
            <div>
              <SectionTitle
                eyebrow="THE RUN"
                title="Lucknow,"
                accent="it’s time to run."
              />
              <div className="prose-block">
                <p>
                  The 2025 Lucknow City Run was held at Lohia Park / Gomti Riverfront,
                  with competitive and fun-run formats for the city.
                </p>
                <p>
                  This page keeps the previous edition visible without presenting old
                  registration links as active.
                </p>
              </div>
            </div>

            <div className="info-stack">
              <div className="info-card"><span>Date</span><strong>2 February 2025</strong></div>
              <div className="info-card"><span>Flag off</span><strong>6:00 AM</strong></div>
              <div className="info-card"><span>Venue</span><strong>Lohia Park / Gomti Riverfront</strong></div>
              <div className="info-card"><span>Formats</span><strong>5K Women • 10K Open • 5K Fun Run</strong></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
