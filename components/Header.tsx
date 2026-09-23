import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Partners", "/partners"],
  ["City Run", "/city-run"],
  ["Events", "/events"],
  ["Workshops", "/workshops"],
  ["Gallery", "/gallery"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Manfest Varchasva home">
          <span className="brand-mark">MV</span>
          <span className="brand-copy">
            <strong>MANFEST</strong>
            <strong>VARCHASVA</strong>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-panel">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
