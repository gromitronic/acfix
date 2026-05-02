import type { Metadata } from "next";
import { CityLandingPage } from "@/components/CityLandingPage";
import { faqSchema, referralServiceSchema } from "@/lib/schema";
import { getCityBySlug } from "@/src/data/cities";

const city = getCityBySlug("ac-repair-port-st-lucie");

export const metadata: Metadata = {
  title: city?.seoTitle || "AC Repair Port St. Lucie, FL | Fast Local HVAC Help | ACFix",
  description:
    city?.metaDescription ||
    "Need AC help in Port St. Lucie? ACFix connects local homeowners with licensed HVAC partner contractors serving St. Lucie, Martin, and Palm Beach counties.",
  alternates: {
    canonical: "/ac-repair-port-st-lucie"
  }
};

export default function PortStLuciePage() {
  if (!city) {
    return null;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(referralServiceSchema(city)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(city.faqs)) }}
      />
      <CityLandingPage city={city} />
    </>
  );
}
