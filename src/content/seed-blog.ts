import type { FaqItem } from "@/features/services/types";

export interface BlogCategory {
  slug: string;
  name: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  answerSummary: string;
  /** Markdown-ish sections rendered as headed blocks. */
  sections: { heading: string; body: string[] }[];
  checklist: string[];
  faqs: FaqItem[];
  isMedical: boolean;
  publishedAt: string;
  readingMinutes: number;
  relatedServiceSlug?: string;
  relatedServiceType?: "care" | "home";
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "elder-care", name: "Elder Care" },
  { slug: "dementia-care", name: "Dementia Care" },
  { slug: "patient-care", name: "Patient Care" },
  { slug: "palliative-support", name: "Palliative Support" },
  { slug: "childcare", name: "Childcare" },
  { slug: "domestic-help-hiring", name: "Domestic Help Hiring" },
  { slug: "helper-rights", name: "Helper Safety & Rights" },
  { slug: "family-guides", name: "Family Guides" },
  { slug: "bangalore-home-support", name: "Bangalore Home Support" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-a-caregiver-for-elderly-parents",
    title: "How to Choose a Caregiver for Elderly Parents at Home",
    category: "elder-care",
    excerpt:
      "A practical guide for families choosing a trained, reliable caregiver for ageing parents — what to look for, what to ask, and how to prepare.",
    answerSummary:
      "To choose a caregiver for elderly parents, define the daily needs, check screening and experience, meet the caregiver, agree clear scope and timings, and keep medical care with your doctor. A trained, patient, and respectful caregiver who fits your parent's routine matters more than anything else.",
    sections: [
      {
        heading: "Start by listing your parent's real daily needs",
        body: [
          "Before looking for a caregiver, write down what your parent actually needs help with each day — bathing, dressing, meals, mobility, medication reminders, and companionship.",
          "This list helps you choose between companionship-focused support and more hands-on daily-living help, and decide whether you need day, night, or live-in support.",
        ],
      },
      {
        heading: "Check screening, experience, and temperament",
        body: [
          "A good caregiver is screened with identity and background checks, has relevant experience, and is calm, patient, and respectful.",
          "Temperament matters as much as experience — especially for elders who may feel anxious about accepting help.",
        ],
      },
      {
        heading: "Agree clear scope, timings, and expectations",
        body: [
          "Agree the tasks, working hours, and expectations in advance so everyone is clear. This avoids confusion and protects both the family and the caregiver.",
          "Keep medical care — diagnosis, treatment, and medication decisions — with your doctor. A caregiver supports daily living and follows the doctor's instructions.",
        ],
      },
    ],
    checklist: [
      "List daily needs: hygiene, meals, mobility, medication reminders, company",
      "Confirm screening and relevant experience",
      "Decide day, night, or live-in support",
      "Meet the caregiver and check temperament",
      "Agree scope, timings, and expectations in writing",
      "Keep medical decisions with your doctor",
    ],
    faqs: [
      {
        question: "What is the difference between a caregiver and a nurse?",
        answer:
          "A caregiver supports daily living — hygiene, mobility, meals, and companionship. A nurse provides clinical care such as injections and wound care. For most home elder-care needs, a trained caregiver or attendant is what families require.",
      },
      {
        question: "Should I choose live-in or day care for my parent?",
        answer:
          "It depends on your parent's needs. Live-in support suits elders who need help through the day and night, while day support suits those who are independent at night. An assessment helps decide.",
      },
    ],
    isMedical: true,
    publishedAt: "2026-01-15",
    readingMinutes: 6,
    relatedServiceSlug: "elderly-care",
    relatedServiceType: "care",
  },
  {
    slug: "dementia-care-at-home-what-families-should-know",
    title: "Dementia Care at Home: What Families Should Know",
    category: "dementia-care",
    excerpt:
      "Understanding dementia care at home — how a trained caregiver helps, what stays with the doctor, and how to keep your loved one safe and calm.",
    answerSummary:
      "Dementia care at home focuses on a calm routine, gentle reminders, safety supervision, and companionship. A trained caregiver supports daily living and reports changes, while diagnosis, medication, and treatment stay with the doctor. Consistency, patience, and a safe home environment make the biggest difference.",
    sections: [
      {
        heading: "Why routine and calm matter in dementia care",
        body: [
          "People living with dementia do best with a steady, predictable routine. A trained caregiver helps maintain regular timings for meals, hygiene, and rest, which reduces confusion and anxiety.",
          "A calm, reassuring approach — never rushing or arguing — helps the person feel safe.",
        ],
      },
      {
        heading: "What a caregiver can and cannot do",
        body: [
          "A dementia caregiver can support daily routines, gentle reminders, safety supervision, mobility, and companionship, and can report changes to the family.",
          "A caregiver does not diagnose, prescribe, or change medication. Those decisions stay with the doctor. The caregiver works alongside the medical team.",
        ],
      },
      {
        heading: "Making the home safer",
        body: [
          "Simple steps — clear walkways, good lighting, secure doors, and removing trip hazards — reduce the risk of falls and wandering.",
          "Discuss safety concerns with your doctor and caregiver together.",
        ],
      },
    ],
    checklist: [
      "Keep a steady daily routine",
      "Use calm, patient communication",
      "Set up gentle reminders for meals, water, and hygiene",
      "Make the home safe: lighting, clear paths, secure doors",
      "Report changes to the doctor promptly",
      "Plan day, night, or live-in support based on needs",
    ],
    faqs: [
      {
        question: "Can a caregiver manage dementia medication?",
        answer:
          "A caregiver may remind or assist with medication only as instructed by the family or doctor. They do not prescribe or change medication.",
      },
    ],
    isMedical: true,
    publishedAt: "2026-02-02",
    readingMinutes: 7,
    relatedServiceSlug: "dementia-care",
    relatedServiceType: "care",
  },
  {
    slug: "how-to-hire-a-live-in-maid-safely-in-bangalore",
    title: "How to Hire a Live-in Maid Safely in Bangalore",
    category: "domestic-help-hiring",
    excerpt:
      "A clear, practical guide to hiring a live-in maid in Bangalore safely — screening, scope of work, accommodation, and a respectful working arrangement.",
    answerSummary:
      "To hire a live-in maid safely in Bangalore, use a verified source with proper screening, agree a clear scope of work and timings, provide safe and respectful accommodation, and keep communication open. A structured arrangement protects both your family and the helper, and replacement support gives peace of mind.",
    sections: [
      {
        heading: "Use a verified, screened source",
        body: [
          "Hiring through a verified source means identity and background checks are done before placement, reducing risk for your family.",
          "Avoid informal, unverified hiring where you know little about the person entering your home.",
        ],
      },
      {
        heading: "Agree scope, timings, and accommodation",
        body: [
          "A live-in maid stays at your home, so agree the tasks, working hours, rest time, and a safe, respectful place to stay.",
          "Clear expectations on both sides make the arrangement work better and last longer.",
        ],
      },
      {
        heading: "Treat the arrangement with respect",
        body: [
          "Helpers do better — and stay longer — in homes that treat them with dignity, fair hours, and clear communication.",
          "A respectful arrangement is also a safer and more reliable one for your family.",
        ],
      },
    ],
    checklist: [
      "Hire through a verified, screened source",
      "Agree tasks and working hours in advance",
      "Provide safe, respectful accommodation",
      "Agree rest time and days off",
      "Keep communication open and respectful",
      "Confirm replacement support is available",
    ],
    faqs: [
      {
        question: "Is a live-in maid better than a full-time maid?",
        answer:
          "It depends on your needs. A live-in maid stays at your home for full-day support, while a full-time maid comes daily for fixed hours. Choose based on the support your household needs.",
      },
    ],
    isMedical: false,
    publishedAt: "2026-02-20",
    readingMinutes: 5,
    relatedServiceSlug: "live-in-maids",
    relatedServiceType: "home",
  },
  {
    slug: "post-operative-care-at-home-after-hospital-discharge",
    title: "Post-Operative Care at Home After Hospital Discharge",
    category: "patient-care",
    excerpt:
      "What families should plan for when bringing a loved one home after surgery — daily support, mobility, and following the doctor's instructions.",
    answerSummary:
      "Post-operative care at home means following the doctor's discharge instructions while a trained attendant helps with mobility, hygiene, feeding, and daily routines. Clinical tasks like wound care and injections need a qualified nurse. Good preparation and steady daily support help recovery go smoothly.",
    sections: [
      {
        heading: "Prepare the home before discharge",
        body: [
          "Set up a clean, restful space, organise medicines and the doctor's instructions, and plan how the patient will move around safely.",
          "Decide whether you need day, night, or live-in attendant support during recovery.",
        ],
      },
      {
        heading: "Separate attendant support from clinical care",
        body: [
          "A trained attendant helps with mobility, hygiene, feeding, and daily routines, and follows the doctor's instructions.",
          "Wound dressing, injections, and clinical monitoring need a qualified nurse or medical professional — not a daily-living attendant.",
        ],
      },
    ],
    checklist: [
      "Follow the doctor's discharge instructions carefully",
      "Prepare a clean, restful recovery space",
      "Organise medicines and instructions",
      "Plan safe mobility around the home",
      "Arrange attendant support for the recovery period",
      "Use a qualified nurse for any clinical tasks",
    ],
    faqs: [
      {
        question: "Can a home attendant do wound dressing after surgery?",
        answer:
          "No. Wound dressing and injections must be done by a qualified nurse. A home attendant supports daily living and follows the doctor's instructions.",
      },
    ],
    isMedical: true,
    publishedAt: "2026-03-05",
    readingMinutes: 6,
    relatedServiceSlug: "post-operative-care",
    relatedServiceType: "care",
  },
  {
    slug: "questions-to-ask-before-hiring-a-nanny",
    title: "Questions to Ask Before Hiring a Nanny",
    category: "childcare",
    excerpt:
      "The key questions every parent should ask before hiring a nanny or babysitter — safety, experience, routine, and expectations.",
    answerSummary:
      "Before hiring a nanny, ask about screening and experience, comfort with your child's age and routine, approach to safety and hygiene, availability, and expectations. Meeting the nanny and agreeing a clear scope helps you choose someone caring, reliable, and a good fit for your family.",
    sections: [
      {
        heading: "Safety and screening come first",
        body: [
          "Confirm the nanny is screened with identity and background checks, and ask about experience with children of your child's age.",
          "A caring, attentive temperament is essential for safe supervision.",
        ],
      },
      {
        heading: "Routine, expectations, and fit",
        body: [
          "Ask how the nanny handles daily routines, feeding, hygiene, and play, and agree timings and scope in advance.",
          "Meeting the nanny helps you judge fit and comfort for both your child and your family.",
        ],
      },
    ],
    checklist: [
      "Confirm screening and background checks",
      "Ask about experience with your child's age",
      "Discuss daily routine, feeding, and hygiene",
      "Check approach to safety and supervision",
      "Agree timings, scope, and expectations",
      "Meet the nanny before deciding",
    ],
    faqs: [
      {
        question: "Are EzyHelpers nannies background-checked?",
        answer:
          "Yes. EzyHelpers screens helpers with identity and background checks before placement and verifies experience during screening.",
      },
    ],
    isMedical: false,
    publishedAt: "2026-03-22",
    readingMinutes: 5,
    relatedServiceSlug: "nanny-babysitter",
    relatedServiceType: "home",
  },
  {
    slug: "how-nris-can-arrange-elder-care-for-parents-in-bangalore",
    title: "How NRIs Can Arrange Elder Care for Parents in Bangalore",
    category: "family-guides",
    excerpt:
      "A guide for NRIs arranging dependable elder care for parents in Bangalore from abroad — what to set up, how to stay informed, and how to choose support.",
    answerSummary:
      "NRIs can arrange elder care for parents in Bangalore by using a verified provider, agreeing clear scope and timings, setting up regular updates, and keeping medical care with a local doctor. A trusted point of contact and replacement support give peace of mind when you are far away.",
    sections: [
      {
        heading: "Set up a trusted point of contact",
        body: [
          "When you are abroad, a reliable point of contact who coordinates the caregiver and updates you regularly is invaluable.",
          "Agree how and how often you will get updates on your parent's well-being.",
        ],
      },
      {
        heading: "Keep medical and daily care clearly separated",
        body: [
          "Arrange a local doctor for medical needs, and a trained caregiver for daily living, mobility, and companionship.",
          "This separation keeps your parent safe and the responsibilities clear.",
        ],
      },
    ],
    checklist: [
      "Use a verified provider with screening",
      "Agree scope, timings, and support type",
      "Set up a trusted point of contact",
      "Arrange regular updates",
      "Keep a local doctor for medical care",
      "Confirm replacement support",
    ],
    faqs: [
      {
        question: "Can NRIs arrange and manage elder care remotely?",
        answer:
          "Yes. With a verified provider, a clear scope, a point of contact, and regular updates, NRIs can arrange dependable elder care for parents in Bangalore from abroad.",
      },
    ],
    isMedical: false,
    publishedAt: "2026-04-10",
    readingMinutes: 6,
    relatedServiceSlug: "elderly-care",
    relatedServiceType: "care",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
