import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ACFix.com privacy policy for lead intake and referral requests.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <main className="section-shell py-12">
      <article className="mx-auto max-w-3xl rounded border border-softborder bg-white p-6">
        <h1 className="text-4xl font-black text-navy">Privacy Policy</h1>
        <div className="mt-6 grid gap-5 leading-8 text-slate-700">
          <p>
            ACFix respects your privacy. This policy explains what information we collect, how we
            use it, and how it may be shared when you request an HVAC referral.
          </p>
          <p>
            We may collect name, phone number, email address, ZIP code, city, HVAC issue details,
            form submissions, consent records, device/browser analytics, and communications.
          </p>
          <p>
            ACFix may share submitted lead information with independent HVAC partner contractors for
            the purpose of responding to the homeowner&apos;s request. Once a request is shared, the
            partner contractor may contact the homeowner directly.
          </p>
          <p>
            The current build stores submissions in a local JSON mock backend for development.
            Production storage, deletion workflows, notification systems, and analytics providers
            should be reviewed before launch.
          </p>
        </div>
      </article>
    </main>
  );
}
