"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { CityConfig } from "@/src/data/cities";
import { CallButton } from "./CallButton";
import { LeadForm } from "./LeadForm";

export function CityLandingPage({ city }: { city: CityConfig }) {
  useEffect(() => {
    trackEvent("city_page_view", { city: city.city, slug: city.slug });
  }, [city.city, city.slug]);

  return (
    <main>
      <section className="section-shell grid gap-8 py-12 md:grid-cols-[1fr_420px] md:py-20">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-service">
            {city.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-navy sm:text-5xl">
            {city.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">{city.summary}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center rounded bg-service px-5 py-3 text-sm font-black text-white shadow-soft transition hover:bg-coral focus:focus-ring"
            >
              Request Help Now
            </a>
            <CallButton location={city.slug} label="Call Now" />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
            ACFix does not repair or install HVAC systems. We route homeowner requests to independent
            local HVAC partners where available.
          </p>
        </div>
        <div id="lead-form">
          <LeadForm city={city.city} source={city.slug} />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-navy">Common request reasons</h2>
            <div className="mt-6 grid gap-3">
              {city.concerns.map((concern) => (
                <div key={concern} className="rounded border border-softborder bg-mist p-4 font-bold">
                  {concern}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-navy">
              Serving requests across St. Lucie, Martin, and Palm Beach counties
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Most local HVAC vendors in the area cover all three counties. ACFix keeps the intake
              simple so homeowners can submit one request and be routed based on partner coverage
              and request details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {city.neighborhoods.map((neighborhood) => (
                <span key={neighborhood} className="rounded bg-cold px-4 py-2 text-sm font-bold text-service">
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <h2 className="text-3xl font-black text-navy">Referral questions</h2>
        <div className="mt-6 grid gap-4">
          {city.faqs.map((faq) => (
            <article key={faq.question} className="rounded border border-softborder bg-white p-5">
              <h3 className="text-lg font-black text-navy">{faq.question}</h3>
              <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
