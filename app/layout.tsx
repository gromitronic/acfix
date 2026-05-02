import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ACFix | Get Matched With Local HVAC Help",
    template: "%s | ACFix.com"
  },
  description:
    "ACFix connects homeowners in St. Lucie, Martin, and Palm Beach counties with licensed local HVAC partners for air conditioning repair requests.",
  openGraph: {
    title: "ACFix.com",
    description:
      "Request a fast AC repair referral across St. Lucie, Martin, and Palm Beach counties from ACFix.com.",
    url: siteConfig.url,
    siteName: "ACFix.com",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
