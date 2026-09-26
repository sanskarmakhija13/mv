"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { partnerLogos } from "@/lib/content";

function getPerPage() {
  if (typeof window === "undefined") return 5;
  if (window.innerWidth <= 560) return 2;
  if (window.innerWidth <= 900) return 3;
  return 5;
}

export function PartnerCarousel() {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => setPerPage(getPerPage());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < partnerLogos.length; i += perPage) {
      result.push(partnerLogos.slice(i, i + perPage));
    }
    return result;
  }, [perPage]);

  useEffect(() => {
    setPage(0);
  }, [perPage]);

  useEffect(() => {
    if (paused || pages.length <= 1) return;
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pages.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, pages.length]);

  return (
    <section className="global-partners" aria-label="Our partners">
      <div className="page-shell">
        <div className="global-partners-heading">
          <div>
            <div className="eyebrow">BACKED BY</div>
            <h2>Our <span>Partners</span></h2>
          </div>
          <p>Organisations that help power Manfest-Varchasva.</p>
        </div>

        <div
          className="global-partners-viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="global-partners-track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((group, groupIndex) => (
              <div
                className="global-partners-page"
                key={groupIndex}
                style={{ gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))` }}
              >
                {group.map((partner) => (
                  <div className="global-partner-logo" key={partner.name}>
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={180}
                      height={90}
                      sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 18vw"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {pages.length > 1 && (
          <div className="global-partners-dots" aria-label="Partner carousel pages">
            {pages.map((_, index) => (
              <button
                type="button"
                key={index}
                className={index === page ? "is-active" : ""}
                onClick={() => setPage(index)}
                aria-label={`Show partner logos ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
