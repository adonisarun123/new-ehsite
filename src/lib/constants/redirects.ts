import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * 301 redirects from legacy www.ezyhelpers.com URLs to new routes (spec §20).
 * Sourced from the live sitemap (June 2026). Add Search Console exports here
 * as more legacy URLs surface.
 */
export const redirects: Redirect[] = [
  // Legal / informational
  { source: "/terms-of-service", destination: "/terms", permanent: true },

  // Booking / enquiry funnels → contact
  { source: "/book-now", destination: "/contact", permanent: true },
  { source: "/hire-helper", destination: "/contact", permanent: true },
  { source: "/service-request", destination: "/contact", permanent: true },
  { source: "/requirement", destination: "/contact", permanent: true },
  { source: "/customer-requirements", destination: "/contact", permanent: true },
  { source: "/care-services/enquiry", destination: "/contact", permanent: true },
  { source: "/on-demand-help", destination: "/services", permanent: true },

  // Helper-side funnels → careers / jobs
  { source: "/join-as-helper", destination: "/careers", permanent: true },
  { source: "/for-helpers", destination: "/careers", permanent: true },
  { source: "/helper-registration", destination: "/helper-jobs", permanent: true },

  // Legacy care-service slugs → new taxonomy
  { source: "/care-services/elderly-care-services-bangalore", destination: "/care-services/elderly-care", permanent: true },
  { source: "/care-services/patient-care-services-bangalore", destination: "/care-services/patient-care", permanent: true },
  { source: "/care-services/dementia-alzheimers-care-bangalore", destination: "/care-services/dementia-care", permanent: true },
  { source: "/care-services/alzheimers-care-at-home-bangalore", destination: "/care-services/dementia-care", permanent: true },
  { source: "/care-services/bedridden-patient-care-bangalore", destination: "/care-services/bedridden-patient-care", permanent: true },
  { source: "/care-services/post-surgery-recovery-bangalore", destination: "/care-services/post-operative-care", permanent: true },
  { source: "/care-services/stroke-care-at-home-bangalore", destination: "/care-services/stroke-care", permanent: true },
  { source: "/care-services/parkinsons-care-at-home-bangalore", destination: "/care-services/parkinsons-care", permanent: true },
  { source: "/care-services/caretaker-services-bangalore", destination: "/care-services/patient-care", permanent: true },
  { source: "/care-services/home-attendant-services-bangalore", destination: "/care-services/patient-care", permanent: true },
  { source: "/care-services/trained-attendant-services-bangalore", destination: "/care-services/patient-care", permanent: true },
  { source: "/care-services/home-care-services-bangalore", destination: "/care-services", permanent: true },
  { source: "/care-services/elderly-care-whitefield-bangalore", destination: "/localities/bangalore/whitefield/elderly-care", permanent: true },
  { source: "/care-services/elderly-care-hsr-layout-bangalore", destination: "/localities/bangalore/hsr-layout/elderly-care", permanent: true },
  { source: "/care-services/elderly-care-koramangala-bangalore", destination: "/localities/bangalore/koramangala/elderly-care", permanent: true },

  // Legacy service slugs (japa + part-time now exist at the same paths; no redirect needed)
  { source: "/services/elderly-care", destination: "/care-services/elderly-care", permanent: true },
  { source: "/services/patient-care-services-at-home", destination: "/care-services/patient-care", permanent: true },
  { source: "/services/special-needs-caregiver", destination: "/care-services/special-needs-care", permanent: true },
];
