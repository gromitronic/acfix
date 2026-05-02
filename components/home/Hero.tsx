import Image from "next/image";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { HeroMotion } from "@/components/Motion";
import { TrustStrip } from "./TrustStrip";
import { LeadForm } from "@/components/LeadForm";
import { CityConfig } from "@/src/data/cities";

export function Hero({ city }: { city: CityConfig }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(31,191,208,0.22),transparent_28rem),radial-gradient(circle_at_86%_16%,rgba(255,107,61,0.16),transparent_22rem)]" />
      <div className="airflow-pattern absolute inset-0 -z-10 opacity-70" />
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1fr_430px] lg:py-20">
        <div className="flex flex-col justify-center">
          <HeroMotion>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-navy sm:text-7xl">
              Fast AC Repair Help Near You
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              ACFix connects homeowners with local HVAC professionals for repair, tune-ups, and
              replacement guidance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#lead-form"
                aria-label="Check My AC Now"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(255,107,61,0.28)] transition hover:-translate-y-0.5 hover:bg-service hover:shadow-[0_22px_54px_rgba(11,92,173,0.24)] focus:focus-ring"
              >
                Check My AC Now
              </Link>
              <CallButton location="home_hero" label="Call Now" />
            </div>
          </HeroMotion>
          <div className="mt-8">
            <TrustStrip />
          </div>
          <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur sm:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-44 overflow-hidden rounded-[1.25rem]">
              <Image
                src="/acfix-logo.png"
                alt="ACFix logo"
                fill
                sizes="(min-width: 1024px) 280px, 100vw"
                className="object-contain p-5"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-service">Built for local speed</p>
              <p className="mt-2 leading-7 text-slate-700">
                Start in Port St. Lucie, route across the Treasure Coast and Palm Beach corridor,
                and keep every request referral-safe.
              </p>
            </div>
          </div>
        </div>
        <HeroMotion className="lg:pt-10">
          <LeadForm city={city.city} source="home" title="Check My AC Now" submitLabel="Get Help Now" elevated />
        </HeroMotion>
      </div>
    </section>
  );
}
