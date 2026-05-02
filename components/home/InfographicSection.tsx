import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icon";
import { FadeIn } from "@/components/Motion";

export function InfographicSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="lg:sticky lg:top-28">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-service">Homeowner guide</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-navy sm:text-5xl">
            Know what is working before you decide what to fix.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            The infographic breaks down the cooling cycle, common weak points, and why an older
            system can keep running while costing more to operate.
          </p>
          <Link
            href="#lead-form"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(8,43,69,0.22)] transition hover:-translate-y-0.5 hover:bg-service focus:focus-ring"
          >
            Check My AC Now <ArrowIcon />
          </Link>
        </FadeIn>
        <FadeIn delay={0.08} className="overflow-hidden rounded-[2rem] border border-softborder bg-white shadow-[0_28px_90px_rgba(8,43,69,0.14)]">
          <Image
            src="/images/home-air-conditioning-system-illustration.jpg"
            alt="Infographic explaining how a home air-conditioning system works and what can go wrong"
            width={1054}
            height={1492}
            sizes="(min-width: 1024px) 620px, 100vw"
            className="h-auto w-full"
          />
        </FadeIn>
      </div>
    </section>
  );
}
