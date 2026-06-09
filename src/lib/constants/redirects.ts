import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * 301 redirects from legacy URLs to new routes (spec §20).
 * Populate this after crawling the existing ezyhelpers.com URLs and
 * exporting indexed URLs from Search Console. Examples are commented out.
 */
export const redirects: Redirect[] = [
  // { source: "/maid-service-bangalore", destination: "/cities/bangalore/full-time-maid", permanent: true },
  // { source: "/elderly-care-bangalore", destination: "/cities/bangalore/elderly-care", permanent: true },
];
