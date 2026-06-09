/** Shared content types used across pages, queries, and seed data. */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

/** Domestic / home-help service (spec §10.2). */
export interface Service {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  answerBlock: string;
  heroTitle: string;
  heroSubtitle: string;
  whoItIsFor: string[];
  whatIsIncluded: string[];
  whatIsNotIncluded: string[];
  serviceOptions: string[];
  processSteps: ProcessStep[];
  trustPoints: string[];
  pricingNote: string;
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
  priority: number;
  icon: string;
}

/** Caregiving / condition-led service (spec §10.3). */
export interface CareService {
  slug: string;
  name: string;
  conditionType: string;
  careLevel: string;
  shortDescription: string;
  answerBlock: string;
  heroTitle: string;
  heroSubtitle: string;
  familyConcerns: string[];
  whoItIsFor: string[];
  caregiverCanHelpWith: string[];
  caregiverCannotDo: string[];
  recommendedCaregiverProfile: string[];
  careOptions: string[];
  processSteps: ProcessStep[];
  safetyPoints: string[];
  familyChecklist: string[];
  pricingNote: string;
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
  priority: number;
  icon: string;
  supportLevel: string;
}
