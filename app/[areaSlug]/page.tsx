import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityLandingPage } from "@/components/CityLandingPage";
import { faqSchema, referralServiceSchema } from "@/lib/schema";
import { cities, getCityBySlug } from "@/src/data/cities";

type PageProps = {
  params: {
    areaSlug: string;
  };
};

export function generateStaticParams() {
  return cities
    .filter((city) => city.slug !== "ac-repair-port-st-lucie")
    .map((city) => ({ areaSlug: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.areaSlug);

  if (!city) {
    return {};
  }

  return {
    title: city.seoTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `/${city.slug}`
    }
  };
}

export default function AreaPage({ params }: PageProps) {
  const city = getCityBySlug(params.areaSlug);

  if (!city || city.slug === "ac-repair-port-st-lucie") {
    notFound();
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
