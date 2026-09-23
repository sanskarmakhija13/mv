import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/content";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) notFound();

  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">{event.category}</div>
          <h1>{event.name}</h1>
          <p>{event.blurb}</p>
        </div>
      </section>

      <section className="section section-ink">
        <div className="page-shell detail-layout">
          <div>
            <h2>Event overview</h2>
            <p className="detail-lead">{event.blurb}</p>
            {event.details ? (
              <ul className="detail-list">
                {event.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            ) : (
              <div className="notice-card">
                The new site structure is ready. The MV team can add the latest event brief,
                dates, rulebook and registration link in <code>lib/content.ts</code>.
              </div>
            )}

            {event.prize ? <div className="prize-card"><span>Prize pool</span><strong>{event.prize}</strong></div> : null}
          </div>

          <aside className="detail-aside">
            <Link className="btn btn-primary" href="/events">All events</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
