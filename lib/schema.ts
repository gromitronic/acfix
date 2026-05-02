import { CityConfig } from "@/src/data/cities";
import { BlogPost } from "@/src/data/blog";
import { siteConfig } from "@/src/data/site";

export function referralServiceSchema(city?: CityConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city ? `ACFix.com ${city.city} AC repair referral service` : "ACFix.com AC repair referral service",
    serviceType: "Air conditioning repair referral and lead intake",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: city
      ? [
          {
            "@type": city.city.includes("County") ? "AdministrativeArea" : "City",
            name: city.city,
            addressRegion: city.state
          },
          {
            "@type": "AdministrativeArea",
            name: city.county,
            addressRegion: city.state
          }
        ]
      : siteConfig.coverageCounties.map((county) => ({
          "@type": "AdministrativeArea",
          name: county,
          addressRegion: "FL"
        })),
    description:
      "ACFix is a referral and lead intake service that helps homeowners request introductions to independent HVAC partners. ACFix does not perform air conditioning repairs directly.",
    url: city ? `${siteConfig.url}/${city.slug}` : siteConfig.url
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    image: post.images.map((image) => image.alt)
  };
}
