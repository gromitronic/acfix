"use client";

type AnalyticsEvent = "form_submit" | "call_button_click" | "city_page_view";

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent("acfix_analytics", { detail: { event, payload } }));

  if (process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true") {
    console.info("[ACFix analytics]", event, payload);
  }
}
