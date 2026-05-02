import { CampaignVisual } from "@/components/CampaignVisual";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/Motion";
import { GaugeIcon, ThermostatIcon } from "@/components/Icon";

const costCards = [
  ["Higher power bills", "Older systems can run longer and work harder in humid Florida heat."],
  ["Weak cooling", "Rooms that never feel comfortable can point to airflow, age, or maintenance problems."],
  ["Breakdown risk", "A system that still runs may still be closer to a costly failure than it looks."]
];

export function CostSection() {
  return (
    <section id="repair-or-replace" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(253,186,49,0.16),transparent_24rem),linear-gradient(180deg,#f5f8fb_0%,#ffffff_100%)]" />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn className="max-w-2xl">
          <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-service">
            <GaugeIcon />
          </div>
          <h2 className="mt-5 text-4xl font-black leading-tight text-navy sm:text-5xl">
            This AC still works. That’s the problem.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            An older unit can keep running while quietly driving up your energy bill. A quick check
            can help you understand whether repair, maintenance, or replacement makes the most sense.
          </p>
          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-3">
            {costCards.map(([title, copy]) => (
              <StaggerItem key={title} className="rounded-[1.25rem] border border-white bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-cold text-service">
                  <ThermostatIcon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-black text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </FadeIn>
        <FadeIn delay={0.08}>
          <CampaignVisual
            tone="cost"
            label="Energy awareness"
            title="Running does not always mean efficient"
            src="/images/weathered-ac-unit-outdoor-setup.jpg"
          />
        </FadeIn>
      </div>
    </section>
  );
}
