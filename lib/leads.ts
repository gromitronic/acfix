import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  zip?: string;
  city?: string;
  urgency?: string;
  issue?: string;
  notes?: string;
  consent?: boolean;
  source?: string;
  trackingSource?: string;
  pagePath?: string;
};

export type LeadRecord = {
  id: string;
  project_tag?: string;
  created_at?: string;
  createdAt?: string;
  status?: string;
  source?: string;
  page_path?: string | null;
  tracking_source?: string | null;
  trackingSource?: string;
  name?: string;
  phone?: string;
  email?: string | null;
  zip?: string;
  city?: string;
  county?: string | null;
  state?: string;
  issue?: string;
  urgency?: string;
  notes?: string | null;
  consent?: boolean;
  consent_text?: string | null;
  assigned_vendor_id?: string | null;
  forwarded_at?: string | null;
  owner_notified_at?: string | null;
  internal_notes?: string | null;
};

type StorageResult<T> = {
  data: T;
  storage: "supabase" | "json";
};

const leadsFile = path.join(process.cwd(), "data", "leads.json");
const consentText = "By submitting, you agree to be contacted by ACFix and/or local HVAC partners about your request.";

function supabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return {
    restUrl: `${url.replace(/\/$/, "")}/rest/v1`,
    serviceKey
  };
}

function supabaseHeaders(serviceKey: string) {
  return {
    apikey: serviceKey,
    authorization: `Bearer ${serviceKey}`,
    "content-type": "application/json",
    prefer: "return=representation"
  };
}

async function readJsonLeads() {
  try {
    const contents = await readFile(leadsFile, "utf8");
    return JSON.parse(contents) as LeadRecord[];
  } catch {
    return [];
  }
}

async function writeJsonLead(lead: LeadRecord) {
  await mkdir(path.dirname(leadsFile), { recursive: true });
  const leads = await readJsonLeads();
  leads.push(lead);
  await writeFile(leadsFile, JSON.stringify(leads, null, 2));
}

function toSupabaseLead(payload: LeadPayload) {
  return {
    project_tag: "acfix-",
    status: "new",
    source: payload.source || "website",
    page_path: payload.pagePath || null,
    tracking_source: payload.trackingSource || "callrail_twilio_placeholder",
    name: payload.name,
    phone: payload.phone,
    email: payload.email || null,
    zip: payload.zip,
    city: payload.city,
    county: null,
    state: "FL",
    issue: payload.issue,
    urgency: payload.urgency || "Emergency today",
    notes: payload.notes || null,
    consent: Boolean(payload.consent),
    consent_text: consentText,
    internal_notes: null
  };
}

function toJsonLead(payload: LeadPayload): LeadRecord {
  const createdAt = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    project_tag: "acfix-",
    created_at: createdAt,
    createdAt,
    status: "new",
    source: payload.source || "website",
    page_path: payload.pagePath || null,
    tracking_source: payload.trackingSource || "callrail_twilio_placeholder",
    trackingSource: payload.trackingSource || "callrail_twilio_placeholder",
    name: payload.name,
    phone: payload.phone,
    email: payload.email || null,
    zip: payload.zip,
    city: payload.city,
    county: null,
    state: "FL",
    issue: payload.issue,
    urgency: payload.urgency || "Emergency today",
    notes: payload.notes || null,
    consent: Boolean(payload.consent),
    consent_text: consentText,
    notificationPlaceholder: {
      ownerEmailEnv: process.env.ACFIX_OWNER_EMAIL || process.env.OWNER_NOTIFICATION_EMAIL || null,
      vendorEmailEnv: process.env.ACFIX_VENDOR_LEAD_EMAIL || process.env.ACFIX_DEFAULT_VENDOR_EMAIL || null,
      status: process.env.RESEND_API_KEY
        ? "Resend notification is configured for API submissions."
        : "Resend notification skipped until RESEND_API_KEY is configured."
    },
    callTrackingPlaceholder: {
      provider: "CallRail or Twilio",
      trackingNumberEnv: process.env.CALLRAIL_OR_TWILIO_TRACKING_NUMBER || null
    }
  } as LeadRecord;
}

export async function createLeadEvent(leadId: string, eventType: string, eventNote: string, metadata: Record<string, unknown>) {
  const config = supabaseConfig();

  if (!config) {
    return;
  }

  await fetch(`${config.restUrl}/acfix_lead_events`, {
    method: "POST",
    headers: supabaseHeaders(config.serviceKey),
    body: JSON.stringify({
      project_tag: "acfix-",
      lead_id: leadId,
      event_type: eventType,
      event_note: eventNote,
      metadata
    })
  });
}

export async function createLead(payload: LeadPayload): Promise<StorageResult<LeadRecord>> {
  const config = supabaseConfig();

  if (!config) {
    const lead = toJsonLead(payload);
    await writeJsonLead(lead);
    return { data: lead, storage: "json" };
  }

  const response = await fetch(`${config.restUrl}/acfix_leads`, {
    method: "POST",
    headers: supabaseHeaders(config.serviceKey),
    body: JSON.stringify(toSupabaseLead(payload))
  });

  if (!response.ok) {
    throw new Error(`Supabase lead insert failed: ${response.status}`);
  }

  const [lead] = (await response.json()) as LeadRecord[];
  await createLeadEvent(lead.id, "lead_created", "Lead created from ACFix website form.", {
    source: payload.source || "website",
    trackingSource: payload.trackingSource || "callrail_twilio_placeholder"
  });

  return { data: lead, storage: "supabase" };
}

export async function listLeads(limit = 50): Promise<StorageResult<LeadRecord[]>> {
  const config = supabaseConfig();

  if (!config) {
    const leads = await readJsonLeads();
    return {
      data: leads
        .slice()
        .sort((a, b) => String(b.created_at || b.createdAt).localeCompare(String(a.created_at || a.createdAt)))
        .slice(0, limit),
      storage: "json"
    };
  }

  const response = await fetch(
    `${config.restUrl}/acfix_leads?select=*&order=created_at.desc&limit=${limit}`,
    {
      headers: supabaseHeaders(config.serviceKey),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase lead list failed: ${response.status}`);
  }

  return { data: (await response.json()) as LeadRecord[], storage: "supabase" };
}

export async function listVendors() {
  const config = supabaseConfig();

  if (!config) {
    const fallbackEmail = process.env.ACFIX_DEFAULT_VENDOR_EMAIL;
    return {
      data: fallbackEmail
        ? [
            {
              id: "env-default-vendor",
              business_name: process.env.ACFIX_DEFAULT_VENDOR_NAME || "Default vendor",
              contact_name: null,
              email: fallbackEmail,
              status: "active"
            }
          ]
        : [],
      storage: "json" as const
    };
  }

  const response = await fetch(
    `${config.restUrl}/acfix_vendors?select=id,business_name,contact_name,email,phone,status,service_counties,service_cities,service_zips&status=eq.active&order=business_name.asc`,
    {
      headers: supabaseHeaders(config.serviceKey),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase vendor list failed: ${response.status}`);
  }

  return { data: (await response.json()) as unknown[], storage: "supabase" as const };
}
