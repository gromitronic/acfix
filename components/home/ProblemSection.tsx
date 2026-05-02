import Link from "next/link";
import { CampaignVisual } from "@/components/CampaignVisual";
import { FadeIn } from "@/components/Motion";
import { ArrowIcon, BoltIcon } from "@/components/Icon";

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softborder to-transparent" />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <CampaignVisual
            tone="danger"
            label="Urgency"
            title="Failing systems get expensive fast"
            src="/images/rusty-air-conditioner-outdoor-summer.jpg"
          />
        </FadeIn>
        <FadeIn delay={0.08} className="max-w-2xl">
          <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-coral/10 text-coral">
            <BoltIcon />
          </div>
          <h2 className="mt-5 text-4xl font-black leading-tight text-navy sm:text-5xl">
            Don’t wait for your AC to fail on the hottest day of the year.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Florida heat is hard on older systems. If your unit is struggling, making noise,
            leaking, or blowing warm air, it may be time to have it checked.
          </p>
          <Link
            href="#lead-form"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(8,43,69,0.22)] transition hover:-translate-y-0.5 hover:bg-service focus:focus-ring"
          >
            Request AC Help <ArrowIcon />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
