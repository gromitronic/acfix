"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type PortalLead = {
  id: string;
  created_at?: string;
  createdAt?: string;
  status?: string;
  source?: string;
  name?: string;
  phone?: string;
  email?: string | null;
  zip?: string;
  city?: string;
  issue?: string;
  urgency?: string;
  notes?: string | null;
};

type PortalVendor = {
  id: string;
  business_name?: string;
  contact_name?: string | null;
  email?: string;
  phone?: string | null;
  status?: string;
};

type PortalState = "idle" | "loading" | "ready" | "error";

function leadDate(lead: PortalLead) {
  const value = lead.created_at || lead.createdAt;
  return value ? new Date(value).toLocaleString() : "Not recorded";
}

function vendorMailto(lead: PortalLead, vendor?: PortalVendor) {
  if (!vendor?.email) {
    return "";
  }

  const subject = `ACFix lead: ${lead.issue || "AC request"} in ${lead.city || "Florida"} ${lead.zip || ""}`.trim();
  const body = [
    `New ACFix lead`,
    ``,
    `Name: ${lead.name || ""}`,
    `Phone: ${lead.phone || ""}`,
    `Email: ${lead.email || ""}`,
    `City/ZIP: ${lead.city || ""} ${lead.zip || ""}`.trim(),
    `Issue: ${lead.issue || ""}`,
    `Urgency: ${lead.urgency || ""}`,
    `Notes: ${lead.notes || ""}`,
    ``,
    `ACFix is a referral service. Please contact the homeowner directly about scheduling, pricing, and service terms.`
  ].join("\n");

  return `mailto:${vendor.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function PortalClient() {
  const [token, setToken] = useState("");
  const [storage, setStorage] = useState<"supabase" | "json" | null>(null);
  const [state, setState] = useState<PortalState>("idle");
  const [message, setMessage] = useState("");
  const [leads, setLeads] = useState<PortalLead[]>([]);
  const [vendors, setVendors] = useState<PortalVendor[]>([]);

  const primaryVendor = useMemo(() => vendors[0], [vendors]);

  async function loadPortal(currentToken: string) {
    setState("loading");
    setMessage("");

    try {
      const headers = { "x-acfix-portal-token": currentToken };
      const [leadsResponse, vendorsResponse] = await Promise.all([
        fetch("/api/portal/leads", { headers, cache: "no-store" }),
        fetch("/api/portal/vendors", { headers, cache: "no-store" })
      ]);

      if (!leadsResponse.ok || !vendorsResponse.ok) {
        throw new Error("Portal request failed");
      }

      const leadsJson = (await leadsResponse.json()) as { leads: PortalLead[]; storage: "supabase" | "json" };
      const vendorsJson = (await vendorsResponse.json()) as { vendors: PortalVendor[]; storage: "supabase" | "json" };

      setLeads(leadsJson.leads);
      setVendors(vendorsJson.vendors);
      setStorage(leadsJson.storage || vendorsJson.storage);
      setState("ready");
      window.localStorage.setItem("acfix_portal_token", currentToken);
    } catch {
      setState("error");
      setMessage("Could not load the portal. Check the portal token and Supabase environment variables.");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void loadPortal(token);
  }

  useEffect(() => {
    const savedToken = window.localStorage.getItem("acfix_portal_token");
    if (savedToken) {
      setToken(savedToken);
      void loadPortal(savedToken);
    }
  }, []);

  return (
    <div className="grid gap-8">
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-[1.5rem] border border-softborder bg-white p-5 shadow-sm md:grid-cols-[1fr_auto] md:items-end">
        <label className="grid gap-2 text-sm font-bold text-navy">
          Portal token
          <input
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className="min-h-12 rounded-xl border border-softborder px-3 font-normal focus:focus-ring"
            placeholder="Set ACFIX_PORTAL_TOKEN in production"
            required
          />
        </label>
        <button
          type="submit"
          className="min-h-12 rounded-full bg-coral px-6 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,107,61,0.24)] transition hover:-translate-y-0.5 hover:bg-service focus:focus-ring"
        >
          {state === "loading" ? "Loading..." : "Open Portal"}
        </button>
      </form>

      {message ? <p className="rounded-2xl border border-softborder bg-white p-4 text-sm font-bold text-red-700">{message}</p> : null}

      {state === "ready" ? (
        <div className="grid gap-6">
          <div className="grid gap-4 rounded-[1.5rem] border border-softborder bg-white p-5 shadow-sm md:grid-cols-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-service">Storage</p>
              <p className="mt-2 text-2xl font-black text-navy">{storage === "supabase" ? "Supabase" : "Local JSON"}</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-service">Leads</p>
              <p className="mt-2 text-2xl font-black text-navy">{leads.length}</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-service">Active Vendors</p>
              <p className="mt-2 text-2xl font-black text-navy">{vendors.length}</p>
            </div>
          </div>

          <section className="overflow-hidden rounded-[1.5rem] border border-softborder bg-white shadow-sm">
            <div className="border-b border-softborder p-5">
              <h2 className="text-2xl font-black text-navy">Incoming Leads</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use this for early manual forwarding. The email button opens a prefilled message for the first active vendor.
              </p>
            </div>
            <div className="grid divide-y divide-softborder">
              {leads.length ? (
                leads.map((lead) => (
                  <article key={lead.id} className="grid gap-4 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em]">
                        <span className="rounded-full bg-cold px-3 py-1 text-service">{lead.status || "new"}</span>
                        <span className="rounded-full bg-mist px-3 py-1 text-slate-600">{lead.urgency || "No urgency"}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-black text-navy">{lead.name || "Unnamed lead"}</h3>
                      <p className="mt-2 leading-7 text-slate-700">
                        {lead.issue || "No issue"} in {lead.city || "Unknown city"} {lead.zip || ""}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {lead.phone || "No phone"} {lead.email ? `· ${lead.email}` : ""} · {leadDate(lead)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                      {primaryVendor?.email ? (
                        <a
                          href={vendorMailto(lead, primaryVendor)}
                          className="rounded-full bg-navy px-5 py-3 text-center text-sm font-black text-white transition hover:bg-service focus:focus-ring"
                        >
                          Email Vendor
                        </a>
                      ) : null}
                      <a
                        href={`tel:${lead.phone || ""}`}
                        className="rounded-full border border-service/30 bg-white px-5 py-3 text-center text-sm font-black text-service transition hover:border-service focus:focus-ring"
                      >
                        Call Lead
                      </a>
                    </div>
                  </article>
                ))
              ) : (
                <p className="p-5 leading-7 text-slate-700">No leads yet.</p>
              )}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
