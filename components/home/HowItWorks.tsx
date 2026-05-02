import { BoltIcon, PhoneIcon, RouteIcon } from "@/components/Icon";
import { StaggerGroup, StaggerItem } from "@/components/Motion";

const steps = [
  {
    title: "Tell us the issue",
    copy: "Share your ZIP code, cooling problem, and timing so the request is clear from the start.",
    Icon: BoltIcon
  },
  {
    title: "We route the request",
    copy: "ACFix organizes the referral details for local HVAC partner coverage where available.",
    Icon: RouteIcon
  },
  {
    title: "A local provider contacts you",
    copy: "An independent local provider may follow up to discuss scheduling, pricing, and service options.",
    Icon: PhoneIcon
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#eaf7ff_100%)]" />
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black leading-tight text-navy sm:text-5xl">How ACFix works</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            A simple intake flow built to move homeowners from AC stress to a local provider conversation.
          </p>
        </div>
        <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(({ title, copy, Icon }, index) => (
            <StaggerItem
              key={title}
              className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/90 p-6 shadow-[0_18px_52px_rgba(8,43,69,0.1)] backdrop-blur"
            >
              <div className="absolute right-5 top-4 text-6xl font-black leading-none text-cold">{index + 1}</div>
              <div className="relative inline-grid h-14 w-14 place-items-center rounded-2xl bg-service text-white shadow-[0_14px_30px_rgba(11,92,173,0.22)]">
                <Icon />
              </div>
              <h3 className="relative mt-7 text-2xl font-black text-navy">{title}</h3>
              <p className="relative mt-3 leading-7 text-slate-700">{copy}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
