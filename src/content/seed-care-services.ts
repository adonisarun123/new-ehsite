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
  makeCare({
    slug: "special-needs-care",
    name: "Special Needs Care",
    conditionType: "special-needs",
    careLevel: "daily-living-support",
    supportLevel: "Child special-needs support",
    icon: "Baby",
    priority: 11,
    shortDescription:
      "Patient, trained caregivers who support children with special needs in their daily home routines — hygiene, meals, supervision, and emotional care.",
    answerBlock:
      "EzyHelpers provides trained, non-medical caregivers in Bangalore who support children with special needs in their daily home routines — hygiene, meals, supervision, emotional care, and therapy-routine support as guided by parents or doctors. Caregivers are background-verified, and families can choose live-in, full-time, or part-time support after a free consultation.",
    heroTitle: "Special Needs Caregiver for Your Child at Home in Bangalore",
    heroSubtitle:
      "Every child deserves patient and understanding care. Trained, verified caregivers support children with special needs in their daily home routines — with hygiene, meals, supervision, emotional care, and therapy support as guided by parents or doctors.",
    familyConcerns: [
      "Needing daily home support for a child with special care needs",
      "Managing routines around autism, ADHD, slow learning, or mild physical challenges",
      "Needing reliable, patient supervision while parents are at work",
      "No nearby relatives for regular childcare support",
    ],
    whoItIsFor: [
      "Parents needing daily home support for children with special care needs",
      "Families managing autism, ADHD, learning difficulties, or mild physical challenges",
      "Working parents needing reliable and patient supervision at home",
      "Families without nearby relatives for regular childcare support",
      "Parents looking for routine-based, non-medical care at home",
    ],
    caregiverCanHelpWith: [
      "Hygiene assistance and meal support through the day",
      "Following therapy and learning routines as guided by parents or doctors",
      "Educational play and gentle communication encouragement",
      "Mobility assistance and safe supervision at home",
      "Emotional comfort, patience, and routine-habit support",
      "Medicine reminders as instructed by parents or the doctor",
      "Support during outdoor visits when agreed with the family",
    ],
    caregiverCannotDo: [
      "Medical diagnosis or deciding treatment",
      "Prescribing or changing medication",
      "Therapy or special education in place of qualified therapists or educators",
      "Clinical or nursing procedures unless a qualified nurse is specifically arranged",
      "Emergency medical response in place of a hospital or ambulance",
    ],
    recommendedCaregiverProfile: [
      "Experience supporting children with special needs at home",
      "Calm, patient, and engaging temperament",
      "Comfortable following parent-set and doctor-advised routines",
      "Careful about child safety and supervision",
    ],
    careOptions: [
      "Live-in special needs caregiver (full-day support at home)",
      "Full-time caregiver (8–10 hours, daytime)",
      "Part-time caregiver (flexible hours, including evenings or weekends)",
    ],
    familyChecklist: [
      "Note your child's daily routine, meal times, and rest times",
      "List therapy activities or exercises advised by doctors or therapists",
      "Share how your child communicates and what comforts them",
      "Keep doctor's instructions and any medicines organised",
      "Decide preferred support hours (live-in, full-time, or part-time)",
      "Share any language or food preferences",
    ],
    faqs: [
      {
        question: "What is a special needs caregiver at EzyHelpers?",
        answer:
          "A special needs caregiver is a trained, non-medical helper who supports your child's daily home routines — hygiene, meals, supervision, play, emotional care, and therapy-routine support as guided by parents or doctors. They are background-verified before placement.",
      },
      {
        question: "Do caregivers provide therapy or medical treatment?",
        answer:
          "No. Caregivers do not provide therapy, special education, or medical treatment. They can help your child follow routines and activities advised by qualified therapists or doctors, but the therapy plan itself stays with the professionals.",
      },
      {
        question: "Can you support children with specific conditions?",
        answer:
          "Our caregivers support children with needs such as autism, ADHD, learning difficulties, speech delay, and mild physical or mobility challenges, focusing on daily routines and supervision. Share your child's needs during the consultation so we can match a suitable caregiver.",
      },
      {
        question: "Are female caregivers available?",
        answer:
          "Share your preference during the enquiry. We try to match a caregiver who suits your family's preference, subject to availability.",
      },
      {
        question: "What if my child takes time to bond with the caregiver?",
        answer:
          "Every child adjusts at their own pace. Caregivers work with patience and follow familiar routines set by parents to build trust gradually. If the match is not right, we help arrange a replacement.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "cancer-care",
    name: "Cancer Care Support",
    conditionType: "cancer",
    careLevel: "serious-illness-support",
    supportLevel: "Treatment-phase daily support",
    icon: "HandHeart",
    priority: 12,
    shortDescription:
      "Compassionate caregiver support for cancer patients through treatment, recovery, and the long months in between — comfort, routine, and family coordination.",
    answerBlock:
      "EzyHelpers provides trained caregiver and attendant support for families managing cancer care at home in Bangalore. Caregivers help with daily routines, hygiene awareness during low-immunity periods, meal and hydration support, fatigue-paced activity, companionship, and accompaniment to appointments. Chemotherapy, port and line care, and all clinical decisions remain with the oncology team and qualified nurses.",
    familyConcerns: [
      "Supporting a loved one through treatment cycles and the fatigue between them",
      "Keeping hygiene and food safety careful during low-immunity periods",
      "Help with meals and hydration when appetite and energy are low",
      "Someone steady at home while the family manages work and hospital visits",
      "Emotional heaviness — for the patient and for the family",
    ],
    whoItIsFor: [
      "Families supporting a relative through cancer treatment",
      "Patients needing daily help during recovery between treatment cycles",
      "Patients in long-term remission who still need routine and energy support",
      "Families wanting comfort-focused support alongside palliative guidance",
    ],
    caregiverCanHelpWith: [
      "Daily routines, hygiene, and grooming paced to the patient's energy",
      "Meal and hydration support, including small frequent meals as advised",
      "Careful hand hygiene and cleanliness awareness during low-immunity periods",
      "Rest-and-activity routines for treatment-related fatigue",
      "Companionship, reassurance, and gentle presence on hard days",
      "Accompanying the patient to appointments when agreed with the family",
      "Reporting changes the family should raise with the oncology team",
    ],
    caregiverCannotDo: [
      "Administering chemotherapy or any cancer treatment",
      "Port, PICC line, or catheter care — these need a qualified nurse",
      "Medical diagnosis, prescribing, or changing medication",
      "Clinical monitoring or emergency medical response in place of the hospital",
    ],
    recommendedCaregiverProfile: [
      "Experience supporting seriously ill patients at home",
      "Gentle, patient, and emotionally steady temperament",
      "Careful about hygiene and infection-awareness routines",
      "Able to follow the family's and oncology team's instructions exactly",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide cancer care at home in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find trained caregivers and attendants to support cancer patients at home in Bangalore — with daily routines, hygiene, meals, fatigue-paced activity, and companionship. All medical treatment stays with the oncology team.",
      },
      {
        question: "Can the caregiver give chemotherapy or look after a chemo port at home?",
        answer:
          "No. Chemotherapy is administered only by qualified medical professionals, and port or line care needs a qualified nurse. EzyHelpers caregivers provide daily-living and comfort support, and can alert the family if anything around a port or dressing looks unusual so the medical team can act.",
      },
      {
        question: "How does the caregiver protect a patient with low immunity?",
        answer:
          "Caregivers follow careful hand hygiene, keep the patient's surroundings clean, and are attentive with food preparation and visitors during low-immunity periods, as guided by the family and the doctor's instructions. Any sign of fever or infection is reported to the family immediately so the medical team can respond.",
      },
      {
        question: "Can the caregiver accompany my parent to treatment appointments?",
        answer:
          "Yes, where agreed with the family, the caregiver can accompany the patient to appointments and help with comfort, mobility, and waiting-time support. Transport and medical discussions remain with the family and doctors.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "respite-care",
    name: "Respite Care",
    conditionType: "respite",
    careLevel: "short-term-relief",
    supportLevel: "Short-term relief care",
    icon: "Users",
    priority: 13,
    shortDescription:
      "Short-term relief caregivers who hold your routine while family caregivers travel, work, or simply rest.",
    answerBlock:
      "EzyHelpers provides short-term respite caregivers in Bangalore so family caregivers can take a real break — for travel, work, a function, or rest — while a trained, verified caregiver follows the existing routine at home. Respite caregivers come from the same screened pool as long-term placements, start with a handover briefing from the family, and can convert to longer-term support if the family chooses.",
    familyConcerns: [
      "Needing to travel or attend a function without leaving a loved one alone",
      "Family caregiver exhaustion and the guilt of stepping away",
      "Worry that a temporary caregiver won't follow the routine you've built",
      "Wanting a low-pressure way to try professional care before committing",
    ],
    whoItIsFor: [
      "Family caregivers who need a break for travel, work, or their own health",
      "Families wanting cover for a few days, a week, or longer stretches",
      "Elders and patients whose routine must continue while the family is away",
      "Families considering long-term care who want to try it first",
    ],
    caregiverCanHelpWith: [
      "Following the family's existing routine — meals, hygiene, rest, and timings",
      "Daily-living, mobility, and companionship support in the family's absence",
      "Medication reminders exactly as the family has instructed",
      "Keeping notes and updating the family while they are away",
      "A structured handover with the family caregiver before and after the break",
    ],
    careOptions: [
      "Short cover for a day or a few days",
      "Week-long or month-long relief cover",
      "Recurring respite — a fixed day off or weekend each month for the family caregiver",
    ],
    familyChecklist: [
      "Write down the daily routine — meals, medicines, rest, and preferences",
      "Plan a handover conversation with the respite caregiver before you leave",
      "Share emergency contacts and the doctor's details",
      "Note anything that comforts or unsettles your loved one",
      "Decide how often you'd like updates while you are away",
    ],
    faqs: [
      {
        question: "What is respite care at home?",
        answer:
          "Respite care is short-term caregiver support that gives family caregivers a break. A trained EzyHelpers caregiver follows the routine the family has built — meals, hygiene, medicines, rest — so the family can travel, work, or recover, knowing their loved one is looked after.",
      },
      {
        question: "Will a short-term caregiver follow our existing routine?",
        answer:
          "Yes. The placement starts with a handover briefing from the family, and we encourage written routine notes covering meals, medication timings, and preferences. The goal is that as little changes as possible for your loved one.",
      },
      {
        question: "Are respite caregivers as carefully screened as long-term ones?",
        answer:
          "Yes. Respite caregivers come from the same verified, background-checked, and trained pool as our long-term placements. There is no separate lower tier for short-term cover.",
      },
      {
        question: "Can respite care turn into long-term care?",
        answer:
          "Yes. Many families use respite cover as a way to experience professional caregiving first. If it works well, we can help you continue with the same caregiver or arrange a suitable long-term placement.",
      },
      {
        question: "Is respite care suitable for dementia or bedridden patients?",
        answer:
          "Often yes, subject to assessment. Share the condition and routine during the enquiry so we can match a caregiver with relevant experience, such as dementia or bedridden care.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "diabetes-care",
    name: "Diabetes Care Support",
    conditionType: "diabetes",
    careLevel: "chronic-condition-support",
    supportLevel: "Daily routine & monitoring support",
    icon: "Activity",
    priority: 14,
    shortDescription:
      "Steady daily support for elderly diabetics — meal timing, medicine reminders, walking support, and watchful foot-care awareness.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for diabetes care at home in Bangalore, helping elders keep the daily routine that diabetes control depends on — consistent meal timings, medicine and insulin reminders, gentle activity, and daily foot checks for cuts or slow-healing wounds. Caregivers can assist with sugar checks using a family-provided glucometer as instructed, while insulin injections and all medical decisions remain with qualified nurses and doctors.",
    familyConcerns: [
      "Sugar readings, tablets, and insulin timings getting mixed up or skipped",
      "Worry about low-sugar episodes when no one is at home",
      "Diet control failing without supervision of meals and timings",
      "Foot wounds or numbness that need daily watchfulness",
      "Children living elsewhere who want regular updates on the routine",
    ],
    whoItIsFor: [
      "Elders with diabetes whose daily routine needs steady supervision",
      "Families worried about missed medicines or skipped meals",
      "Patients whose doctor has advised regular monitoring and gentle activity",
      "NRIs and working families who want daily updates on the routine",
    ],
    caregiverCanHelpWith: [
      "Consistent meal timings and diabetic-friendly meal support as the family plans",
      "On-time reminders for tablets and insulin doses as instructed",
      "Assisting with sugar checks using a family-provided glucometer, as instructed, and noting readings for the family and doctor",
      "Gentle daily activity and walking support as the doctor advises",
      "Daily awareness of feet — noticing cuts, blisters, or slow-healing wounds and telling the family",
      "Alerting the family immediately if signs like sweating, dizziness, or confusion appear",
    ],
    caregiverCannotDo: [
      "Giving insulin injections or any injections — these need a qualified nurse",
      "Deciding or changing medicine doses or the diet plan",
      "Interpreting sugar readings or making medical judgements from them",
      "Medical diagnosis, wound treatment, or emergency medical response in place of a hospital",
    ],
    faqs: [
      {
        question: "Can the caregiver give insulin injections?",
        answer:
          "No. Injections must be given by a qualified nurse or medical professional, or self-administered by the patient as their doctor has taught. EzyHelpers caregivers can remind, assist with supplies, and keep timings on track, but they do not administer injections.",
      },
      {
        question: "Can the caregiver check blood sugar at home?",
        answer:
          "A caregiver can assist with sugar checks using a glucometer the family provides, following the family's and doctor's instructions, and note the readings so the family and doctor always have a clear picture. Interpreting readings and adjusting treatment remain with the doctor.",
      },
      {
        question: "How does the caregiver help with a diabetic diet?",
        answer:
          "Caregivers help keep meal timings consistent, support the meal plan the family and doctor have set, and keep a polite watch on sweets and skipped meals. They do not design diet plans — that stays with the doctor or dietician.",
      },
      {
        question: "What happens if there is a low-sugar episode?",
        answer:
          "Caregivers are briefed to notice warning signs like sweating, shakiness, or confusion, follow the family's agreed plan, and alert the family and doctor immediately. They support the response — they do not replace medical care or emergency services.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "ms-als-care",
    name: "MS & ALS Care Support",
    conditionType: "ms-als",
    careLevel: "progressive-condition-support",
    supportLevel: "Progressive neuro support",
    icon: "Brain",
    priority: 15,
    shortDescription:
      "Energy-aware, patient caregiver support for multiple sclerosis and ALS — safe transfers, fatigue-paced routines, and care that adapts as needs change.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for families managing multiple sclerosis (MS) or ALS at home in Bangalore. Caregivers help with mobility and transfers as strength changes, fatigue-paced daily routines, hygiene, careful unhurried feeding following clinical advice, and steady companionship — with the care plan reviewed as the condition progresses. Diagnosis, treatment, and all clinical procedures remain with neurologists, therapists, and qualified nurses.",
    familyConcerns: [
      "Transfers, dressing, and mealtimes becoming unsafe to manage alone",
      "Fatigue making everyday tasks exhausting for the patient and spouse",
      "Swallowing changes that make meals slow and worrying",
      "A condition that keeps changing, so today's plan may not fit next year",
      "The primary family carer burning out",
    ],
    whoItIsFor: [
      "Families supporting a relative with MS or ALS (motor neurone disease)",
      "Patients whose mobility, energy, or swallowing is changing",
      "Households using wheelchairs, hospital beds, or transfer aids at home",
      "Families who want care that is reassessed as needs progress",
    ],
    caregiverCanHelpWith: [
      "Safe, patient assistance with walking, transfers, and repositioning",
      "Energy-conserving daily routines with planned rest periods",
      "Unhurried feeding support following the pace, posture, and food-consistency guidance set by the clinical team",
      "Hygiene, dressing, and positioning care",
      "Working carefully around wheelchairs, hospital beds, and aids the family has in place",
      "Patient communication support, using boards or devices the family provides",
      "Companionship for the patient and practical relief for the family",
    ],
    caregiverCannotDo: [
      "Medical diagnosis or deciding treatment",
      "Prescribing or changing medication",
      "Clinical procedures such as suction, feeding tubes, or ventilator/BiPAP management — these need qualified professionals",
      "Swallowing assessment or therapy — that remains with the clinical team",
      "Emergency medical response in place of a hospital or ambulance",
    ],
    recommendedCaregiverProfile: [
      "Experience supporting patients with limited or changing mobility",
      "Calm, patient temperament suited to slow, careful assistance",
      "Comfortable with transfers, positioning, and equipment at home",
      "Able to follow clinical instructions on feeding and movement exactly",
    ],
    faqs: [
      {
        question: "Does EzyHelpers provide MS and ALS care support at home in Bangalore?",
        answer:
          "Yes. EzyHelpers helps families find trained caregivers for MS and ALS support at home — assisting with mobility, transfers, fatigue-paced routines, hygiene, and careful feeding support, while all medical care stays with the neurologist and clinical team.",
      },
      {
        question: "How does care adapt as the condition progresses?",
        answer:
          "MS and ALS change over time, so we encourage families to reassess the care plan with us as strength, mobility, or speech changes — stepping up hours or moving to live-in support when needed, and adjusting what the caregiver helps with.",
      },
      {
        question: "Can the caregiver help with swallowing difficulties at mealtimes?",
        answer:
          "A caregiver can follow the pace, posture, and food-consistency guidance set by the doctor or speech-swallow specialist, keep mealtimes unhurried, and alert the family if swallowing seems to be changing. Swallowing assessment and therapy remain with qualified professionals.",
      },
      {
        question: "Can caregivers work alongside physiotherapists?",
        answer:
          "Yes. Caregivers can help the patient practise routines and exercises a qualified physiotherapist has set, and keep the family informed — but they do not replace the physiotherapist.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "post-stroke-speech-support",
    name: "Post-Stroke Speech Support",
    conditionType: "post-stroke-speech",
    careLevel: "rehabilitation-support",
    supportLevel: "Therapy-routine & mealtime support",
    icon: "HeartPulse",
    priority: 16,
    shortDescription:
      "Caregiver support that helps stroke survivors practise speech-therapist-set exercises and eat safely between therapy sessions.",
    heroTitle: "Post-Stroke Speech Support at Home in Bangalore",
    heroSubtitle:
      "Trained, verified caregivers who support stroke survivors alongside a qualified speech therapist — helping with daily practice routines, safe unhurried mealtimes, and patient communication at home.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for families helping a stroke survivor regain speech and safe swallowing at home in Bangalore. Working alongside the speech therapist the family has engaged, caregivers help the patient practise the exercises the therapist has set, keep mealtimes safe and unhurried following clinical guidance, and communicate patiently through the day. The therapy itself — assessment, exercises, and progression — remains with the qualified speech-language therapist and the medical team.",
    familyConcerns: [
      "The hospital therapist set daily exercises, but no one at home can keep the practice going",
      "Coughing or choking at meals makes the family anxious about every lunch and dinner",
      "Frustration at not being understood is turning into withdrawal",
      "Therapy gains fade because nothing is practised between sessions",
      "Family lives far away and wants someone patient present every day",
    ],
    whoItIsFor: [
      "Stroke survivors working with a speech therapist on aphasia, slurred speech, or swallowing",
      "Families who need daily practice support between therapy sessions",
      "Patients whose mealtimes need watchful, unhurried supervision",
      "Families wanting a patient, encouraging presence through recovery",
    ],
    caregiverCanHelpWith: [
      "Helping the patient practise daily exercises exactly as the speech therapist has set them",
      "Safe, unhurried mealtimes following the posture, pacing, and food-consistency guidance from the clinical team",
      "Patient, encouraging communication — talking with the patient, not over them",
      "Using communication boards or devices the family has in place",
      "Keeping simple notes on practice and mealtimes to share with the family and therapist",
      "Daily-living, hygiene, and mobility support alongside the speech-recovery routine",
      "Alerting the family to coughing, choking, or changes the therapist should know about",
    ],
    caregiverCannotDo: [
      "Speech, language, or swallowing therapy itself — assessment, exercise planning, and progression remain with a qualified speech-language therapist",
      "Medical diagnosis or deciding treatment",
      "Prescribing or changing medication",
      "Swallowing assessments or any clinical procedure",
      "Emergency medical response in place of a hospital or ambulance",
    ],
    recommendedCaregiverProfile: [
      "Experience supporting stroke or neuro-recovery patients at home",
      "Patient, encouraging, and unhurried temperament",
      "Comfortable following a therapist's written routine carefully",
      "Attentive at mealtimes and alert to choking warning signs",
    ],
    metaDescription:
      "Caregiver support for stroke survivors at home in Bangalore — daily practice of therapist-set speech exercises, safe unhurried mealtimes, and patient communication support, alongside a qualified speech therapist.",
    faqs: [
      {
        question: "Does EzyHelpers provide speech therapy at home?",
        answer:
          "No. Speech and swallowing therapy must be provided by a qualified speech-language therapist. EzyHelpers provides trained caregivers who support the patient alongside the therapist — helping with daily practice of the exercises the therapist has set, safe mealtimes, and patient communication.",
      },
      {
        question: "How does a caregiver help between therapy sessions?",
        answer:
          "Recovery happens every day, not just during sessions. The caregiver helps the patient practise the therapist's exercises daily, keeps mealtimes safe and consistent, communicates patiently, and keeps simple notes the family can share with the therapist.",
      },
      {
        question: "Can the caregiver make mealtimes safer after a stroke?",
        answer:
          "Yes, within clear limits. The caregiver follows the posture, pacing, and food-consistency guidance the clinical team has given, keeps meals unhurried, and alerts the family to coughing or choking. Swallowing assessment and any clinical decisions stay with the medical team.",
      },
      {
        question: "Do we need to arrange the speech therapist separately?",
        answer:
          "Yes. The speech therapist is engaged by the family with their doctor's guidance. Tell us about the therapy plan during the consultation so we can match a caregiver who will support it well at home.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "arthritis-care",
    name: "Arthritis & Joint Pain Care",
    conditionType: "arthritis",
    careLevel: "mobility-support",
    supportLevel: "Pain-sensitive daily support",
    icon: "ShieldCheck",
    priority: 17,
    shortDescription:
      "Pain-sensitive, fall-aware caregivers for elders with arthritis, joint pain, or osteoporosis — bathing, dressing, walking, and stairs at their own pace.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for elders with arthritis, joint pain, or osteoporosis at home in Bangalore. Caregivers help with bathing, dressing, and grooming at a pain-sensitive pace, support walking, stairs, and transfers with fall awareness, keep pain-medication reminders on time as prescribed, and help the elder keep gently moving as the doctor advises. Diagnosis, treatment, physiotherapy, and massage remain with qualified professionals.",
    familyConcerns: [
      "Bathing or dressing has become painful without help",
      "A recent fall or near-fall on the stairs or in the bathroom",
      "Daily walks have stopped because of pain or fear of falling",
      "No one at home during high-risk moments — bathing, stairs, night",
      "Pain medicines being missed without steady reminders",
    ],
    whoItIsFor: [
      "Elders with arthritis or joint pain who need daily-living help",
      "Seniors with osteoporosis who need careful, fracture-aware support",
      "Families worried about falls on stairs and in bathrooms",
      "Elders whose doctor has advised assisted gentle movement",
    ],
    caregiverCanHelpWith: [
      "Bathing, dressing, and grooming at the elder's own pace — never rushed",
      "Steady walking support indoors and on doctor-approved walks outside",
      "Help on stairs and with bed, chair, and toilet transfers without joint strain",
      "Supporting use of walkers, sticks, and commode chairs where used",
      "On-time pain-medication and supplement reminders as prescribed",
      "Warm-compress comfort routines as instructed by the family or doctor",
      "Reporting pain flare-ups or new swelling to the family for doctor follow-up",
    ],
    caregiverCannotDo: [
      "Massage or physiotherapy — these need qualified professionals",
      "Medical diagnosis or deciding treatment",
      "Prescribing or changing pain medication",
      "Clinical procedures or injections",
      "Emergency medical response in place of a hospital or ambulance",
    ],
    faqs: [
      {
        question: "Does the caregiver do massage or physiotherapy for joint pain?",
        answer:
          "No. Massage and physiotherapy must be done by qualified professionals. The caregiver can help the elder follow gentle movement routines a doctor or physiotherapist has advised, and support comfort routines like a warm compress as the family instructs.",
      },
      {
        question: "How does a caregiver keep bathing safe for someone with joint pain?",
        answer:
          "With patience and preparation — stable seating, support on the painful side, no pulling or hurrying, and timing routines for after morning stiffness eases. Fall awareness in the bathroom is a constant focus.",
      },
      {
        question: "Can the caregiver help with stairs and outdoor walks?",
        answer:
          "Yes. Caregivers support stairs one careful step at a time and accompany doctor-approved walks, so the elder keeps moving without the family worrying about a fall.",
      },
      {
        question: "My mother has osteoporosis — how is that handled?",
        answer:
          "Caregivers are briefed to be fracture-aware: gentle transfers, no sudden pulls, fall prevention at every step, and immediate reporting of any fall or new pain so the doctor can advise.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "copd-respiratory-care",
    name: "Respiratory & COPD Care Support",
    conditionType: "copd-respiratory",
    careLevel: "chronic-condition-support",
    supportLevel: "Breath-paced daily support",
    icon: "Stethoscope",
    priority: 18,
    shortDescription:
      "Breath-paced daily support for elders with COPD or chronic breathlessness — unhurried routines, inhaler reminders, and a watchful presence.",
    answerBlock:
      "EzyHelpers provides trained caregiver support for elders with COPD or chronic breathlessness at home in Bangalore. Caregivers pace every activity to the elder's breathing — walking, bathing, and bathroom support with planned rests — keep inhaler and medicine reminders on time, help with comfortable propped positioning, and stay alert to changes in breathlessness, cough, or fatigue so the family and doctor can act early. Oxygen therapy decisions, nebulisation, and all clinical care remain with qualified professionals.",
    familyConcerns: [
      "Even the walk to the bathroom leaves them breathless",
      "Worry about night-time breathless episodes when no one is awake",
      "Inhaler and medicine routines being missed",
      "An oxygen concentrator or nebuliser now in use at home",
      "Family living away and unable to respond quickly to an episode",
    ],
    whoItIsFor: [
      "Elders with COPD or chronic breathing difficulty",
      "Patients recently home after a breathing-related hospital stay",
      "Households using oxygen concentrators or nebulisers prescribed by the doctor",
      "Families needing day, night, or live-in support for breathless episodes",
    ],
    caregiverCanHelpWith: [
      "Walking, bathing, and bathroom support paced to the elder's breath, with planned rest stops",
      "Propped sitting and sleeping positions that ease breathing, as advised",
      "On-time reminders for inhalers and oral medicines as prescribed",
      "Energy-conserving daily routines so good hours aren't spent on chores",
      "Daily watchfulness for changes in breathlessness, cough, or fatigue, reported to the family the same day",
      "Noting oximeter readings with a family-provided device as instructed — observation only",
      "Following the family's agreed plan calmly during a breathless episode and alerting them immediately",
    ],
    caregiverCannotDo: [
      "Deciding or adjusting oxygen therapy, concentrator settings, or nebulisation — these remain with the doctor and qualified professionals",
      "Interpreting oximeter readings or making medical judgements from them",
      "Medical diagnosis, prescribing, or changing medication",
      "Clinical procedures or respiratory therapy",
      "Emergency medical response in place of a hospital or ambulance",
    ],
    faqs: [
      {
        question: "Can the caregiver operate the oxygen concentrator or nebuliser?",
        answer:
          "Caregivers can work comfortably around oxygen and nebuliser equipment the doctor has prescribed, and help the elder follow the routine the family and doctor have set. Deciding settings, doses, or therapy changes always remains with the doctor and qualified professionals.",
      },
      {
        question: "What happens during a breathless episode?",
        answer:
          "The caregiver follows the escalation plan agreed with the family in advance — helping the elder into an easier position, staying calm, and alerting the family and doctor immediately. The caregiver supports the response but does not replace emergency medical care.",
      },
      {
        question: "Do caregivers monitor oxygen saturation (SpO2)?",
        answer:
          "If the family provides an oximeter and instructions, the caregiver can note readings and share them with the family — observation only, never diagnosis or treatment decisions.",
      },
      {
        question: "Can the caregiver help my parent stay active despite breathlessness?",
        answer:
          "Yes. Gentle, doctor-approved activity with planned rests is part of the daily routine — paced walking with pauses to recover, so activity continues without distress.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "home-health-support",
    name: "Home Health Support",
    conditionType: "home-health-support",
    careLevel: "daily-living-support",
    supportLevel: "Daily care & coordination support",
    icon: "Home",
    priority: 19,
    shortDescription:
      "Trained attendants for daily care at home, plus help coordinating smoothly with the nurses, therapists, and doctors the family has engaged.",
    heroTitle: "Home Health Support in Bangalore",
    heroSubtitle:
      "Trained, verified attendants for daily care at home — working in step with the doctors, nurses, and therapists your family has engaged, so recovery at home feels organised instead of overwhelming.",
    answerBlock:
      "EzyHelpers provides trained, non-medical attendant support for families managing a patient's recovery or long-term condition at home in Bangalore. Attendants handle daily care — hygiene, feeding, mobility, and companionship — follow the care routine the treating doctor has set, and help the household stay coordinated with the nurses, physiotherapists, and doctors the family has separately arranged. EzyHelpers does not deliver medical or nursing care; clinical tasks always remain with qualified professionals.",
    familyConcerns: [
      "A patient home from hospital who needs both daily care and an organised routine",
      "Juggling visiting nurses, therapy sessions, and doctor appointments alongside daily care",
      "Wanting one dependable person present through the day",
      "Keeping the doctor's instructions actually followed at home",
      "Regular updates for family members who live elsewhere",
    ],
    whoItIsFor: [
      "Patients recovering at home after surgery, illness, or a hospital stay",
      "Families managing chronic conditions with several care providers involved",
      "Elders with reduced independence who need steady daily support",
      "Families who want daily care that works in step with their medical team",
    ],
    caregiverCanHelpWith: [
      "Daily hygiene, grooming, feeding, and mobility support",
      "Following the daily-care routine the treating doctor has set",
      "Medication reminders as instructed by the family or doctor",
      "Keeping the day organised around visits from nurses or therapists the family has arranged",
      "Simple notes on routine, appetite, and rest to share with the family and medical team",
      "Accompanying the patient to doctor visits when agreed with the family",
      "Regular updates to family members, including those living elsewhere",
    ],
    caregiverCannotDo: [
      "Delivering medical, nursing, or therapy care — EzyHelpers attendants are non-medical",
      "Wound care, injections, IV lines, catheter care, or any clinical procedure",
      "Medical diagnosis, prescribing, or changing medication",
      "Clinical monitoring or interpreting vital signs",
      "Emergency medical response in place of a hospital or ambulance",
    ],
    faqs: [
      {
        question: "Is this a medical home healthcare service?",
        answer:
          "No. EzyHelpers provides trained, non-medical attendants for daily care and helps the household stay organised around the medical care the family has arranged. Nursing procedures, therapy, and treatment are delivered by the qualified professionals your family engages, not by EzyHelpers.",
      },
      {
        question: "Can the attendant work alongside a visiting nurse or physiotherapist?",
        answer:
          "Yes. That is exactly how this works best: the attendant handles daily care and keeps the routine steady, while the nurse or therapist the family has engaged handles clinical and therapy tasks. The attendant helps keep the day organised around those visits.",
      },
      {
        question: "Who handles wound care, injections, or monitoring?",
        answer:
          "Qualified nurses and medical professionals arranged by the family with their doctor's guidance. EzyHelpers attendants do not perform clinical tasks — they can alert the family if something looks wrong so the medical team can act.",
      },
      {
        question: "What does the attendant do after hospital discharge?",
        answer:
          "The attendant supports the recovery routine the doctor set at discharge — hygiene, feeding, safe mobility, rest, and medication reminders — and keeps simple notes so follow-up appointments are well-informed.",
      },
      SCOPE_FAQ,
    ],
  }),
  makeCare({
    slug: "nursing-coordination",
    name: "Attendant Care with Nursing Coordination",
    conditionType: "nursing-coordination",
    careLevel: "daily-living-support",
    supportLevel: "Attendant care alongside nursing",
    icon: "BriefcaseMedical",
    priority: 20,
    shortDescription:
      "Trained attendants for daily care that work smoothly alongside the qualified nurses your family has separately arranged.",
    heroTitle: "Attendant Care Alongside Home Nursing in Bangalore",
    heroSubtitle:
      "EzyHelpers is not a nursing provider. When your family has arranged qualified nursing for clinical needs, our trained attendants handle the daily care in between — hygiene, feeding, mobility, and companionship — and keep everyone working from the same routine.",
    answerBlock:
      "EzyHelpers is not a nursing provider and does not perform clinical or nursing procedures. When a family has separately arranged qualified nurses — for wound care, injections, IV lines, catheter care, or monitoring — EzyHelpers provides trained, non-medical attendants who handle the daily care in between nursing visits: hygiene, feeding, mobility, repositioning, and companionship. The attendant follows the routine the nurse and doctor have set and helps keep the family, nurse, and household working in step.",
    familyConcerns: [
      "A nurse visits for procedures, but the patient needs care for the rest of the day",
      "Confusion over who does what between the nurse, the family, and a helper",
      "Keeping the patient comfortable, clean, and fed between nursing visits",
      "Making sure the nurse's instructions are followed through the day",
      "One point of steady presence the family can rely on",
    ],
    whoItIsFor: [
      "Families who have arranged qualified home nursing and need daily care around it",
      "Post-surgical or chronically ill patients with both clinical and daily-care needs",
      "Bedridden patients whose nursing visits cover procedures but not daily care",
      "Families who want the attendant and nurse working from one shared routine",
    ],
    caregiverCanHelpWith: [
      "Daily hygiene, bathing, grooming, and toileting assistance between nursing visits",
      "Feeding support and meal assistance",
      "Mobility, transfers, and gentle repositioning for comfort",
      "Following the daily-care routine the nurse and doctor have set",
      "Medication reminders as instructed — administration stays with the nurse where required",
      "Keeping the patient's room and bedding clean and comfortable",
      "Telling the family and nurse promptly if anything looks wrong, so the right professional acts",
    ],
    caregiverCannotDo: [
      "Nursing or clinical procedures of any kind — EzyHelpers is not a nursing provider",
      "Injections, IV lines, or infusions",
      "Wound dressing or wound care",
      "Catheter, feeding-tube, or tracheostomy care",
      "Administering medication beyond reminders and assistance as instructed",
      "Clinical monitoring or interpreting vital signs",
      "Medical diagnosis, prescribing, or emergency medical response in place of a hospital",
    ],
    recommendedCaregiverProfile: [
      "Experience as a patient attendant alongside nursing care",
      "Clear about the boundary between attendant work and clinical work",
      "Comfortable with bedridden and post-surgical daily care",
      "Reliable about following the nurse's and doctor's routine exactly",
    ],
    metaDescription:
      "EzyHelpers provides trained, non-medical attendants in Bangalore who handle daily care — hygiene, feeding, mobility, companionship — alongside the qualified home nurses your family has separately arranged. We are not a nursing provider.",
    faqs: [
      {
        question: "Does EzyHelpers provide home nurses?",
        answer:
          "No. EzyHelpers is not a nursing provider. We provide trained, non-medical attendants for daily care. If your patient needs clinical procedures — wound care, injections, IV lines, catheter care — those must be arranged separately with qualified nurses through your doctor or a nursing service.",
      },
      {
        question: "What is the difference between the attendant and the nurse?",
        answer:
          "The nurse, arranged by your family, performs clinical procedures and medical monitoring. The EzyHelpers attendant handles everything daily life needs in between — hygiene, feeding, mobility, repositioning, and companionship — and follows the routine the nurse and doctor have set.",
      },
      {
        question: "Can the attendant and our nurse work together?",
        answer:
          "Yes, that is the intended arrangement. The attendant keeps the daily routine steady between nursing visits, follows the nurse's daily-care instructions, and alerts the nurse or family promptly if anything looks wrong.",
      },
      {
        question: "Can the attendant give medicines or injections?",
        answer:
          "The attendant can remind and assist with medicines only as instructed by the family, doctor, or nurse. Injections and any medication administration that needs clinical skill remain with the qualified nurse.",
      },
      SCOPE_FAQ,
    ],
  }),
];

export function getCareService(slug: string): CareService | undefined {
  return CARE_SERVICES.find((s) => s.slug === slug);
}
