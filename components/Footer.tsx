import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid page-shell">
        <div>
          <div className="footer-brand">MANFEST-VARCHASVA</div>
          <p>
            IIM Lucknow&apos;s annual business, cultural and sports festival.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/events">Events</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/gallery">Gallery</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.address}</p>
        </div>
      </div>
      <div className="footer-bottom page-shell">
        <span>© 2026 Manfest-Varchasva</span>
        <span>Built for the MV Core Team</span>
      </div>
    </footer>
  );
}
