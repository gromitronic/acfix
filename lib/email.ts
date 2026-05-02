import { Resend } from "resend";
import { LeadRecord, listVendors } from "@/lib/leads";

type NotificationResult = {
  status: "sent" | "skipped" | "failed";
  ownerRecipients: string[];
  vendorRecipients: string[];
  resendId?: string;
  reason?: string;
};

type VendorRecord = {
  email?: string | null;
  business_name?: string | null;
};

const fallbackFrom = "ACFix Leads <onboarding@resend.dev>";

function configuredRecipients() {
  const ownerEmail = process.env.ACFIX_OWNER_EMAIL || process.env.OWNER_NOTIFICATION_EMAIL;
  const directVendorEmail = process.env.ACFIX_VENDOR_LEAD_EMAIL || process.env.ACFIX_DEFAULT_VENDOR_EMAIL;

  return {
    ownerEmail,
    directVendorEmail
  };
}

function cleanEmailList(values: Array<string | null | undefined>) {
  return Array.from(new Set(values.map((value) => value?.trim()).filter(Boolean) as string[]));
}

function leadCreatedAt(lead: LeadRecord) {
  return lead.created_at || lead.createdAt || new Date().toISOString();
}

function formatLeadText(lead: LeadRecord) {
  return [
    `New ACFix lead: ${lead.name || "Unknown homeowner"}`,
    "",
    `Phone: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email || "Not provided"}`,
    `City: ${lead.city || "Not provided"}`,
    `ZIP: ${lead.zip || "Not provided"}`,
    `Issue: ${lead.issue || "Not provided"}`,
    `Urgency: ${lead.urgency || "Not provided"}`,
    `Page: ${lead.page_path || "Not tracked"}`,
    `Source: ${lead.source || "website"}`,
    `Submitted: ${leadCreatedAt(lead)}`,
    "",
    "Referral disclosure: ACFix is a referral service and does not directly perform HVAC repairs. Services are provided by independent local HVAC companies."
  ].join("\n");
}

function formatLeadHtml(lead: LeadRecord) {
  const rows = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "Not provided"],
    ["City", lead.city],
    ["ZIP", lead.zip],
    ["Issue", lead.issue],
    ["Urgency", lead.urgency],
    ["Page", lead.page_path || "Not tracked"],
    ["Source", lead.source || "website"],
    ["Submitted", leadCreatedAt(lead)]
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; background: #f8fafc; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #dbeafe; border-radius: 16px; overflow: hidden;">
        <div style="background: #0f3b63; color: white; padding: 24px;">
          <p style="margin: 0 0 6px; color: #bfdbfe; font-size: 13px; text-transform: uppercase; letter-spacing: .08em;">ACFix lead alert</p>
          <h1 style="margin: 0; font-size: 24px;">New AC repair request</h1>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              ${rows
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; width: 130px;">${label}</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700;">${value || "Not provided"}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
          <p style="margin: 22px 0 0; color: #475569; line-height: 1.6;">
            ACFix is a referral service and does not directly perform HVAC repairs. Services are provided by independent local HVAC companies.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function sendLeadNotification(lead: LeadRecord): Promise<NotificationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const { ownerEmail, directVendorEmail } = configuredRecipients();

  if (!apiKey) {
    return {
      status: "skipped",
      ownerRecipients: cleanEmailList([ownerEmail]),
      vendorRecipients: cleanEmailList([directVendorEmail]),
      reason: "RESEND_API_KEY is not configured."
    };
  }

  let vendorEmails = cleanEmailList([directVendorEmail]);

  try {
    const vendors = await listVendors();
    vendorEmails = cleanEmailList([
      directVendorEmail,
      ...((vendors.data as VendorRecord[]).map((vendor) => vendor.email) || [])
    ]);
  } catch {
    vendorEmails = cleanEmailList([directVendorEmail]);
  }

  const ownerRecipients = cleanEmailList([ownerEmail]);
  const allRecipients = cleanEmailList([...ownerRecipients, ...vendorEmails]);

  if (allRecipients.length === 0) {
    return {
      status: "skipped",
      ownerRecipients,
      vendorRecipients: vendorEmails,
      reason: "No owner or vendor recipient email is configured."
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: process.env.ACFIX_EMAIL_FROM || fallbackFrom,
      to: allRecipients,
      replyTo: ownerEmail || undefined,
      subject: `New ACFix lead: ${lead.city || "Florida"} - ${lead.urgency || "AC help requested"}`,
      text: formatLeadText(lead),
      html: formatLeadHtml(lead)
    });

    if (error) {
      return {
        status: "failed",
        ownerRecipients,
        vendorRecipients: vendorEmails,
        reason: error.message
      };
    }

    return {
      status: "sent",
      ownerRecipients,
      vendorRecipients: vendorEmails,
      resendId: data?.id
    };
  } catch (error) {
    return {
      status: "failed",
      ownerRecipients,
      vendorRecipients: vendorEmails,
      reason: error instanceof Error ? error.message : "Resend notification failed."
    };
  }
}
