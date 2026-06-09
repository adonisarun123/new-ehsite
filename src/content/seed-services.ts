import type { Service, ProcessStep, FaqItem } from "@/features/services/types";

const HELP_PROCESS: ProcessStep[] = [
  {
    title: "Share your requirement",
    description:
      "Tell us the service, timings, location, and any preferences through a quick enquiry or call.",
  },
  {
    title: "We understand your home",
    description:
      "Our team speaks with you to understand the work, schedule, and expectations before suggesting anyone.",
  },
  {
    title: "Matched, screened helper",
    description:
      "We share a verified helper whose skills and availability suit your home.",
  },
  {
    title: "Start with replacement support",
    description:
      "The helper begins, and if it is not the right fit, we help arrange a replacement.",
  },
];

const HELP_TRUST = [
  "Identity and background checks before placement",
  "Skills and experience verified during screening",
  "Clear scope of work agreed with your family",
  "A point of contact for any concern",
  "Replacement support if a helper is not the right fit",
];

function helpPricingNote(): string {
  return "Charges depend on hours, tasks, and the type of help you need. We share clear options after a quick consultation, before you decide. We do not quote a fixed price without understanding your requirement.";
}

function makeService(
  partial: Pick<Service, "slug" | "name" | "category" | "icon" | "priority"> & Partial<Service>
): Service {
  const city = "Bangalore";
  return {
    shortDescription: "",
    answerBlock: "",
    heroTitle: `${partial.name} in ${city}`,
    heroSubtitle: `Verified, trained, and reliable ${partial.name.toLowerCase()} from EzyHelpers for your home in ${city}.`,
    whoItIsFor: [],
    whatIsIncluded: [],
    whatIsNotIncluded: [
      "Tasks outside the agreed scope of work",
      "Medical or nursing care",
      "Anything unsafe or disrespectful to the helper",
    ],
    serviceOptions: [],
    processSteps: HELP_PROCESS,
    trustPoints: HELP_TRUST,
    pricingNote: helpPricingNote(),
    faqs: [],
    metaTitle: `${partial.name} in ${city} | EzyHelpers`,
    metaDescription: `Find verified ${partial.name.toLowerCase()} in ${city} with EzyHelpers. Trained, screened, and reliable home help with clear scope and replacement support.`,
    ...partial,
  } as Service;
}

