import type { FaqItem } from "@/features/services/types";

export interface JobPage {
  slug: string;
  kind: "helper" | "caregiver";
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  answerBlock: string;
  applicantType: string; // default value for the application form
  categories: string[];
  whyWorkWithUs: string[];
  documentsNeeded: string[];
  applicationProcess: { title: string; description: string }[];
  safetyAndSupport: string[];
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
}

const COMMON_PROCESS = [
  { title: "Apply online", description: "Fill the short application form with your details and experience." },
  { title: "We review & call", description: "Our team reviews your application and calls to understand your skills and preferences." },
  { title: "Matched to jobs", description: "We match you with suitable families and share the job details with you." },
  { title: "Start with support", description: "You begin work with a clear scope, and our team stays available for coordination." },
];

const COMMON_WHY = [
  "Safe, dignified jobs with respectful families",
  "No agent or middleman cuts from your pay",
  "Clear scope of work agreed before you start",
  "A point of contact for coordination and support",
  "Help finding steady, suitable work",
];

const COMMON_DOCS = [
  "A government ID for verification",
  "Any experience or work references you have",
  "Training certificates, if any (GDA, ANM, GNM, etc.)",
  "A working phone number we can reach you on",
];

const COMMON_SAFETY = [
  "We verify families and agree a clear scope of work",
  "We treat helpers and caregivers with respect and dignity",
  "We stay available for coordination and concerns",
  "We never ask helpers to pay to get a job",
];

function jobFaqs(kind: "helper" | "caregiver"): FaqItem[] {
  const role = kind === "caregiver" ? "caregiver" : "helper";
  return [
    {
      question: `Does it cost anything to apply as a ${role}?`,
      answer: `No. There is no charge to apply as a ${role} with EzyHelpers. We help connect you with suitable, respectful jobs without agent cuts.`,
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "You'll need a government ID for verification, a working phone number, and any experience references or training certificates you have. Certificates like GDA, ANM, or GNM help for caregiver roles.",
    },
    {
      question: "Will EzyHelpers tell me the salary before I start?",
      answer:
        "The pay depends on the job, hours, and your experience. We share the details of each opportunity with you clearly before you decide. We do not promise a fixed amount in advance.",
    },
    {
      question: "How will I be matched to a job?",
      answer:
        "After you apply, our team reviews your details and calls you to understand your skills and preferences. We then match you to suitable families and share the job details.",
    },
  ];
}

export const JOB_PAGES: JobPage[] = [
  {
    slug: "helper-jobs",
    kind: "helper",
    title: "Helper Jobs",
    heroTitle: "Find safe helper jobs without agent cuts",
    heroSubtitle:
      "EzyHelpers connects trained and willing helpers — maids, cooks, nannies, and housekeeping staff — with respectful families across Bangalore.",
    answerBlock:
      "EzyHelpers helps domestic helpers — maids, cooks, nannies, and housekeeping staff — find safe, dignified jobs with verified families in Bangalore. There is no charge to apply, and we connect you with suitable work without agent or middleman cuts, with a clear scope of work and coordination support.",
    applicantType: "Helper / Maid",
    categories: ["Live-in maid", "Full-time maid", "Cook", "Nanny / babysitter", "Housekeeping"],
    whyWorkWithUs: COMMON_WHY,
    documentsNeeded: COMMON_DOCS,
    applicationProcess: COMMON_PROCESS,
    safetyAndSupport: COMMON_SAFETY,
    faqs: jobFaqs("helper"),
    metaTitle: "Helper Jobs in Bangalore | Apply with EzyHelpers",
    metaDescription:
      "Find safe, dignified helper jobs in Bangalore with EzyHelpers — maid, cook, nanny, and housekeeping work without agent cuts. Free to apply.",
  },
  {
    slug: "caregiver-jobs",
    kind: "caregiver",
    title: "Caregiver Jobs",
    heroTitle: "Find safe caregiver jobs with respectful families",
    heroSubtitle:
      "EzyHelpers connects trained caregivers — including GDA, ANM, and GNM candidates — with families needing elder and patient care support in Bangalore.",
    answerBlock:
      "EzyHelpers helps trained caregivers — including GDA, ANM, and GNM candidates — find safe, dignified caregiver jobs with verified families in Bangalore. We support non-clinical elder and patient care roles, with no charge to apply, no agent cuts, a clear scope of work, and coordination support.",
    applicantType: "Caregiver",
    categories: ["Elder care attendant", "Patient attendant", "Night caregiver", "GDA / ANM / GNM caregiver"],
    whyWorkWithUs: COMMON_WHY,
    documentsNeeded: COMMON_DOCS,
    applicationProcess: COMMON_PROCESS,
    safetyAndSupport: COMMON_SAFETY,
    faqs: jobFaqs("caregiver"),
    metaTitle: "Caregiver Jobs in Bangalore | Apply with EzyHelpers",
    metaDescription:
      "Find safe caregiver jobs in Bangalore with EzyHelpers — elder care, patient attendant, and GDA/ANM/GNM roles without agent cuts. Free to apply.",
  },
];

export function getJobPage(slug: string): JobPage | undefined {
  return JOB_PAGES.find((j) => j.slug === slug);
}

/** Sub-routes off /helper-jobs and /caregiver-jobs (spec §8.4). */
export interface JobSubPage {
  parent: "helper-jobs" | "caregiver-jobs";
  slug: string;
  title: string;
  intro: string;
  applicantType: string;
}

export const HELPER_JOB_SUBPAGES: JobSubPage[] = [
  { parent: "helper-jobs", slug: "bangalore", title: "Helper Jobs in Bangalore", intro: "Find maid, cook, nanny, and housekeeping jobs with verified families across Bangalore.", applicantType: "Helper / Maid" },
  { parent: "helper-jobs", slug: "live-in-maid", title: "Live-in Maid Jobs", intro: "Find live-in maid jobs with respectful families, with safe accommodation and a clear scope of work.", applicantType: "Helper / Maid" },
  { parent: "helper-jobs", slug: "cook", title: "Cook Jobs", intro: "Find cook jobs with families who value home-cooked meals, with clear hours and respectful treatment.", applicantType: "Cook" },
  { parent: "helper-jobs", slug: "nanny", title: "Nanny Jobs", intro: "Find nanny and babysitter jobs caring for children with caring, verified families.", applicantType: "Nanny" },
];

export const CAREGIVER_JOB_SUBPAGES: JobSubPage[] = [
  { parent: "caregiver-jobs", slug: "bangalore", title: "Caregiver Jobs in Bangalore", intro: "Find elder care and patient attendant jobs with verified families across Bangalore.", applicantType: "Caregiver" },
  { parent: "caregiver-jobs", slug: "anm", title: "ANM Caregiver Jobs", intro: "ANM-trained candidates can find suitable caregiver and attendant roles supporting families at home.", applicantType: "ANM" },
  { parent: "caregiver-jobs", slug: "gnm", title: "GNM Caregiver Jobs", intro: "GNM-trained candidates can find suitable caregiver and attendant roles supporting families at home.", applicantType: "GNM" },
  { parent: "caregiver-jobs", slug: "gda", title: "GDA Caregiver Jobs", intro: "GDA-trained candidates can find caregiver and patient-attendant roles supporting families at home.", applicantType: "GDA" },
];

export function getJobSubPage(parent: string, slug: string): JobSubPage | undefined {
  return [...HELPER_JOB_SUBPAGES, ...CAREGIVER_JOB_SUBPAGES].find(
    (s) => s.parent === parent && s.slug === slug
  );
}
