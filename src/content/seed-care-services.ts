import type { CareService, ProcessStep, FaqItem } from "@/features/services/types";

const CARE_PROCESS: ProcessStep[] = [
  {
    title: "Tell us what your family needs",
    description:
      "Share the condition, the kind of support needed, location, and timing through a quick enquiry or call.",
  },
  {
    title: "Free needs assessment",
    description:
      "Our team speaks with you to understand the daily routine, mobility, and care expectations before suggesting anyone.",
  },
  {
    title: "Matched caregiver profile",
    description:
      "We share a screened, trained caregiver whose experience and availability suit your requirement.",
  },
  {
    title: "Start with ongoing support",
    description:
      "The caregiver begins, and our team stays available for coordination, feedback, and replacement support if needed.",
  },
];

const COMMON_SAFETY = [
  "Identity and background checks before placement",
  "Experience and skills verified during screening",
  "Caregivers trained in respectful, hygienic, safety-first daily care",
  "Family coordination and a point of contact for concerns",
  "Replacement support if a caregiver is not the right fit",
];

const RECOMMENDED_PROFILE_DEFAULT = [
  "Experience supporting elders or patients at home",
  "Calm, patient, and respectful temperament",
  "Comfortable with daily-living and mobility assistance",
  "Able to follow family and doctor instructions carefully",
];

function caregiverPricingNote(): string {
  return "Care plans are shared after a free consultation, based on hours, condition, and support needed. We will explain the options clearly before you decide. We do not quote a fixed price without understanding your requirement first.";
}

/** Base care service with sensible compliant defaults; overrides fill specifics. */
function makeCare(
  partial: Pick<CareService, "slug" | "name" | "conditionType" | "careLevel" | "supportLevel" | "icon" | "priority"> &
    Partial<CareService>
): CareService {
  const city = "Bangalore";
  return {
    shortDescription: "",
    answerBlock: "",
    heroTitle: `${partial.name} at Home in ${city}`,
    heroSubtitle: `Trained, verified caregiver support from EzyHelpers for ${partial.name.toLowerCase()} — focused on comfort, safety, and dignity at home.`,
    familyConcerns: [],
    whoItIsFor: [],
    caregiverCanHelpWith: [],
    caregiverCannotDo: [
      "Medical diagnosis or deciding treatment",
      "Prescribing or changing medication",
      "Clinical or nursing procedures unless a qualified nurse is specifically arranged",
      "Emergency medical response in place of a hospital or ambulance",
    ],
    recommendedCaregiverProfile: RECOMMENDED_PROFILE_DEFAULT,
    careOptions: [
      "Day-time caregiver",
      "Night caregiver / overnight attendant",
      "Live-in caregiver (subject to assessment and availability)",
    ],
    processSteps: CARE_PROCESS,
    safetyPoints: COMMON_SAFETY,
    familyChecklist: [
      "Note the patient's daily routine and timings",
      "List mobility, hygiene, and feeding needs",
      "Keep doctor's instructions and medicines organised",
      "Decide preferred support hours (day, night, or live-in)",
      "Share any language or food preferences",
    ],
    pricingNote: caregiverPricingNote(),
    faqs: [],
    metaTitle: `${partial.name} at Home in ${city} | EzyHelpers`,
    metaDescription: `Find trained caregiver support for ${partial.name.toLowerCase()} at home in ${city} with EzyHelpers. Help with daily routines, hygiene, meals, mobility, companionship, and family coordination.`,
    ...partial,
  } as CareService;
}

const SCOPE_FAQ: FaqItem = {
  question: "Is this caregiver support the same as nursing or medical treatment?",
  answer:
    "No. EzyHelpers provides trained caregiver and attendant support for daily living, comfort, hygiene, mobility, and companionship. Medical diagnosis, treatment, and clinical nursing must be handled by qualified doctors or nurses. We work alongside your medical team, not in place of them.",
};

