import { NextResponse } from "next/server";
import { listLeads } from "@/lib/leads";
import { isPortalAuthorized } from "@/lib/portalAuth";

export async function GET(request: Request) {
  if (!isPortalAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, storage } = await listLeads(100);
    return NextResponse.json({ leads: data, storage });
  } catch {
    return NextResponse.json({ error: "Leads could not be loaded." }, { status: 500 });
  }
}
