export type CityConfig = {
  slug: string;
  city: string;
  state: string;
  county: string;
  eyebrow: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  summary: string;
  neighborhoods: string[];
  concerns: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const defaultConcerns = [
  "Warm air from vents",
  "System cycling on and off",
  "Weak airflow in bedrooms",
  "Thermostat not responding",
  "High humidity inside the home",
  "Replacement quotes for older systems"
];

const defaultFaqs = [
  {
    question: "How quickly can someone contact me?",
    answer:
      "Response times depend on partner availability, location, demand, and request details. ACFix cannot guarantee same-day contact or appointment times."
  },
  {
    question: "Do you repair AC units directly?",
    answer:
      "No. ACFix is a referral service. We help connect homeowners with independent local HVAC partner contractors. ACFix does not perform HVAC repairs, installations, inspections, or maintenance."
  },
  {
    question: "Who performs the service?",
    answer:
      "HVAC service is performed by independent local partners, not ACFix. The partner contractor is responsible for licensing, estimates, scheduling, service, workmanship, warranties, and customer communication."
  },
  {
    question: "Can I request emergency AC repair?",
    answer:
      "Yes. You can mark the request as urgent. ACFix may route the request to local HVAC partners where available, but emergency availability is determined by the independent partner."
  },
  {
    question: "Is there a fee to request help?",
    answer:
      "ACFix does not currently charge homeowners to submit a referral request. Partner contractors may charge for diagnostics, service calls, repairs, maintenance, or installations."
  }
];

const sharedAreas = [
  "St. Lucie County",
  "Martin County",
  "Palm Beach County",
  "Port St. Lucie",
  "Fort Pierce",
  "Stuart",
  "Palm City",
  "Hobe Sound",
  "Jupiter",
  "Palm Beach Gardens",
  "West Palm Beach",
  "Boca Raton"
];

function makeArea({
  slug,
  city,
  county,
  summary,
  neighborhoods = sharedAreas
}: {
  slug: string;
  city: string;
  county: string;
  summary?: string;
  neighborhoods?: string[];
}): CityConfig {
  return {
    slug,
    city,
    state: "FL",
    county,
    eyebrow: `${city} HVAC Referral Service`,
    seoTitle: `AC Repair ${city}, FL | Fast Local HVAC Help | ACFix`,
    metaDescription:
      summary ||
      `Need AC help in ${city}? ACFix connects local homeowners with licensed HVAC partner contractors serving St. Lucie, Martin, and Palm Beach counties.`,
    headline: `AC Repair Help in ${city}, FL`,
    summary:
      summary ||
      `ACFix helps ${city} homeowners get connected with licensed local HVAC partners who commonly serve St. Lucie, Martin, and Palm Beach counties.`,
    neighborhoods,
    concerns: defaultConcerns,
    faqs: defaultFaqs
  };
}

export const cities: CityConfig[] = [
  {
    slug: "ac-repair-port-st-lucie",
    city: "Port St. Lucie",
    state: "FL",
    county: "St. Lucie County",
    eyebrow: "Port St. Lucie HVAC Referral Service",
    seoTitle: "AC Repair Port St. Lucie, FL | Fast Local HVAC Help | ACFix",
    metaDescription:
      "Need AC help in Port St. Lucie? ACFix connects local homeowners with licensed HVAC partner contractors serving St. Lucie, Martin, and Palm Beach counties.",
    headline: "AC Repair Help in Port St. Lucie, FL",
    summary:
      "ACFix helps Port St. Lucie homeowners get connected with licensed local HVAC partners who commonly serve St. Lucie, Martin, and Palm Beach counties.",
    neighborhoods: [
      "St. Lucie County",
      "Martin County",
      "Palm Beach County",
      "Tradition",
      "St. Lucie West",
      "Fort Pierce",
      "Stuart",
      "Palm City",
      "Hobe Sound",
      "Jupiter",
      "Palm Beach Gardens",
      "West Palm Beach",
      "Boca Raton"
    ],
    concerns: defaultConcerns,
    faqs: defaultFaqs
  },
  makeArea({
    slug: "ac-repair-fort-pierce",
    city: "Fort Pierce",
    county: "St. Lucie County"
  }),
  makeArea({
    slug: "ac-repair-stuart",
    city: "Stuart",
    county: "Martin County"
  }),
  makeArea({
    slug: "ac-repair-palm-city",
    city: "Palm City",
    county: "Martin County"
  }),
  makeArea({
    slug: "ac-repair-hobe-sound",
    city: "Hobe Sound",
    county: "Martin County"
  }),
  makeArea({
    slug: "ac-repair-jupiter",
    city: "Jupiter",
    county: "Palm Beach County"
  }),
  makeArea({
    slug: "ac-repair-palm-beach-gardens",
    city: "Palm Beach Gardens",
    county: "Palm Beach County"
  }),
  makeArea({
    slug: "ac-repair-west-palm-beach",
    city: "West Palm Beach",
    county: "Palm Beach County"
  }),
  makeArea({
    slug: "ac-repair-boca-raton",
    city: "Boca Raton",
    county: "Palm Beach County"
  }),
  makeArea({
    slug: "ac-repair-st-lucie-county",
    city: "St. Lucie County",
    county: "St. Lucie County",
    summary:
      "ACFix helps homeowners across St. Lucie County connect with licensed local HVAC partners for AC repair requests, tune-ups, system concerns, and replacement guidance."
  }),
  makeArea({
    slug: "ac-repair-martin-county",
    city: "Martin County",
    county: "Martin County",
    summary:
      "ACFix helps homeowners across Martin County connect with licensed local HVAC partners for AC repair requests, humidity issues, tune-ups, and system concerns."
  }),
  makeArea({
    slug: "ac-repair-palm-beach-county",
    city: "Palm Beach County",
    county: "Palm Beach County",
    summary:
      "ACFix helps homeowners across Palm Beach County connect with licensed local HVAC partners for AC repair requests, emergency service requests, tune-ups, and system concerns."
  })
];

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}
