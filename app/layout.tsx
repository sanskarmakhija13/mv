import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./stats-five.css";
import "./stats-overrides.css";
import "./hero-overrides.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Manfest-Varchasva | IIM Lucknow",
    template: "%s | Manfest-Varchasva",
  },
  description:
    "Manfest-Varchasva, IIM Lucknow's annual business, cultural and sports festival.",
  icons: {
    icon: "/mv-logo.svg",
    shortcut: "/mv-logo.svg",
    apple: "/mv-logo.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
