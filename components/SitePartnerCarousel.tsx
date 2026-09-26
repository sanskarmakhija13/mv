"use client";

import { usePathname } from "next/navigation";
import { PartnerCarousel } from "@/components/PartnerCarousel";

export function SitePartnerCarousel() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <PartnerCarousel />;
}
