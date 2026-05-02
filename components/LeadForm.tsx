"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type LeadFormProps = {
  city?: string;
  source?: string;
  title?: string;
  submitLabel?: string;
  elevated?: boolean;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const issueChoices = [
  "AC blowing warm air",
  "AC not turning on",
  "Strange noise",
  "Leaking water",
  "Frozen unit",
  "Maintenance/tune-up",
  "Other"
];

const urgencyChoices = ["Emergency today", "This week", "Just looking for estimate"];

export function LeadForm({
  city = "Port St. Lucie",
  source = "website",
  title = "Check My AC Now",
  submitLabel = "Get Help Now",
  elevated = false
}: LeadFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [urgency, setUrgency] = useState(urgencyChoices[0]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      zip: String(formData.get("zip") || ""),
      city: String(formData.get("city") || city),
      urgency,
      issue: String(formData.get("issue") || ""),
      notes: String(formData.get("notes") || ""),
      consent: formData.get("consent") === "on",
      source,
      trackingSource: String(formData.get("trackingSource") || "callrail_twilio_placeholder"),
      pagePath: window.location.pathname
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      trackEvent("form_submit", { city: payload.city, source, urgency: payload.urgency });
      setState("success");
      setMessage(
        "Thanks. Your request has been received. If a local partner is available for your area and issue, they may contact you directly."
      );
      form.reset();
      setUrgency(urgencyChoices[0]);
    } catch {
      setState("error");
      setMessage("Something did not go through. Please check your contact details and try again.");
    }
  }

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      className={`grid gap-4 rounded-[1.75rem] border border-white/80 bg-white/95 p-5 backdrop-blur-xl ${
        elevated ? "shadow-[0_28px_80px_rgba(8,43,69,0.18)]" : "shadow-soft"
      }`}
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-service">Free referral request</p>
        <h2 className="mt-2 text-2xl font-black text-navy">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Tell us what is going on. ACFix will use your details to help route your request to a local HVAC partner.
        </p>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Name
        <input
          name="name"
          required
          className="min-h-12 rounded-xl border border-softborder bg-white px-3 font-normal focus:focus-ring"
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Phone
        <input
          name="phone"
          required
          type="tel"
          className="min-h-12 rounded-xl border border-softborder bg-white px-3 font-normal focus:focus-ring"
          autoComplete="tel"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Zip code
        <input
          name="zip"
          required
          inputMode="numeric"
          className="min-h-12 rounded-xl border border-softborder bg-white px-3 font-normal focus:focus-ring"
          autoComplete="postal-code"
        />
      </label>
      <input type="hidden" name="email" value="" />
      <input type="hidden" name="city" value={city} />
      <label className="grid gap-2 text-sm font-bold">
        AC issue
        <select name="issue" required className="min-h-12 rounded-xl border border-softborder bg-white px-3 font-normal focus:focus-ring">
          {issueChoices.map((choice) => (
            <option key={choice}>{choice}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Urgency
        <select
          name="urgencyDisplay"
          value={urgency}
          onChange={(event) => setUrgency(event.target.value)}
          className="min-h-12 rounded-xl border border-softborder bg-white px-3 font-normal focus:focus-ring"
        >
          {urgencyChoices.map((choice) => (
            <option key={choice}>{choice}</option>
          ))}
        </select>
      </label>
      <input type="hidden" name="notes" value="" />
      <label className="flex gap-3 rounded-2xl bg-cold/70 p-3 text-sm leading-6 text-slate-700">
        <input name="consent" required type="checkbox" className="mt-1 h-5 w-5 accent-service focus:focus-ring" />
        <span>By submitting, you agree to be contacted by ACFix and/or local HVAC partners about your request.</span>
      </label>
      <input type="hidden" name="trackingSource" value="callrail_twilio_placeholder" />
      <button
        type="submit"
        disabled={state === "submitting"}
        aria-label={submitLabel}
        className="min-h-12 rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(255,107,61,0.28)] transition hover:-translate-y-0.5 hover:bg-service hover:shadow-[0_22px_54px_rgba(11,92,173,0.24)] focus:focus-ring disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : submitLabel}
      </button>
      <p className="text-xs font-semibold leading-5 text-slate-600">
        ACFix is a referral service, not an HVAC contractor. Partner availability, pricing, and
        service terms are handled by independent local HVAC partners.
      </p>
      {message ? (
        <p className={`text-sm font-semibold ${state === "error" ? "text-red-700" : "text-service"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
