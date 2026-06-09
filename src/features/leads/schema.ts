import { z } from "zod";

const phoneRegex = /^[+]?[\d\s-]{7,15}$/;

/** Service options offered in lead forms (spec §16.1). */
export const SERVICE_OPTIONS = [
  "Elderly Care",
  "Dementia Care",
  "Palliative Care Support",
  "Patient Care",
  "Post-Operative Care",
  "Bedridden Patient Care",
  "Parkinson's Care",
  "Stroke Recovery Support",
  "Live-in Maid",
  "Full-Time Maid",
  "Nanny/Babysitter",
  "Cook",
  "Housekeeping",
  "Other",
] as const;

export const URGENCY_OPTIONS = [
  "Immediately",
  "Within 24–48 hours",
  "Within this week",
  "Just enquiring",
] as const;

export const CONTACT_METHODS = ["Phone call", "WhatsApp", "Either"] as const;

/** Tracking metadata captured client-side and posted with the lead (spec §16.2). */
const trackingSchema = z.object({
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  landing_page: z.string().optional(),
  referrer: z.string().optional(),
});

/** Honeypot field must be empty (basic spam protection). */
const honeypot = z.string().max(0, "Spam detected").optional().or(z.literal(""));

export const leadSchema = z
  .object({
    lead_type: z.enum(["customer", "caregiver", "helper", "partner"]).default("customer"),
    name: z.string().min(2, "Please enter your name").max(120),
    phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
    service_interest: z.string().min(1, "Please choose a service"),
    city: z.string().min(1, "Please enter your city").default("Bangalore"),
    locality: z.string().max(120).optional().or(z.literal("")),
    preferred_contact_method: z.enum(CONTACT_METHODS).optional(),
    // Care-specific (progressive disclosure)
    care_condition: z.string().max(160).optional().or(z.literal("")),
    care_urgency: z.enum(URGENCY_OPTIONS).optional(),
    patient_age: z.string().max(40).optional().or(z.literal("")),
    patient_gender: z.string().max(40).optional().or(z.literal("")),
    preferred_support_type: z.string().max(80).optional().or(z.literal("")),
    message: z.string().max(2000).optional().or(z.literal("")),
    website: honeypot, // honeypot
  })
  .merge(trackingSchema);

export type LeadInput = z.infer<typeof leadSchema>;
