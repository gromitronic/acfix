import Link from "next/link";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/Motion";
import { cities } from "@/src/data/cities";
import { siteConfig } from "@/src/data/site";

export function LocalSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <FadeIn className="grid gap-8 rounded-[2rem] border border-softborder bg-[linear-gradient(135deg,#082b45_0%,#0b5cad_55%,#1fbfd0_120%)] p-6 text-white shadow-[0_30px_90px_rgba(8,43,69,0.22)] sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Starting in Port St. Lucie, built for Florida homeowners.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cold">
              ACFix starts with Port St. Lucie and the broader Treasure Coast, then expands across
              Palm Beach County where many HVAC vendors already cover the same summer heat,
              humidity, and fast-response needs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {siteConfig.coverageCounties.map((county) => (
              <div key={county} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="font-black">{county}</p>
                <p className="mt-1 text-sm leading-6 text-cold">Partner availability varies by ZIP code.</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-3xl font-black text-navy">Local referral pages</h3>
            <p className="mt-3 max-w-2xl leading-7 text-slate-700">
              Focused pages help homeowners find AC repair help across St. Lucie, Martin, and Palm
              Beach counties without changing the intake flow.
            </p>
          </div>
          <Link href="/ac-repair-port-st-lucie" className="font-black text-service transition hover:text-navy">
            Start with Port St. Lucie
          </Link>
        </div>
        <StaggerGroup className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((area) => (
            <StaggerItem key={area.slug}>
              <Link
                href={`/${area.slug}`}
                className="block rounded-2xl border border-softborder bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-service hover:shadow-soft"
              >
                <p className="font-black text-navy">{area.city}</p>
                <p className="mt-1 text-sm text-slate-600">{area.county}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
