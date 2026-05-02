import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email";
import { createLead, createLeadEvent, LeadPayload } from "@/lib/leads";

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (!payload.name || !payload.phone || !payload.zip || !payload.city || !payload.issue || !payload.consent) {
    return NextResponse.json(
      { error: "Name, phone, ZIP code, city, issue, and consent are required." },
      { status: 400 }
    );
  }

  try {
    const result = await createLead(payload);
    const notification = await sendLeadNotification(result.data);

    try {
      await createLeadEvent(
        result.data.id,
        `email_${notification.status}`,
        notification.status === "sent"
          ? "Lead notification email sent through Resend."
          : notification.reason || "Lead notification email was not sent.",
        {
          ownerRecipients: notification.ownerRecipients,
          vendorRecipients: notification.vendorRecipients,
          resendId: notification.resendId || null
        }
      );
    } catch {
      // Lead creation should still succeed if event logging is temporarily unavailable.
    }

    return NextResponse.json({
      ok: true,
      leadId: result.data.id,
      storage: result.storage,
      notification: {
        status: notification.status,
        ownerRecipients: notification.ownerRecipients,
        vendorRecipients: notification.vendorRecipients,
        reason: notification.reason || null
      }
    });
  } catch {
    return NextResponse.json(
      { error: "Lead could not be saved. Please try again or call ACFix." },
      { status: 500 }
    );
  }
}
