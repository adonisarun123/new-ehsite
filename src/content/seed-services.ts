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

/** Process for visit-based, on-demand jobs (repairs, cleaning, shifting). */
const VISIT_PROCESS: ProcessStep[] = [
  {
    title: "Tell us what you need",
    description:
      "Share the task or issue, your location, and a convenient time through a quick enquiry or call.",
  },
  {
    title: "We confirm the visit",
    description:
      "Our team schedules a verified professional for a time slot that suits you.",
  },
  {
    title: "Scope agreed before work starts",
    description:
      "The professional looks at the job and agrees the scope of work with you before starting.",
  },
  {
    title: "Work completed, support after",
    description:
      "The job is completed within the agreed scope, and we stay available if anything needs follow-up.",
  },
];

const VISIT_TRUST = [
  "Identity and background checks before any visit",
  "Skills and experience verified during screening",
  "Scope of work agreed with you before the job starts",
  "A point of contact for any concern",
  "Follow-up coordination if something is not right",
];

const VISIT_PRICING =
  "Charges depend on the type of work, the time involved, and any materials needed. We share a clear estimate after understanding the job, before you decide. We do not quote a fixed price without seeing the requirement.";

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
    slug: "part-time-maids",
    name: "Part-Time Maids",
    category: "domestic-help",
    icon: "Activity",
    priority: 6,
    shortDescription:
      "Flexible part-time maids who visit for a few hours a day to handle cleaning, cooking, or other essential tasks.",
    answerBlock:
      "EzyHelpers provides verified part-time maids in Bangalore who visit your home for 2 to 6 hours a day to take care of cleaning, cooking, childcare, elder support, or specific tasks, based on your schedule. You can choose daily, weekly, or custom visit schedules, with a clear scope agreed in advance and replacement support if needed.",
    heroTitle: "Part-Time Maid Services — Flexible Help, When You Need It",
    heroSubtitle:
      "Household help without a live-in commitment. Experienced part-time maids visit your home for a few hours a day for cleaning, cooking, or other essential tasks, based on your schedule and needs.",
    whoItIsFor: [
      "Working professionals with limited time for household chores",
      "Small families who need occasional help with cleaning or cooking",
      "Individuals seeking flexible support for specific tasks",
      "Anyone wanting a well-maintained home without a full-time commitment",
    ],
    whatIsIncluded: [
      "Housekeeping — sweeping, mopping, dusting, kitchen and bathroom cleaning",
      "Cooking — meal preparation, ingredient prep, and kitchen cleanliness",
      "Babysitting support — feeding, supervision, and routine help",
      "Elder support — daily-routine assistance and companionship",
      "Specific tasks — laundry, ironing, dishwashing, or organising",
    ],
    serviceOptions: [
      "Daily visits (2–6 hours a day)",
      "Weekly or alternate-day schedules",
      "Specific-task visits (e.g. laundry, deep cleaning)",
    ],
    faqs: [
      {
        question: "What is a part-time maid service?",
        answer:
          "A part-time maid service gives you a trained house helper who comes to your home for a few hours each day to handle things like cleaning, cooking, or babysitting, depending on what you need. Unlike a full-time or live-in maid, a part-time maid works for a fixed number of hours and goes home after their shift.",
      },
      {
        question: "How many hours do part-time maids work per day?",
        answer:
          "Part-time maids usually work between 2 to 6 hours a day. The exact hours depend on your requirements and the tasks you want done. You can set a schedule that works for you — daily, alternate days, or a few days a week.",
      },
      {
        question: "Can I schedule part-time maid visits weekly instead of daily?",
        answer:
          "Yes. You can choose how often you want a part-time maid to come. Some families need daily visits, while others prefer 2 or 3 times a week. The schedule is agreed with you before the helper starts.",
      },
      {
        question: "Can I hire a part-time maid for specific household tasks only?",
        answer:
          "Yes. You can hire a part-time maid for just one task, like bathroom cleaning, ironing, or dishwashing. These specific-task services suit homes that need focused help with one or two chores.",
      },
      {
        question: "Are duties of part-time maids fixed in advance?",
        answer:
          "Yes. All tasks are discussed and agreed before the maid starts work, which helps avoid confusion later. The helper is not expected to handle tasks beyond the agreed scope or outside their shift.",
      },
      {
        question: "What happens if my part-time maid does not show up?",
        answer:
          "If your assigned part-time maid is absent or unavailable, we help arrange a suitable replacement at the earliest so your household tasks continue smoothly.",
      },
      {
        question: "Do part-time maids work on Sundays?",
        answer:
          "Most part-time maids take one weekly day off, usually Sunday. If you need service on Sundays, we can try to match you with someone available — it is best to confirm this during booking.",
      },
    ],
  }),
  makeService({
    slug: "japa-nanny-services",
    name: "Japa Nanny",
    category: "childcare",
    icon: "HandHeart",
    priority: 7,
    shortDescription:
      "Trained japa nannies for postpartum mother care and newborn support — gentle routines, hygiene, and rest for new mothers.",
    answerBlock:
      "EzyHelpers provides verified japa nannies in Bangalore for postpartum mother care and newborn support at home. Japa nannies follow traditional, gentle routines — helping with newborn bathing, feeding support, swaddling, hygiene, and the mother's rest and recovery. They are non-medical caregivers, and live-in, day, or night options are available with a clear scope agreed in advance.",
    heroTitle: "Japa Nanny Services for Newborn & Mother Care",
    heroSubtitle:
      "Trained japa nannies who follow traditional methods and gentle routines to support newborn care and the mother's recovery after delivery.",
    whoItIsFor: [
      "New parents with their first baby who want hands-on guidance",
      "Working couples returning to jobs who need consistent help",
      "Families without elders or relatives nearby during recovery",
      "Mothers recovering from a C-section who need extra support",
    ],
    whatIsIncluded: [
      "Post-delivery mother care — rest support, simple nourishing meals, and comfort",
      "Newborn care — safe bathing, nappy changes, feeding and burping support, swaddling",
      "Gentle infant massage and soothing routines as the family prefers",
      "Night care assistance — night feeding support, diaper changes, and soothing",
      "Sterilising bottles and feeding equipment",
      "Light baby-related household support — baby laundry and nursery tidying",
    ],
    whatIsNotIncluded: [
      "Medical or nursing care for the mother or baby",
      "Diagnosing health issues or deciding on medicines",
      "Tasks outside the agreed scope of work",
      "Anything unsafe or disrespectful to the helper",
    ],
    serviceOptions: [
      "Live-in japa nanny (round-the-clock support; a separate room is provided by the family)",
      "Day-duty japa nanny (daytime assistance)",
      "Night-duty japa nanny (overnight support)",
    ],
    faqs: [
      {
        question: "What does a japa nanny do at home?",
        answer:
          "A japa nanny supports the mother and newborn in the weeks after delivery. This includes newborn bathing, nappy changes, feeding and burping support, swaddling, gentle massage and soothing, sterilising feeding equipment, and helping the mother rest and recover with simple meals and a calm routine.",
      },
      {
        question: "Is a japa nanny a nurse or medical professional?",
        answer:
          "No. Japa nannies are non-medical caregivers. They do not diagnose, give medical treatment, or perform clinical work. Their focus is daily newborn care, mother support, hygiene, rest routines, and emotional comfort. Medical needs stay with your doctors.",
      },
      {
        question: "Will a japa nanny cook or do housekeeping?",
        answer:
          "A japa nanny's focus is the mother and baby. Light related support — like preparing simple food for the mother, washing baby clothes, and keeping the nursery tidy — can be agreed in the scope of work. General household work is not part of the role.",
      },
      {
        question: "Can I hire a japa nanny for only night duty?",
        answer:
          "Yes. Night-duty japa nannies help with night feeding, diaper changes, and soothing so the mother can rest. Live-in and day-duty options are also available depending on your needs.",
      },
      {
        question: "How long should I hire a japa nanny?",
        answer:
          "It depends on the mother's recovery and the family's needs. Many families take support for the first few weeks after delivery; others continue longer. We discuss your situation during the consultation and agree on a duration that suits you.",
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

  // ── On-demand & maintenance verticals (ported from the live site) ──────────
  makeService({
    slug: "drivers",
    name: "Drivers",
    category: "transport",
    tier: "on-demand",
    icon: "Car",
    priority: 10,
    shortDescription:
      "Experienced household drivers for daily commutes, school runs, and family travel — live-in, full-time, or on call.",
    answerBlock:
      "EzyHelpers provides verified household drivers in Bangalore for daily commutes, school runs, errands, airport transfers, and outstation trips. Drivers hold valid driving licences, are screened with identity and background checks, and can be engaged live-in, full-time, or on-demand, with the schedule and duties agreed in advance.",
    heroSubtitle:
      "Verified drivers for office commutes, school runs, errands, and outstation trips — with the schedule and duties agreed in advance.",
    whoItIsFor: [
      "Working professionals who need a reliable daily commute",
      "Families needing school pickups, drops, and errand runs",
      "Elders who need patient, careful travel to appointments",
      "Car owners who want their vehicle driven and kept ready",
    ],
    whatIsIncluded: [
      "Daily commutes, school runs, and errands",
      "Airport transfers and outstation trips where agreed",
      "Careful, patient driving for elders and family members",
      "Basic vehicle upkeep coordination — cleanliness, fuel, and service reminders",
      "Punctual schedules and sensible route planning",
    ],
    whatIsNotIncluded: [
      "Duties outside the agreed driving schedule and scope",
      "Vehicle repairs — drivers coordinate with service centres but do not repair cars",
      "Anything unsafe or against traffic rules",
    ],
    serviceOptions: [
      "Live-in driver",
      "Full-time driver (fixed daily hours)",
      "On-demand or trip-based driver",
    ],
    faqs: [
      {
        question: "Are EzyHelpers drivers licensed and experienced?",
        answer:
          "Yes. Drivers placed through EzyHelpers hold valid driving licences, and their experience is verified during screening along with identity and background checks.",
      },
      {
        question: "Can the driver handle my type of car?",
        answer:
          "We try to match a driver who is experienced with your vehicle type — hatchback, sedan, SUV, or automatic. Share your car details during the enquiry so we can match suitably.",
      },
      {
        question: "Can I book a driver for outstation or airport trips?",
        answer:
          "Yes. Drivers can be engaged for airport transfers and outstation travel. Trip details, duration, and stay arrangements are discussed and agreed in advance.",
      },
    ],
  }),
  makeService({
    slug: "gardeners",
    name: "Gardeners",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "Sprout",
    priority: 11,
    shortDescription:
      "Skilled gardeners for plant care, lawn upkeep, and balcony or terrace gardens — one-time or regular visits.",
    answerBlock:
      "EzyHelpers provides verified gardeners in Bangalore for garden setup, plant care, pruning, weeding, lawn mowing, and balcony or terrace gardens. You can book a one-time visit or a weekly or monthly schedule, with the work agreed in advance.",
    whoItIsFor: [
      "Homes with a lawn or garden that needs regular upkeep",
      "Apartment residents with balcony or terrace plants",
      "Families wanting a new garden or a garden refresh",
      "Anyone short on time for watering, weeding, and pruning",
    ],
    whatIsIncluded: [
      "Planting, re-potting, and seasonal flowers",
      "Weeding, pruning, and trimming",
      "Lawn mowing and grass upkeep",
      "Watering routines and plant-health checks",
      "Balcony and terrace garden setup and care",
    ],
    whatIsNotIncluded: [
      "Work outside the agreed garden scope",
      "Major landscaping or civil work unless agreed separately",
      "Anything unsafe or disrespectful to the gardener",
    ],
    serviceOptions: [
      "One-time visit (cleanup, planting, or seasonal prep)",
      "Weekly or alternate-week visits",
      "Monthly maintenance visits",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "Can I book a gardener for a one-time cleanup or planting?",
        answer:
          "Yes. You can book a gardener for one-time work such as garden cleanup, new planting, or seasonal preparation, as well as for regular weekly or monthly visits.",
      },
      {
        question: "Do gardeners help with balcony and terrace gardens?",
        answer:
          "Yes. Gardeners can set up and maintain balcony and terrace gardens, including soil preparation, planter arrangement, plant selection, and ongoing care suited to your space.",
      },
      {
        question: "How often do I need a gardener at home?",
        answer:
          "It depends on your garden size and the season. Many homes take weekly or alternate-week visits during active growing months and monthly visits otherwise. We discuss this during the enquiry and agree a schedule that suits your garden.",
      },
    ],
  }),
  makeService({
    slug: "carpenters",
    name: "Carpenters",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "Hammer",
    priority: 12,
    shortDescription:
      "Skilled carpenters for furniture repairs, fittings, and custom woodwork — from small fixes to full builds.",
    answerBlock:
      "EzyHelpers provides verified carpenters in Bangalore for furniture repair, door and window fixing, furniture assembly, and custom woodwork such as wardrobes, shelves, and storage units. The scope of work and an estimate are agreed with you before the job starts.",
    whoItIsFor: [
      "Homes with wobbly, broken, or jammed furniture and fittings",
      "Families wanting custom wardrobes, shelves, or storage",
      "Anyone needing furniture assembled, dismantled, or moved safely",
      "Offices needing desks, counters, or shelving work",
    ],
    whatIsIncluded: [
      "Furniture repairs — loose joints, broken frames, drawers, and handles",
      "Door and window fixing, including jammed or swollen doors",
      "Furniture assembly and dismantling",
      "Custom woodwork — wardrobes, shelves, study tables, and storage units",
      "Polishing and finishing within the agreed scope",
    ],
    whatIsNotIncluded: [
      "Work outside the agreed scope or estimate",
      "Structural or civil work",
      "Anything unsafe for the carpenter or your home",
    ],
    serviceOptions: [
      "One-time repair visit",
      "Furniture assembly or dismantling",
      "Custom woodwork projects (scoped and estimated first)",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "Can I book a carpenter for small repair work only?",
        answer:
          "Yes. You can book a carpenter for small jobs such as fixing a wobbly chair, a jammed door, or a loose hinge. The scope and estimate are agreed before work starts.",
      },
      {
        question: "Will the carpenter bring tools and materials?",
        answer:
          "Carpenters come with their own tools. Materials such as wood, hardware, or fittings are discussed with you first — you can buy them yourself or agree for the carpenter to arrange them.",
      },
      {
        question: "Do you handle furniture assembly and dismantling?",
        answer:
          "Yes. Carpenters can assemble new furniture, dismantle large pieces for shifting, and reassemble them, with the work agreed in advance.",
      },
    ],
  }),
  makeService({
    slug: "electricians",
    name: "Electricians",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "Zap",
    priority: 13,
    shortDescription:
      "Experienced electricians for repairs, installations, and home wiring checks — with safety-first work.",
    answerBlock:
      "EzyHelpers provides verified electricians in Bangalore for electrical repairs, fittings, and installations — faulty switches, flickering lights, tripping issues, fan and light installation, and wiring checks. The issue is assessed and the scope agreed with you before work starts.",
    whoItIsFor: [
      "Homes with faulty switches, tripping MCBs, or flickering lights",
      "Families installing fans, lights, geysers, or new fittings",
      "Households wanting a wiring or load check for safety",
      "Anyone needing a reliable electrician without the guesswork",
    ],
    whatIsIncluded: [
      "Repairs — switches, sockets, tripping, and minor wiring faults",
      "Installations — fans, lights, geysers, and switchboards",
      "Wiring checks and load assessment within scope",
      "Diagnosis when you are not sure what the problem is",
      "Safe working practices and testing before handover",
    ],
    whatIsNotIncluded: [
      "Work outside the agreed scope or estimate",
      "Jobs requiring utility or building-society approvals unless arranged",
      "Anything unsafe for the electrician or your home",
    ],
    serviceOptions: [
      "One-time repair visit",
      "Installation visit (fans, lights, geysers, fittings)",
      "Larger wiring or upgrade jobs (scoped and estimated first)",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "What electrical issues can the electrician handle?",
        answer:
          "Electricians handle common home issues such as faulty switches and sockets, flickering lights, tripping MCBs, minor wiring faults, and installation of fans, lights, geysers, and switchboards. Larger wiring jobs are scoped separately.",
      },
      {
        question: "I don't know what's causing the problem. Can you still help?",
        answer:
          "Yes. The electrician inspects and diagnoses the issue first, then agrees the scope and estimate with you before fixing it. You don't need to identify the fault yourself.",
      },
      {
        question: "Is it safe to let the electrician work alone at home?",
        answer:
          "Electricians arranged through EzyHelpers go through identity and background checks, and we share details before the visit. We also remain your point of contact throughout the job.",
      },
    ],
  }),
  makeService({
    slug: "plumbers",
    name: "Plumbers",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "Wrench",
    priority: 14,
    shortDescription:
      "Reliable plumbers for leaks, taps, toilets, drainage, and geyser fittings — assessed and quoted before work.",
    answerBlock:
      "EzyHelpers provides verified plumbers in Bangalore for leak repairs, tap and toilet work, drain unclogging, geyser fittings, and pipe, tank, and pump jobs. The plumber assesses the problem and agrees the scope with you before starting.",
    whoItIsFor: [
      "Homes with dripping taps, leaks, or seepage worries",
      "Households with blocked drains or toilet issues",
      "Families fitting or replacing geysers, basins, or sinks",
      "Anyone needing trustworthy plumbing help at home",
    ],
    whatIsIncluded: [
      "Leak repairs — taps, joints, and visible pipework",
      "Toilet, tap, and flush repairs or replacement",
      "Drain and sink unclogging",
      "Geyser, basin, and sink fitting within scope",
      "Pipe, tank, and pump work as agreed",
    ],
    whatIsNotIncluded: [
      "Work outside the agreed scope or estimate",
      "Major civil or concealed-pipeline work unless agreed separately",
      "Anything unsafe for the plumber or your home",
    ],
    serviceOptions: [
      "One-time repair visit",
      "Fitting and installation visit",
      "Larger bathroom or kitchen jobs (scoped and estimated first)",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "What plumbing problems can EzyHelpers help with?",
        answer:
          "Plumbers handle common home problems such as dripping taps, leaking joints, blocked drains, running or faulty flushes, and fitting of taps, basins, sinks, and geysers. Bigger jobs are assessed and scoped first.",
      },
      {
        question: "What details should I share when booking a plumber?",
        answer:
          "A short description helps — for example, 'slow-draining kitchen sink' or 'leak under the bathroom basin' — along with your location and a convenient time. This helps the plumber come prepared.",
      },
      {
        question: "Will I get an estimate before work starts?",
        answer:
          "Yes. The plumber inspects the issue and the scope and estimate are agreed with you before any work begins. We do not quote a fixed price without seeing the job.",
      },
    ],
  }),
  makeService({
    slug: "painters",
    name: "Painters",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "Paintbrush",
    priority: 15,
    shortDescription:
      "Professional painters for interiors, exteriors, touch-ups, and wood or metal painting — neat work, clear estimates.",
    answerBlock:
      "EzyHelpers provides verified painters in Bangalore for interior and exterior painting, repainting and touch-ups, and wood or metal painting. A site visit is arranged to understand the surfaces and finishes, and the scope and estimate are agreed before work begins.",
    whoItIsFor: [
      "Families repainting a home before moving in or after renting out",
      "Homes wanting a fresh look for one room or the whole house",
      "Households with faded, chipped, or damp-affected walls",
      "Anyone wanting neat work with the furniture and floors protected",
    ],
    whatIsIncluded: [
      "Interior wall painting and repainting",
      "Exterior painting where agreed",
      "Touch-ups for faded or chipped patches",
      "Wood and metal painting — doors, frames, gates, and grills",
      "Surface preparation, masking, and cleanup within scope",
    ],
    whatIsNotIncluded: [
      "Work outside the agreed scope or estimate",
      "Structural repairs to walls — flagged to you if noticed",
      "Anything unsafe for the painters or your home",
    ],
    serviceOptions: [
      "Single room or accent wall",
      "Full home painting",
      "Repainting and touch-up visits",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "How is a painting job estimated?",
        answer:
          "The estimate depends on the area, surface condition, and the paint and finish you choose. A site visit is arranged first, and the scope and estimate are agreed with you before work starts.",
      },
      {
        question: "Will my furniture and floors be protected during painting?",
        answer:
          "Yes. Painters cover and mask furniture, floors, and fittings before starting, and clean up the work area when the job is done.",
      },
      {
        question: "Can I get just one room or a touch-up done?",
        answer:
          "Yes. You can book painters for a single room, an accent wall, or touch-ups for faded and chipped patches — not just full-home jobs.",
      },
    ],
  }),
  makeService({
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    category: "cleaning",
    tier: "on-demand",
    icon: "SprayCan",
    priority: 16,
    shortDescription:
      "Thorough home deep cleaning — kitchens, bathrooms, full house, and post-renovation — by trained cleaning teams.",
    answerBlock:
      "EzyHelpers provides professional deep cleaning in Bangalore for full homes, kitchens, bathrooms, and post-renovation cleanup. Trained, background-checked cleaners cover dusting, scrubbing, degreasing, and sanitising as per a scope agreed with you before the visit.",
    heroSubtitle:
      "Trained cleaning teams for full-home, kitchen, bathroom, and post-renovation deep cleans — with the scope agreed before the visit.",
    metaDescription:
      "Book professional home deep cleaning in Bangalore with EzyHelpers. Full house, kitchen, bathroom, and post-renovation cleaning by verified, trained cleaners.",
    whoItIsFor: [
      "Families preparing for festivals, guests, or special occasions",
      "Tenants moving in or out who want a thorough clean",
      "Homes after renovation or repair work",
      "Busy households that want a periodic top-to-bottom clean",
    ],
    whatIsIncluded: [
      "Full-house cleaning — dusting, vacuuming, mopping",
      "Kitchen deep cleaning — degreasing stoves, counters, and cabinets",
      "Bathroom cleaning — toilets, tiles, taps, and basins",
      "Balcony and utility area cleaning",
      "Post-renovation dust and debris cleanup where agreed",
    ],
    whatIsNotIncluded: [
      "Areas or add-ons outside the agreed scope",
      "Repairs or pest treatment (separate services)",
      "Anything unsafe for the cleaning team",
    ],
    serviceOptions: [
      "Full home deep clean",
      "Kitchen or bathroom only",
      "Move-in / move-out or post-renovation clean",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "What does a home deep clean include?",
        answer:
          "A deep clean goes beyond daily housekeeping — dusting and vacuuming every room, degreasing the kitchen, scrubbing bathrooms, cleaning balconies and utility areas, and sanitising high-use surfaces. The exact scope is agreed with you before the visit.",
      },
      {
        question: "How is deep cleaning different from regular housekeeping?",
        answer:
          "Regular housekeeping covers daily upkeep like sweeping and mopping. Deep cleaning is a detailed, periodic service that reaches build-up in kitchens, bathrooms, fans, windows, and corners that daily cleaning does not cover.",
      },
      {
        question: "Do I need deep cleaning after renovation?",
        answer:
          "Post-renovation cleaning is a common request — it removes construction dust, paint splatters, and debris so the home is ready to live in. Mention it during booking so the team comes prepared.",
      },
    ],
  }),
  makeService({
    slug: "appliance-repair",
    name: "Appliance Repair",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "Plug",
    priority: 17,
    shortDescription:
      "Doorstep repair for refrigerators, washing machines, microwaves, geysers, TVs, and kitchen chimneys.",
    answerBlock:
      "EzyHelpers provides home appliance repair in Bangalore for refrigerators, washing machines, microwaves, geysers, gas stoves, TVs, and kitchen chimneys. A verified technician visits, diagnoses the fault, and agrees the scope and estimate with you before repairing.",
    heroSubtitle:
      "Verified technicians for refrigerators, washing machines, microwaves, geysers, TVs, and chimneys — diagnosed and quoted before repair.",
    metaDescription:
      "Book home appliance repair in Bangalore with EzyHelpers. Verified technicians for refrigerators, washing machines, microwaves, geysers, TVs, and chimneys.",
    whoItIsFor: [
      "Homes with a fridge, washing machine, or geyser acting up",
      "Families who want a diagnosis before committing to a repair",
      "Households with older appliances worth repairing over replacing",
      "Anyone tired of chasing unreliable repair people",
    ],
    whatIsIncluded: [
      "Refrigerator repairs — cooling and temperature issues",
      "Washing machine repairs — drainage, spin, and motor faults",
      "Microwave and oven repairs",
      "Geyser and gas stove repairs",
      "TV and kitchen chimney repairs within scope",
    ],
    whatIsNotIncluded: [
      "Repairs outside the agreed scope or estimate",
      "Spare parts beyond what is discussed and agreed with you",
      "Anything unsafe for the technician or your home",
    ],
    serviceOptions: [
      "Diagnosis and repair visit",
      "Repair with agreed spare-part replacement",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "Which appliances can EzyHelpers technicians repair?",
        answer:
          "Technicians handle common home appliances — refrigerators, washing machines, microwaves and ovens, geysers, gas stoves, TVs, and kitchen chimneys — across major brands and models.",
      },
      {
        question: "Will I know the cost before the repair starts?",
        answer:
          "Yes. The technician diagnoses the fault first and agrees the scope and estimate with you, including any spare parts, before starting the repair.",
      },
      {
        question: "What if a spare part is needed?",
        answer:
          "If a part needs replacement, the technician discusses it with you first. Parts are arranged only after you agree, and the cost is part of the agreed estimate.",
      },
    ],
  }),
  makeService({
    slug: "ac-repair",
    name: "AC Repair",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "AirVent",
    priority: 18,
    shortDescription:
      "AC servicing, gas refilling, repairs, and installation for split, window, and inverter units.",
    answerBlock:
      "EzyHelpers provides AC repair and servicing in Bangalore for split, window, and inverter units — routine servicing, deep cleaning, gas leak checks and refilling, cooling-issue repairs, and installation or uninstallation. The technician inspects the unit and agrees the scope with you before work starts.",
    heroSubtitle:
      "Verified AC technicians for servicing, gas refilling, cooling issues, and installation — split, window, and inverter units.",
    metaDescription:
      "Book AC repair and servicing in Bangalore with EzyHelpers. Verified technicians for split, window, and inverter ACs — servicing, gas refilling, and installation.",
    whoItIsFor: [
      "Homes with an AC that is not cooling properly",
      "Families wanting routine servicing before summer",
      "Households moving homes who need uninstallation and reinstallation",
      "Anyone dealing with AC water leakage or odd noises",
    ],
    whatIsIncluded: [
      "Routine servicing and filter cleaning",
      "Deep cleaning (foam or water-jet) where agreed",
      "Gas leak checks and refilling",
      "Cooling-performance and water-leakage repairs",
      "Installation and uninstallation",
    ],
    whatIsNotIncluded: [
      "Work outside the agreed scope or estimate",
      "Spare parts beyond what is discussed and agreed with you",
      "Anything unsafe for the technician or your home",
    ],
    serviceOptions: [
      "Routine service visit",
      "Repair visit (diagnosed and quoted first)",
      "Installation or uninstallation",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "Which AC types do you service?",
        answer:
          "Technicians service split, window, and inverter ACs across major brands, covering routine servicing, deep cleaning, gas refilling, cooling-issue repairs, and installation or uninstallation.",
      },
      {
        question: "My AC is running but not cooling. Can you fix it?",
        answer:
          "Yes. Weak cooling is commonly caused by clogged filters, gas leaks, or thermostat issues. The technician diagnoses the cause first and agrees the repair scope with you before fixing it.",
      },
      {
        question: "Do you handle AC installation when moving homes?",
        answer:
          "Yes. Technicians can uninstall your AC safely at the old home and reinstall it at the new one, with the work agreed in advance.",
      },
    ],
  }),
  makeService({
    slug: "on-demand-helpers",
    name: "On-Demand Helpers",
    category: "on-demand",
    tier: "on-demand",
    icon: "Clock",
    priority: 19,
    shortDescription:
      "Short-notice, hourly helpers for urgent cleaning, last-minute cooking, events, and temporary household support.",
    answerBlock:
      "EzyHelpers provides on-demand helpers in Bangalore for short-notice, hourly needs — urgent cleaning before guests arrive, last-minute cooking, event help, or temporary support when your regular helper is away. Helpers are verified, and the tasks and hours are agreed when you book.",
    heroSubtitle:
      "Verified helpers for one-time and urgent needs — hourly tasks, events, and temporary cover when your regular helper is away.",
    metaDescription:
      "Book on-demand helpers in Bangalore with EzyHelpers for urgent cleaning, last-minute cooking, event help, and temporary household support — verified and hourly.",
    whoItIsFor: [
      "Homes expecting guests and needing a quick cleanup",
      "Families hosting events or gatherings who need extra hands",
      "Households whose regular helper is on leave",
      "Anyone with a one-time task that cannot wait",
    ],
    whatIsIncluded: [
      "Urgent cleaning — sweeping, mopping, kitchen and bathroom cleanup",
      "Last-minute cooking for the family or small gatherings",
      "Event support — setup, kitchen help, serving, and post-event cleanup",
      "Temporary cover when your regular helper is away",
      "Specific one-time tasks agreed at booking",
    ],
    whatIsNotIncluded: [
      "Medical or nursing care",
      "Tasks outside what was agreed at booking",
      "Anything unsafe or disrespectful to the helper",
    ],
    serviceOptions: [
      "Hourly booking (one-time tasks)",
      "Full-day support for events or occasions",
      "Short-term cover for a few days",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    faqs: [
      {
        question: "How quickly can an on-demand helper come?",
        answer:
          "On-demand helpers are matched based on availability in your area — often for the same or next day. Call or enquire with your timing, and we confirm the earliest available helper.",
      },
      {
        question: "Is there a long-term commitment?",
        answer:
          "No. On-demand help is booked by the hour or the day, with no long-term contract. The tasks and hours are agreed when you book.",
      },
      {
        question: "Can I get on-demand help for a party or event?",
        answer:
          "Yes. Helpers can assist with setup, kitchen work, serving, and cleanup for home events and gatherings. Share the date and the kind of help you need during booking.",
      },
    ],
  }),
  makeService({
    slug: "house-shifting",
    name: "House Shifting",
    category: "moving",
    tier: "on-demand",
    icon: "Truck",
    priority: 20,
    shortDescription:
      "End-to-end house shifting — packing, loading, transport, unloading, and unpacking — handled with care.",
    answerBlock:
      "EzyHelpers provides house shifting support in Bangalore covering packing, furniture dismantling, loading, transport, unloading, reassembly, and unpacking. The team surveys your requirement, agrees the scope and estimate with you, and handles belongings with proper packing materials.",
    heroSubtitle:
      "Packing, loading, transport, and unpacking by a verified moving team — with the scope and estimate agreed before moving day.",
    metaDescription:
      "Book house shifting in Bangalore with EzyHelpers — packing, furniture dismantling, transport, and unpacking by a verified team, with a clear agreed estimate.",
    whoItIsFor: [
      "Families moving within Bangalore or to a nearby city",
      "Tenants shifting flats at the end of a lease",
      "Homes with heavy or fragile items needing careful handling",
      "Anyone who wants the move handled end to end",
    ],
    whatIsIncluded: [
      "Packing with appropriate materials, including fragile items",
      "Furniture dismantling and reassembly",
      "Loading, transport, and unloading",
      "Unpacking and basic setup at the new home where agreed",
      "Careful handling of appliances and delicate items",
    ],
    whatIsNotIncluded: [
      "Items or services outside the agreed scope and estimate",
      "Civil, electrical, or plumbing work at either home (separate services)",
      "Anything unsafe for the moving team",
    ],
    serviceOptions: [
      "Local shifting within the city",
      "Intercity shifting",
      "Partial moves (select rooms or items)",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "Is furniture dismantling and reassembly included?",
        answer:
          "Yes, where agreed in the scope. The team can dismantle bulky furniture like beds and wardrobes before the move and reassemble them at the new home.",
      },
      {
        question: "How are fragile items handled?",
        answer:
          "Fragile items such as glassware, mirrors, electronics, and kitchenware are packed separately with suitable protective materials. Point them out during the survey so they are planned for.",
      },
      {
        question: "How is the cost of shifting decided?",
        answer:
          "The estimate depends on the volume of belongings, the distance, floor access at both homes, and any special items. The scope and estimate are agreed with you before moving day.",
      },
    ],
  }),
  makeService({
    slug: "pest-control",
    name: "Pest Control",
    category: "home-maintenance",
    tier: "on-demand",
    icon: "Bug",
    priority: 21,
    shortDescription:
      "Targeted pest control for cockroaches, ants, mosquitoes, termites, bed bugs, and rodents at home.",
    answerBlock:
      "EzyHelpers provides home pest control in Bangalore for cockroaches, ants, mosquitoes, termites, bed bugs, and rodents. The team assesses the problem, explains the treatment and precautions in advance — including for children and pets — and agrees the scope with you before starting.",
    heroSubtitle:
      "Verified pest control teams for cockroaches, ants, mosquitoes, termites, bed bugs, and rodents — treatment and precautions explained in advance.",
    metaDescription:
      "Book home pest control in Bangalore with EzyHelpers for cockroaches, ants, mosquitoes, termites, bed bugs, and rodents — treatment explained and agreed in advance.",
    whoItIsFor: [
      "Kitchens dealing with cockroaches or ants",
      "Homes with mosquitoes, bed bugs, or rodents",
      "Families worried about termites in furniture or woodwork",
      "Households wanting preventive treatment before the rainy season",
    ],
    whatIsIncluded: [
      "Inspection and identification of the pest problem",
      "Cockroach, ant, and mosquito treatment",
      "Termite and bed bug treatment where agreed",
      "Rodent control measures",
      "Guidance on precautions before and after treatment",
    ],
    whatIsNotIncluded: [
      "Treatments outside the agreed scope",
      "Structural repairs to pest-damaged areas",
      "Anything unsafe for your family or the technicians",
    ],
    serviceOptions: [
      "Single treatment visit",
      "Treatment with follow-up visit where the pest requires it",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "Which pests does the service cover?",
        answer:
          "Treatments cover common household pests — cockroaches, ants, mosquitoes, termites, bed bugs, and rodents. The team inspects first and recommends the right treatment for your situation.",
      },
      {
        question: "What precautions are needed for children and pets?",
        answer:
          "The team explains the treatment and the precautions in advance — such as keeping children and pets away from treated areas for a set period and covering food and utensils — so you can plan the visit comfortably.",
      },
      {
        question: "Will one visit be enough?",
        answer:
          "It depends on the pest and the extent of the problem. Some treatments work in a single visit; others, like bed bugs or termites, may need a follow-up. This is discussed with you during the assessment.",
      },
    ],
  }),
  makeService({
    slug: "chauffeur-service",
    name: "Chauffeur Service",
    category: "transport",
    tier: "on-demand",
    icon: "CarFront",
    priority: 22,
    shortDescription:
      "Professional chauffeurs for premium and automatic vehicles — trained in etiquette, discretion, and careful handling.",
    answerBlock:
      "EzyHelpers provides verified professional chauffeurs in Bangalore for premium and automatic vehicles — daily commutes, corporate travel, airport transfers, events, and outstation trips. Chauffeurs hold valid licences, are screened with identity and background checks, and follow professional grooming and etiquette standards.",
    heroSubtitle:
      "Trained chauffeurs for premium and automatic cars — punctual, discreet, and careful with your vehicle.",
    whoItIsFor: [
      "Owners of premium or automatic vehicles",
      "Executives who need punctual, discreet corporate travel",
      "Families wanting a polished, dependable driver for daily use",
      "Guests and visitors needing comfortable city travel",
    ],
    whatIsIncluded: [
      "Daily commutes and family travel",
      "Corporate and executive travel",
      "Airport transfers and event drives",
      "Outstation and long-distance trips where agreed",
      "Careful handling and basic upkeep coordination for premium vehicles",
    ],
    whatIsNotIncluded: [
      "Duties outside the agreed schedule and scope",
      "Vehicle repairs — chauffeurs coordinate with service centres but do not repair cars",
      "Anything unsafe or against traffic rules",
    ],
    serviceOptions: [
      "Live-in chauffeur",
      "Full-time chauffeur (fixed daily hours)",
      "Part-time or on-demand chauffeur",
    ],
    faqs: [
      {
        question: "How is a chauffeur different from a regular driver?",
        answer:
          "A chauffeur offers a more polished service — experience with premium and automatic vehicles, professional grooming and etiquette, discretion, and extra care for high-value cars. EzyHelpers provides both drivers and chauffeurs depending on what you need.",
      },
      {
        question: "Are chauffeurs experienced with automatic and premium cars?",
        answer:
          "Yes. We match chauffeurs whose experience suits your vehicle, including automatic transmissions and premium sedans and SUVs. Share your car details during the enquiry.",
      },
      {
        question: "Can I book a chauffeur for events or outstation trips?",
        answer:
          "Yes. Chauffeurs are available for events, late-night functions, airport transfers, and outstation travel, with the schedule and arrangements agreed in advance.",
      },
    ],
  }),
  makeService({
    slug: "home-chefs",
    name: "Home Chefs",
    category: "domestic-help",
    tier: "on-demand",
    icon: "CookingPot",
    priority: 23,
    shortDescription:
      "Professionally trained chefs for multi-cuisine daily cooking, special occasions, and diet-specific menus at home.",
    answerBlock:
      "EzyHelpers provides verified professional chefs in Bangalore who cook at your home — multi-cuisine daily meals, diet-specific menus, and special-occasion cooking. Chefs plan menus with your family, follow kitchen hygiene practices, and can be booked daily, for events, or for short-term needs.",
    heroSubtitle:
      "Trained chefs who cook at your home — multi-cuisine menus, diet-aware cooking, and special-occasion meals planned with your family.",
    whoItIsFor: [
      "Families who want restaurant-style variety cooked at home",
      "Households with specific diet plans to follow",
      "Hosts planning celebrations, private dinners, or gatherings",
      "Homes that want menu planning, not just daily cooking",
    ],
    whatIsIncluded: [
      "Multi-cuisine cooking — Indian, Continental, Asian, and more",
      "Menu planning with your family's tastes and preferences",
      "Diet-conscious meals following your family's or your doctor's instructions",
      "Cooking for occasions, private dinners, and gatherings",
      "Kitchen hygiene, grocery guidance, and post-cooking cleanup",
    ],
    whatIsNotIncluded: [
      "Dietary or medical advice — chefs follow instructions, they do not prescribe diets",
      "Tasks outside the agreed cooking scope",
      "Anything unsafe or disrespectful to the chef",
    ],
    serviceOptions: [
      "Daily home chef (one or more meals)",
      "Event and occasion cooking",
      "Short-term or trial engagements",
    ],
    faqs: [
      {
        question: "How is a home chef different from a regular cook?",
        answer:
          "A home chef is professionally trained across cuisines and handles menu planning, diet-specific cooking, and occasion meals, while a regular cook focuses on everyday home food. EzyHelpers offers both — choose based on your family's needs.",
      },
      {
        question: "Can the chef follow a specific diet plan?",
        answer:
          "Yes. Chefs can cook to diet plans you or your nutritionist or doctor specify — the chef follows your instructions rather than prescribing diets. Share the plan during the enquiry so we match a suitable chef.",
      },
      {
        question: "Can I book a chef just for an event or dinner?",
        answer:
          "Yes. Chefs can be booked for one-time events, private dinners, festivals, and family gatherings, including menu planning, cooking, and kitchen cleanup.",
      },
    ],
  }),
  makeService({
    slug: "sofa-cleaning",
    name: "Sofa Cleaning",
    category: "cleaning",
    tier: "on-demand",
    icon: "Sofa",
    priority: 24,
    shortDescription:
      "Professional at-home cleaning for fabric and leather sofas — deep cleaning, stain treatment, and odour removal.",
    answerBlock:
      "EzyHelpers provides professional sofa cleaning at home in Bangalore — deep cleaning for fabric sofas, conditioning care for leather, stain and odour treatment, and cushion cleaning. The cleaner checks the material first and agrees the right treatment with you before starting.",
    heroSubtitle:
      "At-home deep cleaning for fabric and leather sofas — material checked and the right treatment agreed before work starts.",
    metaDescription:
      "Book professional sofa cleaning at home in Bangalore with EzyHelpers — fabric and leather sofa deep cleaning, stain treatment, and odour removal by verified cleaners.",
    whoItIsFor: [
      "Homes with dull, dusty, or stained sofas",
      "Families with kids or pets and frequent spills",
      "Households preparing for festivals or guests",
      "Anyone who wants upholstery refreshed without replacing it",
    ],
    whatIsIncluded: [
      "Deep cleaning for fabric sofas",
      "Conditioning care for leather sofas",
      "Stain treatment — tea, coffee, grease, and food marks",
      "Odour treatment, including pet and damp smells",
      "Cushion and pillow cleaning where agreed",
    ],
    whatIsNotIncluded: [
      "Repairs to torn upholstery or frames (carpentry is separate)",
      "Treatments outside the agreed scope",
      "Anything unsafe for the cleaner or your furniture",
    ],
    serviceOptions: [
      "Per-seat or per-sofa cleaning visit",
      "Sofa plus cushion and upholstery cleaning",
    ],
    processSteps: VISIT_PROCESS,
    trustPoints: VISIT_TRUST,
    pricingNote: VISIT_PRICING,
    faqs: [
      {
        question: "Which sofa materials can be cleaned?",
        answer:
          "Cleaners handle fabric, leather, rexine, and synthetic sofas, including L-shaped, recliner, and wooden-frame designs. The material is checked first so the right method is used.",
      },
      {
        question: "Can old stains be removed?",
        answer:
          "Common stains like tea, coffee, grease, and food marks usually improve significantly with professional treatment. Results depend on the fabric and how old the stain is — the cleaner assesses this honestly before starting.",
      },
      {
        question: "How long does sofa cleaning take to dry?",
        answer:
          "Drying time depends on the fabric, the method used, and ventilation. The cleaner tells you the expected drying time for your sofa during the visit.",
      },
    ],
  }),
  makeService({
    slug: "pet-sitters",
    name: "Pet Sitters",
    category: "pet-care",
    tier: "on-demand",
    icon: "PawPrint",
    priority: 25,
    shortDescription:
      "Caring, verified pet sitters for dog walking, feeding, playtime, and at-home care — hourly to live-in.",
    answerBlock:
      "EzyHelpers provides verified pet sitters in Bangalore for at-home dog care — daily walks, feeding on your schedule, playtime and companionship, grooming support, and giving prescribed medicines as you instruct. Options range from hourly visits to live-in care, with your pet's routine agreed in advance.",
    whoItIsFor: [
      "Working professionals with long office hours",
      "Travellers who want their pet cared for at home",
      "Elderly pet owners who find daily walks difficult",
      "Families with multiple pets needing an extra hand",
    ],
    whatIsIncluded: [
      "Daily walks matched to your dog's energy and routine",
      "Feeding and fresh water on your schedule",
      "Playtime, companionship, and gentle handling",
      "Grooming support — brushing, paw cleaning, and tidying the pet's area",
      "Giving prescribed medicines as instructed by you and your vet",
      "Potty breaks and waste cleanup",
    ],
    whatIsNotIncluded: [
      "Veterinary care or medical decisions for your pet",
      "Tasks outside the agreed routine",
      "Handling that is unsafe for the sitter or the pet",
    ],
    serviceOptions: [
      "Hourly sitting or daily walks",
      "Part-time or full-time daily care",
      "Live-in or weekend care during travel",
    ],
    faqs: [
      {
        question: "What does a pet sitter do at home?",
        answer:
          "A pet sitter follows your pet's routine at your home — walks, feeding, playtime, grooming support, potty breaks, and giving prescribed medicines as you instruct. The routine and duties are agreed before the sitter starts.",
      },
      {
        question: "Can I get a pet sitter while I travel?",
        answer:
          "Yes. Live-in and full-day options keep your pet cared for at home while you are away, following the feeding, walking, and play routine you set.",
      },
      {
        question: "Are pet sitters comfortable with all breeds?",
        answer:
          "Sitters are matched based on experience with your pet's breed, size, and temperament. Share your pet's details during the enquiry so we suggest someone suitable.",
      },
    ],
  }),
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
