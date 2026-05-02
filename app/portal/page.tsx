import type { Metadata } from "next";
import { PortalClient } from "@/components/PortalClient";

export const metadata: Metadata = {
  title: "ACFix Lead Portal",
  description: "Internal ACFix lead portal for reviewing incoming AC referral requests.",
  robots: {
    index: false,
    follow: false
  }
};

export default function PortalPage() {
  return (
    <main className="section-shell py-12">
      <div className="mb-8 max-w-3xl">
        <h1 className="text-4xl font-black text-navy sm:text-5xl">ACFix Lead Portal</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Review form submissions, confirm whether the site is writing to Supabase or local JSON,
          and manually forward early leads to your active HVAC vendor.
        </p>
      </div>
      <PortalClient />
    </main>
  );
}
