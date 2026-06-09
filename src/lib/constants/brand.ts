/** Central brand facts. Edit here to update site-wide. */
export const BRAND = {
  name: "EzyHelpers",
  legalName: "EzyHelpers",
  tagline: "Trusted hands for your home.",
  description:
    "EzyHelpers helps Indian households find verified, trained, and reliable domestic helpers and caregivers with dignity, safety, transparency, and structured support.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ezyhelpers.com",
  email: "contact@ezyhelpers.com",
  // Public, non-secret contact values.
  phone: process.env.NEXT_PUBLIC_PRIMARY_PHONE_NUMBER ?? "08031411776",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER ?? "918031411776",
  primaryCity: "Bangalore",
  cities: ["Bangalore", "Bareilly"],
  social: {
    // Add real profiles only when approved (spec §15.2).
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;

/** Reusable non-clinical scope note (spec §4.3). */
export const MEDICAL_SCOPE_NOTE =
  "EzyHelpers provides trained caregiver and attendant support for daily living, comfort, safety, mobility, hygiene, companionship, and family coordination. This is not a replacement for medical diagnosis, emergency care, or treatment by doctors, nurses, or hospitals.";

/** Blog medical disclaimer (spec §12.8). */
export const BLOG_MEDICAL_DISCLAIMER =
  "This article is for general awareness and family planning. It is not medical advice. Please consult a qualified doctor or healthcare professional for diagnosis, treatment, medication, or emergency care.";
