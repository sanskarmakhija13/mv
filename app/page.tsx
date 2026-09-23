import {
  GalleryPreview,
  Headliners,
  Hero,
  Highlights,
  LeadersExpress,
  OverTheYears,
  PartnersPreview,
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Headliners />
      <LeadersExpress />
      <OverTheYears />
      <Highlights />
      <GalleryPreview />
      <PartnersPreview />
    </>
  );
}
