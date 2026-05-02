import Link from "next/link";
import { CampaignVisual } from "@/components/CampaignVisual";
import { FadeIn } from "@/components/Motion";
import { ArrowIcon, ThermostatIcon } from "@/components/Icon";

export function SolutionSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <CampaignVisual
            tone="relief"
            label="Relief"
            title="A clearer next step for cooler rooms"
            src="/images/energy-efficient-air-conditioner-outdoor.jpg"
          />
        </FadeIn>
        <FadeIn delay={0.08} className="max-w-2xl">
          <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-aqua/20 text-service">
            <ThermostatIcon />
          </div>
          <h2 className="mt-5 text-4xl font-black leading-tight text-navy sm:text-5xl">
            Cool your home. Lower your stress.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Tell us what’s going on and we’ll help connect you with a local HVAC professional.
          </p>
          <Link
            href="#lead-form"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(255,107,61,0.28)] transition hover:-translate-y-0.5 hover:bg-service focus:focus-ring"
          >
            Get My Free AC Check <ArrowIcon />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
