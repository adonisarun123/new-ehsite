"use server";

import { leadSchema, type LeadInput } from "./schema";
import type { SubmitResult } from "./types";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

/**
 * Server action: validate + persist a lead.
 * Writes to Supabase `leads` when configured; otherwise logs and succeeds so the
 * UX works in preview. Never exposes secrets to the client.
 */
export async function submitLead(input: LeadInput): Promise<SubmitResult> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the form and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  // Honeypot triggered — pretend success, drop silently.
  if (data.website) {
    return { ok: true, message: "Thank you. Our team will contact you soon." };
  }

  const { website: _hp, ...record } = data;

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    // Preview mode without Supabase configured.
    console.info("[lead] (no Supabase configured) received:", {
      name: record.name,
      service: record.service_interest,
      city: record.city,
    });
    return {
      ok: true,
      message: "Thank you. Our team will call you to understand your requirement.",
    };
  }

  const { error } = await supabase.from("leads").insert({
    lead_type: record.lead_type,
    service_interest: record.service_interest,
    care_condition: record.care_condition || null,
    care_urgency: record.care_urgency || null,
    patient_age: record.patient_age || null,
    patient_gender: record.patient_gender || null,
    city: record.city,
    locality: record.locality || null,
    name: record.name,
    phone: record.phone,
    email: record.email || null,
    preferred_contact_method: record.preferred_contact_method || null,
    message: record.message || null,
    utm_source: record.utm_source || null,
    utm_medium: record.utm_medium || null,
    utm_campaign: record.utm_campaign || null,
    utm_term: record.utm_term || null,
    utm_content: record.utm_content || null,
    landing_page: record.landing_page || null,
    referrer: record.referrer || null,
    status: "new",
  });

  if (error) {
    console.error("[lead] insert error:", error.message);
    return {
      ok: false,
      message: "Something went wrong saving your request. Please call or WhatsApp us.",
    };
  }

  return {
    ok: true,
    message: "Thank you. Our team will call you to understand your requirement.",
  };
}
