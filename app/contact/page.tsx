import type { Metadata } from "next";
import { CallButton } from "@/components/CallButton";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact ACFix.com",
  description:
    "Contact ACFix.com to submit an AC repair referral request for independent HVAC provider follow-up.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="section-shell grid gap-8 py-12 md:grid-cols-[1fr_420px]">
      <div>
        <h1 className="text-4xl font-black text-navy">Contact ACFix.com</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          Use the form to request a local HVAC match or call the tracking placeholder number. ACFix
          is a referral service, not an HVAC contractor.
        </p>
        <div className="mt-7">
          <CallButton location="contact" />
        </div>
      </div>
      <LeadForm source="contact" />
    </main>
  );
}
