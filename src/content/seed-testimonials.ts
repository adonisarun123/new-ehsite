/**
 * Customer testimonials mirrored from www.ezyhelpers.com.
 * These are real, brand-approved reviews — do not invent or edit the wording.
 */
export interface Testimonial {
  name: string;
  initials: string;
  location: string;
  service: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    initials: "PS",
    location: "Bangalore",
    service: "Live-in Maid",
    quote:
      "EzyHelpers provided us with an amazing live-in maid who has become part of our family. The screening process was thorough and the service is exceptional.",
  },
  {
    name: "Rajesh Kumar",
    initials: "RK",
    location: "Mumbai",
    service: "Elderly Care",
    quote:
      "The elderly care service for my father has been outstanding. The caretaker is professional, caring, and gives us complete peace of mind.",
  },
  {
    name: "Anita Desai",
    initials: "AD",
    location: "Delhi",
    service: "Part-time Maid",
    quote:
      "Quick, reliable, and trustworthy. The part-time maid service fits perfectly with my schedule. Highly recommend EzyHelpers to everyone.",
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    location: "Noida",
    service: "Cook",
    quote:
      "Our cook prepares delicious, healthy meals every day. The booking process was smooth and the replacement guarantee gives us confidence.",
  },
];
