/** Cities and Bangalore localities (spec §8.5). */

export interface City {
  slug: string;
  name: string;
  state: string;
  isActive: boolean;
  intro: string;
}

export interface Locality {
  slug: string;
  name: string;
  citySlug: string;
  context: string;
}

export const CITIES: City[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    isActive: true,
    intro:
      "EzyHelpers serves families across Bangalore with verified caregivers and home helpers — from elder and patient care to maids, cooks, and nannies — covering major residential hubs and apartment communities.",
  },
  {
    slug: "bareilly",
    name: "Bareilly",
    state: "Uttar Pradesh",
    isActive: true,
    intro:
      "EzyHelpers supports families in Bareilly with verified home helpers and caregiving support, bringing structured, dependable hiring to local households.",
  },
];

export const BANGALORE_LOCALITIES: Locality[] = [
  { slug: "hsr-layout", name: "HSR Layout", citySlug: "bangalore", context: "A busy residential and start-up hub with many working families and apartment communities." },
  { slug: "sarjapur-road", name: "Sarjapur Road", citySlug: "bangalore", context: "A fast-growing corridor of apartments and gated communities popular with working couples and young families." },
  { slug: "bellandur", name: "Bellandur", citySlug: "bangalore", context: "A tech-corridor neighbourhood with large apartment complexes and busy professional households." },
  { slug: "whitefield", name: "Whitefield", citySlug: "bangalore", context: "An established IT hub with villas, apartments, and many families needing dependable home support." },
  { slug: "marathahalli", name: "Marathahalli", citySlug: "bangalore", context: "A central, well-connected area with a mix of families and working professionals." },
  { slug: "electronic-city", name: "Electronic City", citySlug: "bangalore", context: "A major IT zone with apartment communities and families needing reliable daily help." },
  { slug: "koramangala", name: "Koramangala", citySlug: "bangalore", context: "A vibrant, central neighbourhood with families, professionals, and independent homes." },
  { slug: "indiranagar", name: "Indiranagar", citySlug: "bangalore", context: "A well-established residential area with independent houses and apartments." },
  { slug: "jayanagar", name: "Jayanagar", citySlug: "bangalore", context: "A traditional, family-oriented locality with many senior residents and established homes." },
  { slug: "jp-nagar", name: "JP Nagar", citySlug: "bangalore", context: "A settled residential area with families and elders needing steady home support." },
  { slug: "bannerghatta-road", name: "Bannerghatta Road", citySlug: "bangalore", context: "A growing residential stretch with apartments, hospitals nearby, and busy families." },
  { slug: "hebbal", name: "Hebbal", citySlug: "bangalore", context: "A north Bangalore hub with apartment communities and well-connected residential pockets." },
  { slug: "yelahanka", name: "Yelahanka", citySlug: "bangalore", context: "A spacious north Bangalore suburb with independent homes and gated communities." },
  { slug: "btm-layout", name: "BTM Layout", citySlug: "bangalore", context: "A dense, central residential area popular with working families and professionals." },
  { slug: "brookefield", name: "Brookefield", citySlug: "bangalore", context: "A Whitefield-area neighbourhood with apartments and families working in nearby tech parks." },
  { slug: "mahadevapura", name: "Mahadevapura", citySlug: "bangalore", context: "A tech-corridor zone with large residential communities and busy households." },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getLocality(citySlug: string, localitySlug: string): Locality | undefined {
  return BANGALORE_LOCALITIES.find(
    (l) => l.citySlug === citySlug && l.slug === localitySlug
  );
}

/**
 * URL slug aliases used in city/locality routes that differ from the canonical
 * service slug (spec §8.2–8.3 uses e.g. `full-time-maid`). Maps URL slug → canonical.
 */
export const SERVICE_SLUG_ALIASES: Record<string, string> = {
  "full-time-maid": "full-time-maids",
  "live-in-maid": "live-in-maids",
};

export function resolveServiceSlug(urlSlug: string): string {
  return SERVICE_SLUG_ALIASES[urlSlug] ?? urlSlug;
}

/** Service slugs offered at city/locality level (care + home help). */
export const CITY_SERVICE_SLUGS = [
  "elderly-care",
  "dementia-care",
  "palliative-care",
  "patient-care",
  "post-operative-care",
  "bedridden-patient-care",
  "parkinsons-care",
  "stroke-care",
  "live-in-maids",
  "full-time-maids",
  "cooks",
  "nanny-babysitter",
  "housekeeping",
] as const;
