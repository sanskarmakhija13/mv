import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { partnerLogos } from "@/lib/content";

export const metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <>
      <section className="subhero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">OUR ECOSYSTEM</div>
          <h1>Partners who power the experience.</h1>
          <p>Past and recent partners represented on the current Manfest-Varchasva website.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-shell">
          <SectionTitle
            eyebrow="PARTNER WALL"
            title="Past"
            accent="Partners"
            description="A cleaner, consistent logo wall that works across desktop and mobile."
          />
          <div className="logo-grid logo-grid-large">
            {partnerLogos.map((partner) => (
              <div className="logo-card" key={partner.name}>
                <Image src={partner.image} alt={partner.name} width={210} height={110} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