export const SERVICES: Service[] = [
  makeService({
    slug: "live-in-maids",
    name: "Live-in Maids",
    category: "domestic-help",
    icon: "Home",
    priority: 1,
    shortDescription:
      "Full-day live-in maids who stay at your home to support cooking, cleaning, and daily household needs.",
    answerBlock:
      "EzyHelpers provides verified live-in maids in Bangalore for families who need full-day household support at home. A live-in maid stays at your home and helps with cooking, cleaning, and daily routines, with a clear scope of work agreed in advance. All helpers are screened, and replacement support is available if needed.",
    whoItIsFor: [
      "Working couples needing full-day household support",
      "Families needing help with cooking and cleaning",
      "Elderly households needing steady daily help",
      "Families wanting a helper available through the day",
    ],
    whatIsIncluded: [
      "Cooking and kitchen help",
      "Cleaning and housekeeping",
      "Laundry and daily home upkeep",
      "Support with daily household routines",
      "Other agreed tasks within scope",
    ],
    serviceOptions: ["Live-in (full day, staying at home)", "Long-hour daily support"],
    faqs: [
      {
        question: "Does EzyHelpers provide live-in maids in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find verified live-in maids in Bangalore for full-day household support, including cooking, cleaning, and daily routines, with a clear scope agreed in advance.",
      },
      {
        question: "Is accommodation needed for a live-in maid?",
        answer:
          "Yes. A live-in maid stays at your home, so a basic, safe, and respectful place to stay is needed. This is discussed and agreed before placement.",
      },
      {
        question: "What if the live-in maid is not the right fit?",
        answer:
          "If a helper is not the right fit, EzyHelpers helps arrange a replacement. We stay available for coordination after placement.",
      },
    ],
  }),
  makeService({
    slug: "full-time-maids",
    name: "Full-Time Maids",
    category: "domestic-help",
    icon: "Sparkles",
    priority: 2,
    shortDescription:
      "Full-time maids who come daily for fixed hours to manage cooking, cleaning, and household tasks.",
    answerBlock:
      "EzyHelpers provides verified full-time maids in Bangalore who come daily for fixed hours to help with cooking, cleaning, and household tasks. Helpers are screened and matched to your routine, with a clear scope of work and replacement support if needed.",
    whoItIsFor: [
      "Families needing daily fixed-hour household help",
      "Working couples needing reliable daytime support",
      "Households wanting help with cooking and cleaning",
    ],
    whatIsIncluded: [
      "Cooking and kitchen help",
      "Cleaning and housekeeping",
      "Laundry and home upkeep",
      "Daily household routine support",
    ],
    serviceOptions: ["Full-time daily (fixed hours)", "Morning or evening shifts"],
    faqs: [
      {
        question: "Does EzyHelpers provide full-time maids in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find verified full-time maids in Bangalore who come daily for fixed hours to help with cooking, cleaning, and household tasks, with a clear agreed scope.",
      },
      {
        question: "Can I choose the working hours?",
        answer:
          "Yes. Hours and tasks are agreed based on your routine and the helper's availability before placement.",
      },
    ],
  }),
  makeService({
    slug: "cooks",
    name: "Cooks",
    category: "domestic-help",
    icon: "ChefHat",
    priority: 3,
    shortDescription:
      "Verified cooks for daily home meals, suited to your family's taste and dietary preferences.",
    answerBlock:
      "EzyHelpers provides verified cooks in Bangalore for daily home meals suited to your family's taste and dietary needs. Cooks help with meal preparation, kitchen work, and cleanliness, with a clear scope agreed in advance and replacement support if needed.",
    whoItIsFor: [
      "Families wanting home-cooked daily meals",
      "Working households short on cooking time",
      "Families with specific cuisine or dietary preferences",
      "Elderly households needing meal support",
    ],
    whatIsIncluded: [
      "Daily meal preparation",
      "Kitchen prep and cleanliness",
      "Cooking to your family's taste and diet",
      "Grocery-list support where agreed",
    ],
    serviceOptions: ["Daily cook (one or more meals)", "Full-time or live-in cook"],
    faqs: [
      {
        question: "Does EzyHelpers provide cooks in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find verified cooks in Bangalore for daily home meals suited to your taste and dietary needs, with a clear scope agreed in advance.",
      },
      {
        question: "Can the cook prepare specific cuisines?",
        answer:
          "We try to match a cook to your cuisine and dietary preferences based on availability. Share your preferences during the enquiry so we can match suitably.",
      },
    ],
  }),
  makeService({
    slug: "nanny-babysitter",
    name: "Nanny / Babysitter",
    category: "childcare",
    icon: "Baby",
    priority: 4,
    shortDescription:
      "Caring nannies and babysitters to support babies and children with daily routines and safe supervision.",
    answerBlock:
      "EzyHelpers provides verified nannies and babysitters in Bangalore to support babies and children with daily routines, feeding, hygiene, play, and safe supervision. Helpers are screened and matched to your family, with a clear scope agreed in advance and replacement support if needed.",
    whoItIsFor: [
      "New parents needing baby-care support",
      "Working couples needing childcare during the day",
      "Families needing nanny or babysitting help",
    ],
    whatIsIncluded: [
      "Baby and child daily-routine support",
      "Feeding and hygiene assistance",
      "Safe, attentive supervision",
      "Play and gentle engagement",
      "Coordination with parents on the child's needs",
    ],
    whatIsNotIncluded: [
      "Medical or nursing care for the child",
      "Tasks outside the agreed scope",
      "Anything unsafe or disrespectful to the helper",
    ],
    serviceOptions: ["Daytime nanny", "Full-time or live-in nanny", "Occasional babysitting"],
    faqs: [
      {
        question: "Does EzyHelpers provide nannies and babysitters in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find verified nannies and babysitters in Bangalore to support babies and children with daily routines, feeding, hygiene, play, and safe supervision.",
      },
      {
        question: "Are the nannies background-checked?",
        answer:
          "Yes. EzyHelpers screens helpers with identity and background checks before placement, and verifies experience during screening.",
      },
    ],
  }),
  makeService({
    slug: "housekeeping",
    name: "Housekeeping",
    category: "domestic-help",
    icon: "Brush",
    priority: 5,
    shortDescription:
      "Reliable housekeeping help for cleaning, tidying, and daily upkeep of your home.",
    answerBlock:
      "EzyHelpers provides verified housekeeping help in Bangalore for cleaning, tidying, and daily home upkeep. Helpers are screened and matched to your routine, with a clear scope of work agreed in advance and replacement support if needed.",
    whoItIsFor: [
      "Families needing regular cleaning and tidying",
      "Working households short on time",
      "Homes needing daily upkeep support",
    ],
    whatIsIncluded: [
      "Cleaning and dusting",
      "Tidying and organising",
      "Floor, kitchen, and bathroom cleaning",
      "Daily home upkeep within scope",
    ],
    serviceOptions: ["Daily housekeeping", "Full-time housekeeping"],
    faqs: [
      {
        question: "Does EzyHelpers provide housekeeping help in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find verified housekeeping help in Bangalore for cleaning, tidying, and daily home upkeep, with a clear scope agreed in advance.",
      },
    ],
  }),
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
