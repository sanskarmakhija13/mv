import Image from "next/image";
import { galleryImages } from "@/lib/content";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <section className="subhero gallery-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">MV IN PICTURES</div>
          <h1>Moments that stayed.</h1>
          <p>Performances, speakers and memories across editions.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell masonry-grid">
          {galleryImages.map((item, index) => (
            <figure className={`masonry-item masonry-${(index % 4) + 1}`} key={`${item.src}-${index}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
              <figcaption>{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
