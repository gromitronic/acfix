import { StaggerGroup, StaggerItem } from "@/components/Motion";

const trustItems = ["Fast response", "Local HVAC partners", "No obligation", "Port St. Lucie pilot area"];

export function TrustStrip() {
  return (
    <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {trustItems.map((item) => (
        <StaggerItem key={item} className="rounded-2xl border border-white/70 bg-white/78 p-4 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cold text-service">✓</span>
            <p className="font-black text-navy">{item}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
