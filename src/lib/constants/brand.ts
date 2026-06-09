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
    facebook: "https://www.facebook.com/ezyhelpers",
    instagram: "https://www.instagram.com/ezyhelpers",
    linkedin: "https://www.linkedin.com/company/ezyhelpers",
    youtube: "https://www.youtube.com/@ezyhelpers",
  },
} as const;

/**
 * Headline trust stats shown on the homepage (sourced from www.ezyhelpers.com).
 * Keep these in sync with the live brand; do not invent new figures.
 */
export const TRUST_STATS = [
  { value: "10,000+", label: "Trusted Families", sub: "Families who trust our service" },
  { value: "5,000+", label: "Verified Helpers", sub: "Background-checked professionals" },
  { value: "250+", label: "Locations", sub: "Across major Indian cities" },
  { value: "4.8★", label: "Customer Rating", sub: "Average customer satisfaction" },
] as const;

/** Hero rating badge text. */
export const RATING_BADGE = "Rated 4.8/5 by 10,000+ families";

/** Credibility / accreditation line (from the live site). */
export const CREDIBILITY_NOTE =
  "EzyHelpers is a DPIIT-recognised startup, affiliated with India's national skill development ecosystem (DWSSC) — so every helper we place is part of a formally trained, verified workforce.";

/** Reusable non-clinical scope note (spec §4.3). */
export const MEDICAL_SCOPE_NOTE =
  "EzyHelpers provides trained caregiver and attendant support for daily living, comfort, safety, mobility, hygiene, companionship, and family coordination. This is not a replacement for medical diagnosis, emergency care, or treatment by doctors, nurses, or hospitals.";

/** Blog medical disclaimer (spec §12.8). */
export const BLOG_MEDICAL_DISCLAIMER =
  "This article is for general awareness and family planning. It is not medical advice. Please consult a qualified doctor or healthcare professional for diagnosis, treatment, medication, or emergency care.";
