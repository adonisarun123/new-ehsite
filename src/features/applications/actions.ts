"use server";

import {
  helperApplicationSchema,
  partnerEnquirySchema,
  type HelperApplicationInput,
  type PartnerEnquiryInput,
} from "./schema";
import type { SubmitResult } from "@/features/leads/types";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function toArray(csv?: string): string[] | null {
  if (!csv) return null;
  const arr = csv
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
  return arr.length ? arr : null;
}

export async function submitHelperApplication(
  input: HelperApplicationInput
): Promise<SubmitResult> {
  const parsed = helperApplicationSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the form and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  const d = parsed.data;
  if (d.website) return { ok: true, message: "Thank you. We will contact you soon." };

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    console.info("[helper-application] (no Supabase) received:", { name: d.name, type: d.applicant_type });
    return { ok: true, message: "Thank you for applying. Our team will contact you about suitable jobs." };
  }

  const { error } = await supabase.from("helper_applications").insert({
    applicant_type: d.applicant_type,
    name: d.name,
    phone: d.phone,
    alternate_phone: d.alternate_phone || null,
    city: d.city,
    current_location: d.current_location || null,
    preferred_job_type: d.preferred_job_type || null,
    experience_years: d.experience_years,
    skills: toArray(d.skills),
    certifications: toArray(d.certifications),
    languages: toArray(d.languages),
    availability: d.availability || null,
    message: d.message || null,
    status: "new",
  });

  if (error) {
    console.error("[helper-application] insert error:", error.message);
    return { ok: false, message: "Something went wrong. Please call or WhatsApp us to apply." };
  }
  return { ok: true, message: "Thank you for applying. Our team will contact you about suitable jobs." };
}

export async function submitPartnerEnquiry(
  input: PartnerEnquiryInput
): Promise<SubmitResult> {
  const parsed = partnerEnquirySchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the form and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  const d = parsed.data;
  if (d.website) return { ok: true, message: "Thank you. We will be in touch." };

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    console.info("[partner-enquiry] (no Supabase) received:", { org: d.organisation, type: d.partner_type });
    return { ok: true, message: "Thank you. Our partnerships team will be in touch." };
  }

  const { error } = await supabase.from("partner_enquiries").insert({
    partner_type: d.partner_type,
    organisation: d.organisation,
    contact_name: d.contact_name,
    phone: d.phone,
    email: d.email || null,
    city: d.city || null,
    message: d.message || null,
    status: "new",
  });

  if (error) {
    console.error("[partner-enquiry] insert error:", error.message);
    return { ok: false, message: "Something went wrong. Please email or call us." };
  }
  return { ok: true, message: "Thank you. Our partnerships team will be in touch." };
}
