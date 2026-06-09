"use client";

/** Tracked event names (spec §16.3). */
export type TrackEvent =
  | "lead_form_start"
  | "lead_form_submit"
  | "care_form_submit"
  | "helper_application_submit"
  | "partner_enquiry_submit"
  | "call_click"
  | "whatsapp_click"
  | "service_card_click"
  | "faq_expand"
  | "blog_cta_click";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Push a tracked event to GTM dataLayer / GA4.
 * Never include sensitive personal health details (spec §16.3).
 */
export function track(event: TrackEvent, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