export const CARE_SERVICES: CareService[] = [
  makeCare({
    slug: "elderly-care",
    name: "Elderly Care",
    conditionType: "elder-care",
    careLevel: "daily-living-support",
    supportLevel: "Daily living & companionship",
    icon: "HeartHandshake",
    priority: 1,
    shortDescription:
      "Trained, respectful caregivers to support ageing parents with daily routines, mobility, and companionship at home.",
    answerBlock:
      "EzyHelpers provides trained elderly care attendants for families in Bangalore who want dependable support for ageing parents at home. Caregivers help with daily routines, hygiene, meals, mobility, medication reminders, and companionship, while medical care stays with the family's doctors. Families can request day, night, or live-in support after a free consultation.",
    familyConcerns: [
      "Worried about a parent being alone during the day",
      "Difficulty managing mobility, bathing, or meals",
      "Need someone reliable while you are at work or abroad",
      "Want company and routine for a parent feeling isolated",
    ],
    whoItIsFor: [
      "Adult children arranging care for ageing parents",
      "NRIs managing elder care for parents in Bangalore",
      "Elders who need help with daily routines and mobility",
      "Families needing day, night, or live-in elder support",
    ],
    caregiverCanHelpWith: [
      "Daily routine, bathing, grooming, and hygiene help",
      "Meal preparation support and feeding assistance",
      "Mobility support and fall-aware movement around the home",
      "Medication reminders as instructed by the family or doctor",
      "Companionship, conversation, and light engagement",
      "Coordination with family on the elder's day-to-day needs",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide elderly care at home in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families in Bangalore find trained elder care attendants for support at home. Caregivers assist with daily routines, hygiene, meals, mobility, and companionship. Medical needs are handled by the family's doctors.",
      },
      {
        question: "Can I get a live-in caregiver for my elderly parent?",
        answer:
          "Depending on assessment and availability, EzyHelpers can help arrange live-in or long-hour elder care so a trained attendant is present through the day and night to assist and supervise.",
      },
      {
        question: "Will the caregiver give my parent medicines?",
        answer:
          "A caregiver may remind and assist with medicines only as instructed by the family or doctor. They do not prescribe, change, or decide medication.",
      },
      SCOPE_FAQ,
      {
        question: "How quickly can support start?",
        answer:
          "Timing depends on the requirement and caregiver availability. After your enquiry, our team does a quick assessment and shares a suitable, screened caregiver as soon as one is available. We do not promise a fixed same-day placement.",
      },
    ],
  }),
  makeCare({
    slug: "dementia-care",
    name: "Dementia Care",
    conditionType: "dementia",
    careLevel: "memory-care-support",
    supportLevel: "Memory care support",
    icon: "Brain",
    priority: 2,
    shortDescription:
      "Patient, trained caregivers who support dementia patients with routine, safety reminders, and gentle companionship.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for families managing dementia care at home in Bangalore. Caregivers help with daily routines, hygiene, meals, mobility, companionship, and safety reminders while working alongside medical guidance from doctors or specialists. Medical diagnosis and treatment always remain with qualified professionals.",
    familyConcerns: [
      "Parent forgetting routines, medicines, or meals",
      "Worry about wandering or safety at home",
      "Confusion, agitation, or disturbed sleep",
      "Caregiver fatigue within the family",
    ],
    whoItIsFor: [
      "Families caring for a parent with early or advancing dementia",
      "Elders needing a steady routine and gentle supervision",
      "Working families needing day or live-in memory-care support",
      "NRIs arranging dementia support for parents in Bangalore",
    ],
    caregiverCanHelpWith: [
      "Maintaining a calm, consistent daily routine",
      "Gentle reminders for meals, water, and hygiene",
      "Safety awareness and supervision at home",
      "Companionship and reassuring engagement",
      "Mobility and daily-living assistance",
      "Reporting changes to the family for doctor follow-up",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide dementia care at home in Bangalore?",
        answer:
          "Yes. EzyHelpers can help families find trained caregivers for dementia care support at home in Bangalore. Caregivers can assist with routines, hygiene, meals, mobility, companionship, and safety reminders, but medical diagnosis and treatment must remain with qualified doctors.",
      },
      {
        question: "Can a dementia caregiver give medicines?",
        answer:
          "A caregiver may remind or assist the patient with medicines only as instructed by the family or doctor. They should not prescribe, change, or decide medication.",
      },
      {
        question: "Is dementia care available as live-in support?",
        answer:
          "Depending on availability and assessment, EzyHelpers may help arrange live-in or long-hour caregiver support for dementia patients who need regular assistance and supervision at home.",
      },
      SCOPE_FAQ,
      {
        question: "How does a caregiver handle confusion or agitation?",
        answer:
          "Trained caregivers use calm, patient, and respectful methods — keeping a steady routine, gentle reassurance, and a safe environment. Any significant change is reported to the family so the doctor can advise.",
      },
    ],
  }),
  makeCare({
    slug: "palliative-care",
    name: "Palliative Care Support",
    conditionType: "palliative",
    careLevel: "palliative-support",
    supportLevel: "Comfort & palliative support",
    icon: "HandHeart",
    priority: 3,
    shortDescription:
      "Compassionate attendant support focused on comfort, hygiene, and dignity for patients with serious illness.",
    answerBlock:
      "EzyHelpers provides trained caregiver and attendant support for palliative care at home in Bangalore, focused on comfort, daily assistance, hygiene, feeding support, companionship, and family coordination for people with serious or long-term illness. Pain management and medical decisions are handled by qualified doctors or nurses; our caregivers support the family alongside the medical team.",
    familyConcerns: [
      "Wanting comfort and dignity for a seriously ill family member",
      "Help with hygiene, feeding, and positioning",
      "Emotional support and companionship for the patient",
      "Coordination support for the family during a hard time",
    ],
    whoItIsFor: [
      "Families caring for a relative with serious or long-term illness",
      "Patients needing comfort-focused daily support at home",
      "Families needing respite and steady attendant help",
    ],
    caregiverCanHelpWith: [
      "Comfort-focused daily-living and hygiene assistance",
      "Feeding support and gentle positioning",
      "Companionship and emotional reassurance",
      "Keeping the patient's surroundings clean and calm",
      "Following the care routine advised by doctors or nurses",
      "Coordinating day-to-day needs with the family",
    ],
    faqs: [
      {
        question: "What is palliative care support at home?",
        answer:
          "Palliative care support at home focuses on comfort, daily assistance, hygiene, feeding support, companionship, mobility help, and family coordination for people with serious or long-term illness. Medical decisions and pain management must be handled by qualified doctors or nurses.",
      },
      {
        question: "Does EzyHelpers provide nurses for palliative care?",
        answer:
          "EzyHelpers primarily provides caregiver and attendant support unless a qualified nursing service is specifically confirmed. We clearly distinguish between caregiver support and clinical nursing care, and will tell you which one applies to your requirement.",
      },
      SCOPE_FAQ,
      {
        question: "Can palliative support be arranged as live-in care?",
        answer:
          "Yes, subject to assessment and availability. Many families prefer live-in or long-hour attendant support so the patient has steady comfort-focused help through the day and night.",
      },
    ],
  }),
  makeCare({
    slug: "patient-care",
    name: "Patient Care",
    conditionType: "patient-attendant",
    careLevel: "daily-living-support",
    supportLevel: "Patient attendant support",
    icon: "Stethoscope",
    priority: 4,
    shortDescription:
      "Reliable patient attendants for daily support, hygiene, mobility, and companionship at home.",
    answerBlock:
      "EzyHelpers provides trained patient attendant support at home in Bangalore for families caring for an unwell or recovering relative. Attendants help with daily routines, hygiene, mobility, feeding, and companionship, and follow the care routine advised by doctors. Clinical treatment and nursing decisions remain with qualified medical professionals.",
    familyConcerns: [
      "Need a dependable attendant for a recovering patient",
      "Help with hygiene, mobility, and feeding",
      "Someone present while the family is at work",
      "Support after hospital discharge",
    ],
    whoItIsFor: [
      "Families with a patient needing an attendant at home",
      "Recovering or chronically ill patients needing daily help",
      "Working families needing day, night, or live-in support",
    ],
    caregiverCanHelpWith: [
      "Daily hygiene, bathing, and grooming assistance",
      "Mobility support and safe movement at home",
      "Feeding support and meal assistance",
      "Medication reminders as instructed",
      "Companionship and routine support",
      "Following doctor's daily-care instructions",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide patient attendants at home in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find trained patient attendants for daily support at home in Bangalore, including hygiene, mobility, feeding, and companionship. Clinical care stays with doctors and nurses.",
      },
      {
        question: "What is the difference between a patient attendant and a nurse?",
        answer:
          "A patient attendant supports daily living — hygiene, mobility, feeding, and companionship. A nurse provides clinical care such as injections, wound care, and medical monitoring. EzyHelpers primarily provides attendant support unless qualified nursing is specifically arranged.",
      },
      SCOPE_FAQ,
      {
        question: "Can I get an attendant after hospital discharge?",
        answer:
          "Yes. Many families arrange a patient attendant for the recovery period after discharge to help with daily routines and mobility, following the doctor's instructions.",
      },
    ],
  }),
  makeCare({
    slug: "post-operative-care",
    name: "Post-Operative Care",
    conditionType: "post-operative",
    careLevel: "post-operative-support",
    supportLevel: "Recovery support",
    icon: "BriefcaseMedical",
    priority: 5,
    shortDescription:
      "Attendant support for the recovery period after surgery — mobility, hygiene, and daily routines at home.",
    answerBlock:
      "EzyHelpers provides trained attendant support for post-operative care at home in Bangalore, helping patients during recovery with mobility, hygiene, feeding, and daily routines while following the doctor's discharge instructions. Wound care, medication decisions, and clinical monitoring remain with qualified medical professionals.",
    familyConcerns: [
      "Managing recovery safely after hospital discharge",
      "Help with limited mobility and daily routines",
      "Support with hygiene and feeding during recovery",
      "Someone reliable present during the recovery weeks",
    ],
    whoItIsFor: [
      "Patients recovering at home after surgery",
      "Families needing recovery support after discharge",
      "Elders needing extra help during post-operative recovery",
    ],
    caregiverCanHelpWith: [
      "Safe mobility and movement support during recovery",
      "Hygiene, bathing, and grooming assistance",
      "Feeding support and meal assistance",
      "Medication reminders as instructed by the doctor",
      "Maintaining a clean, restful environment",
      "Following the doctor's discharge and care instructions",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide post-operative care at home in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families arrange trained attendant support for post-operative recovery at home in Bangalore, including mobility, hygiene, and daily routines, following the doctor's discharge instructions.",
      },
      {
        question: "Can the attendant do wound dressing or injections?",
        answer:
          "No. Wound dressing, injections, and clinical procedures must be done by a qualified nurse or medical professional. EzyHelpers attendants provide daily-living and recovery support, not clinical care, unless qualified nursing is specifically arranged.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "bedridden-patient-care",
    name: "Bedridden Patient Care",
    conditionType: "bedridden",
    careLevel: "bedridden-support",
    supportLevel: "Bedridden support",
    icon: "BedDouble",
    priority: 6,
    shortDescription:
      "Attentive attendants for bedridden patients — hygiene, positioning, feeding, and comfort at home.",
    answerBlock:
      "EzyHelpers provides trained attendant support for bedridden patient care at home in Bangalore, helping with hygiene, positioning, feeding, and comfort while following the care routine advised by doctors. Clinical procedures and medical monitoring remain with qualified nurses and doctors.",
    familyConcerns: [
      "Daily hygiene and cleanliness for a bedridden patient",
      "Regular positioning for comfort and to prevent stiffness",
      "Feeding and fluid support",
      "Steady, respectful attendant presence",
    ],
    whoItIsFor: [
      "Families caring for a bedridden elder or patient",
      "Patients needing full daily-living assistance",
      "Families needing day, night, or live-in attendant support",
    ],
    caregiverCanHelpWith: [
      "Hygiene, sponge bathing, and cleanliness",
      "Gentle, regular positioning for comfort",
      "Feeding and fluid support",
      "Keeping bedding and surroundings clean",
      "Companionship and reassurance",
      "Following the care routine advised by the medical team",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide bedridden patient care at home?",
        answer:
          "Yes. EzyHelpers helps families find trained attendants for bedridden patient care at home in Bangalore — supporting hygiene, positioning, feeding, and comfort while following the doctor's care routine.",
      },
      {
        question: "Can the attendant handle medical procedures for bedridden patients?",
        answer:
          "No. Medical procedures, catheter care, and clinical monitoring must be done by qualified nurses. EzyHelpers attendants provide daily-living and comfort support unless qualified nursing is specifically arranged.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "parkinsons-care",
    name: "Parkinson's Care Support",
    conditionType: "parkinsons",
    careLevel: "mobility-support",
    supportLevel: "Mobility & daily support",
    icon: "Activity",
    priority: 7,
    shortDescription:
      "Patient caregivers who support Parkinson's patients with mobility, routine, and daily-living help.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for Parkinson's care at home in Bangalore, helping patients with mobility, daily routines, hygiene, feeding, and companionship while following the guidance of their doctors and physiotherapists. Medical treatment and therapy decisions remain with qualified professionals.",
    familyConcerns: [
      "Help with movement, balance, and fall safety",
      "Support with daily routines and hygiene",
      "Patience and consistency for tremor-related needs",
      "Following physiotherapy and doctor instructions at home",
    ],
    whoItIsFor: [
      "Families supporting a relative with Parkinson's",
      "Patients needing mobility and daily-living help",
      "Families needing day or live-in caregiver support",
    ],
    caregiverCanHelpWith: [
      "Mobility support and fall-aware assistance",
      "Daily hygiene, grooming, and dressing help",
      "Feeding support, especially where movement is difficult",
      "Following physiotherapy or doctor instructions at home",
      "Companionship and steady routine",
      "Reporting changes to the family for medical follow-up",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide Parkinson's care support at home?",
        answer:
          "Yes. EzyHelpers helps families find trained caregivers for Parkinson's care support at home in Bangalore — assisting with mobility, daily routines, hygiene, and companionship while following the doctor's and physiotherapist's guidance.",
      },
      {
        question: "Can a caregiver do physiotherapy for Parkinson's?",
        answer:
          "A caregiver can help the patient follow exercises and routines advised by a qualified physiotherapist, but does not replace a physiotherapist or doctor. Therapy plans must be set by professionals.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "stroke-care",
    name: "Stroke Recovery Support",
    conditionType: "stroke",
    careLevel: "mobility-support",
    supportLevel: "Recovery & mobility support",
    icon: "HeartPulse",
    priority: 8,
    shortDescription:
      "Caregivers who support stroke recovery at home with mobility, daily routines, and patient encouragement.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for stroke recovery at home in Bangalore, helping patients with mobility, daily routines, hygiene, feeding, and encouragement while following the rehabilitation plan set by doctors and physiotherapists. Medical and therapy decisions remain with qualified professionals.",
    familyConcerns: [
      "Help with mobility and movement after a stroke",
      "Support with hygiene, feeding, and dressing",
      "Following the rehabilitation routine at home",
      "Patient, encouraging daily support",
    ],
    whoItIsFor: [
      "Families supporting a relative recovering from a stroke",
      "Patients needing mobility and daily-living help at home",
      "Families needing day or live-in caregiver support",
    ],
    caregiverCanHelpWith: [
      "Mobility support and safe movement assistance",
      "Hygiene, dressing, and grooming help",
      "Feeding support where movement or speech is affected",
      "Helping the patient follow prescribed exercises",
      "Companionship and patient encouragement",
      "Reporting progress and changes to the family",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide stroke recovery support at home?",
        answer:
          "Yes. EzyHelpers helps families find trained caregivers for stroke recovery support at home in Bangalore — assisting with mobility, daily routines, hygiene, and encouragement while following the doctor's and physiotherapist's rehabilitation plan.",
      },
      {
        question: "Can a caregiver provide stroke rehabilitation therapy?",
        answer:
          "A caregiver can help the patient follow the exercises and routines set by a qualified physiotherapist or doctor, but does not replace clinical rehabilitation. Therapy must be planned and supervised by professionals.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "companion-care",
    name: "Companion Care",
    conditionType: "companionship",
    careLevel: "companion-care",
    supportLevel: "Companionship",
    icon: "Users",
    priority: 9,
    shortDescription:
      "Warm companionship and light daily support for elders who are mostly independent but often alone.",
    answerBlock:
      "EzyHelpers provides trained companion caregivers in Bangalore for elders who are mostly independent but need company, light daily support, and a watchful presence at home. Companions help with conversation, routine, light tasks, and outings, giving families reassurance that someone caring is around.",
    familyConcerns: [
      "A parent feeling lonely or isolated",
      "Wanting a friendly, reliable presence at home",
      "Light help with routine and outings",
      "Reassurance while the family is away",
    ],
    whoItIsFor: [
      "Elders who are mostly independent but often alone",
      "Families wanting companionship and a watchful presence",
      "NRIs wanting a caring presence for parents",
    ],
    caregiverCanHelpWith: [
      "Friendly conversation and companionship",
      "Light daily routine and reminders",
      "Accompanying for short walks or outings",
      "Light tasks and engagement activities",
      "Alerting the family to any concerns",
    ],
    caregiverCannotDo: [
      "Medical diagnosis or deciding treatment",
      "Prescribing or changing medication",
      "Clinical or nursing procedures",
      "Heavy patient-care tasks beyond companionship scope",
    ],
    faqs: [
      {
        question: "What is companion care?",
        answer:
          "Companion care is friendly, supportive presence for elders who are mostly independent. EzyHelpers companions provide conversation, light daily support, and a watchful presence at home, giving families reassurance.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "night-caregiver",
    name: "Night Caregiver",
    conditionType: "overnight-attendant",
    careLevel: "night-care-support",
    supportLevel: "Overnight attendant",
    icon: "Moon",
    priority: 10,
    shortDescription:
      "Overnight attendant support so elders and patients are safe and assisted through the night.",
    answerBlock:
      "EzyHelpers provides trained night caregivers and overnight attendants in Bangalore so elders and patients are safe and supported through the night. Night caregivers assist with toileting, repositioning, hydration, and supervision, giving families restful nights with peace of mind.",
    familyConcerns: [
      "Worry about night-time safety and falls",
      "Help with toileting and repositioning at night",
      "Disturbed sleep for family caregivers",
      "A watchful presence through the night",
    ],
    whoItIsFor: [
      "Elders or patients needing night-time supervision",
      "Families needing overnight attendant support",
      "Bedridden or recovering patients needing night care",
    ],
    caregiverCanHelpWith: [
      "Night-time supervision and safety awareness",
      "Toileting and repositioning support",
      "Hydration and comfort through the night",
      "Responding to the patient's needs overnight",
      "Reporting the night to the family and day caregiver",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide night caregivers in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families arrange trained night caregivers and overnight attendants in Bangalore for elders and patients who need supervision, toileting, repositioning, and comfort support through the night.",
      },
      SCOPE_FAQ,
    ],
  }),
];

export function getCareService(slug: string): CareService | undefined {
  return CARE_SERVICES.find((s) => s.slug === slug);
}
