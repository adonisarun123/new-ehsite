/**
 * Illustrative hero images for service pages (Unsplash, allowed in next.config).
 * Mapped by service slug with sensible defaults per service family.
 */

export interface HeroImage {
  src: string;
  alt: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

const IMAGES = {
  cleaning: u("photo-1581578731548-c64695cc6952"),
  bathroom: u("photo-1584622650111-993a426fbf0a"),
  kitchen: u("photo-1556911220-bff31c812dba"),
  indianFood: u("photo-1585937421612-70a008356fbe"),
  childcare: u("photo-1476703993599-0035a21b17a9"),
  holdingHands: u("photo-1584515933487-779824d29309"),
  elderClinic: u("photo-1576765608535-5f04d1e3f289"),
  companionship: u("photo-1604881988758-f76ad2f7aac1"),
};

const SERVICE_IMAGES: Record<string, HeroImage> = {
  housekeeping: { src: IMAGES.cleaning, alt: "Housekeeper cleaning a bright home interior" },
  cooks: { src: IMAGES.indianFood, alt: "Freshly prepared Indian curries in a home kitchen" },
  "live-in-maids": { src: IMAGES.bathroom, alt: "A spotless, well-kept home bathroom" },
  "full-time-maids": { src: IMAGES.kitchen, alt: "A clean, organised home kitchen" },
  "nanny-babysitter": { src: IMAGES.childcare, alt: "Children spending time with a carer at home" },
};

const CARE_IMAGES: Record<string, HeroImage> = {
  "patient-care": { src: IMAGES.elderClinic, alt: "An elderly woman smiling with her care attendant" },
  "post-operative-care": { src: IMAGES.elderClinic, alt: "An elderly patient supported during recovery" },
  "bedridden-patient-care": { src: IMAGES.holdingHands, alt: "A caregiver gently holding a patient's hand" },
  "stroke-care": { src: IMAGES.elderClinic, alt: "An elderly patient supported by a care attendant" },
  "companion-care": { src: IMAGES.companionship, alt: "Sharing tea and conversation at home" },
};

const DEFAULT_SERVICE: HeroImage = {
  src: IMAGES.cleaning,
  alt: "Professional home help at work",
};

const DEFAULT_CARE: HeroImage = {
  src: IMAGES.holdingHands,
  alt: "A caregiver gently holding an elder's hand",
};

export function serviceHeroImage(slug: string): HeroImage {
  return SERVICE_IMAGES[slug] ?? DEFAULT_SERVICE;
}

export function careHeroImage(slug: string): HeroImage {
  return CARE_IMAGES[slug] ?? DEFAULT_CARE;
}
