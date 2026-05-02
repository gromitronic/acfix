import { NextResponse } from "next/server";
import { listVendors } from "@/lib/leads";
import { isPortalAuthorized } from "@/lib/portalAuth";

export async function GET(request: Request) {
  if (!isPortalAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, storage } = await listVendors();
    return NextResponse.json({ vendors: data, storage });
  } catch {
    return NextResponse.json({ error: "Vendors could not be loaded." }, { status: 500 });
  }
}
