import { z } from "zod";

const phoneRegex = /^[+]?[\d\s-]{7,15}$/;

export const APPLICANT_TYPES = [
  "Helper / Maid",
  "Caregiver",
  "Cook",
  "Nanny",
  "Nurse Assistant",
  "ANM",
  "GNM",
  "GDA",
] as const;

export const EXPERIENCE_OPTIONS = [
  "Fresher",
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "More than 5 years",
] as const;

const honeypot = z.string().max(0).optional().or(z.literal(""));

export const helperApplicationSchema = z.object({
  applicant_type: z.string().min(1, "Please choose a job type"),
  name: z.string().min(2, "Please enter your name").max(120),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  alternate_phone: z.string().regex(phoneRegex).optional().or(z.literal("")),
  city: z.string().min(1, "Please enter your city"),
  current_location: z.string().max(160).optional().or(z.literal("")),
  preferred_job_type: z.string().max(120).optional().or(z.literal("")),
  experience_years: z.string().min(1, "Please choose your experience"),
  skills: z.string().max(400).optional().or(z.literal("")),
  certifications: z.string().max(300).optional().or(z.literal("")),
  languages: z.string().max(200).optional().or(z.literal("")),
  availability: z.string().max(120).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  website: honeypot,
});

export type HelperApplicationInput = z.infer<typeof helperApplicationSchema>;

export const partnerEnquirySchema = z.object({
  partner_type: z
    .enum(["training-institute", "apartment-association", "referral", "other"])
    .default("other"),
  organisation: z.string().min(2, "Please enter your organisation name").max(160),
  contact_name: z.string().min(2, "Please enter a contact name").max(120),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  city: z.string().max(80).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  website: honeypot,
});

export type PartnerEnquiryInput = z.infer<typeof partnerEnquirySchema>;
