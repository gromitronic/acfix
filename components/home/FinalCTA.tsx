import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { FadeIn } from "@/components/Motion";

export function FinalCTA() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <FadeIn className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_16%_18%,rgba(31,191,208,0.32),transparent_22rem),linear-gradient(135deg,#061f34_0%,#082b45_52%,#0b5cad_100%)] p-6 text-white shadow-[0_34px_100px_rgba(8,43,69,0.26)] sm:p-10">
          <div className="airflow-pattern absolute inset-0 opacity-20" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Don’t sweat the next breakdown.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-cold">
                Get the request started now so a local HVAC partner can follow up about your AC issue.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#lead-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(255,107,61,0.28)] transition hover:-translate-y-0.5 hover:bg-aqua focus:focus-ring"
              >
                Check My AC Now
              </Link>
              <CallButton location="final_cta" label="Call Now" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
