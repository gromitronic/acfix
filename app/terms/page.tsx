import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "ACFix.com terms for referral and lead intake use.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <main className="section-shell py-12">
      <article className="mx-auto max-w-3xl rounded border border-softborder bg-white p-6">
        <h1 className="text-4xl font-black text-navy">Terms of Use</h1>
        <div className="mt-6 grid gap-5 leading-8 text-slate-700">
          <p>
            ACFix is a referral service only. We do not perform, supervise, warrant, or guarantee
            HVAC work.
          </p>
          <p>
            Partner contractors are independent businesses responsible for licensing, insurance,
            pricing, scheduling, service quality, warranties, and compliance.
          </p>
          <p>
            By submitting a form, users authorize ACFix to share submitted information with partner
            contractors and service providers for referral routing and follow-up.
          </p>
        </div>
      </article>
    </main>
  );
}
