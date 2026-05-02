"use client";

import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/src/data/site";

export function CallButton({ location = "site", label }: { location?: string; label?: string }) {
  return (
    <a
      href={`tel:${siteConfig.phoneHref}`}
      onClick={() => trackEvent("call_button_click", { location })}
      aria-label={label ?? `Call ACFix at ${siteConfig.phone}`}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-black tabular-nums text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-service focus:focus-ring"
    >
      {label ?? `Call ${siteConfig.phone}`}
    </a>
  );
}
