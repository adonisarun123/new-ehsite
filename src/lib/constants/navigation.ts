/** Site navigation model (spec §7.1). */

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Care Services",
    href: "/care-services",
    children: [
      { label: "Elderly Care", href: "/care-services/elderly-care" },
      { label: "Dementia Care", href: "/care-services/dementia-care" },
      { label: "Palliative Care", href: "/care-services/palliative-care" },
      { label: "Patient Care", href: "/care-services/patient-care" },
      { label: "Post-Operative Care", href: "/care-services/post-operative-care" },
      { label: "Bedridden Patient Care", href: "/care-services/bedridden-patient-care" },
      { label: "Parkinson's Care", href: "/care-services/parkinsons-care" },
      { label: "Stroke Care", href: "/care-services/stroke-care" },
      { label: "Companion Care", href: "/care-services/companion-care" },
      { label: "Night Caregiver", href: "/care-services/night-caregiver" },
    ],
  },
  {
    label: "Home Help",
    href: "/home-help-services",
    children: [
      { label: "Live-in Maids", href: "/services/live-in-maids" },
      { label: "Full-Time Maids", href: "/services/full-time-maids" },
      { label: "Part-Time Maids", href: "/services/part-time-maids" },
      { label: "Cooks", href: "/services/cooks" },
      { label: "Nanny / Babysitter", href: "/services/nanny-babysitter" },
      { label: "Japa Nanny", href: "/services/japa-nanny-services" },
      { label: "Housekeeping", href: "/services/housekeeping" },
    ],
  },
  {
    label: "For Helpers",
    href: "/careers",
    children: [
      { label: "Careers Overview", href: "/careers" },
      { label: "Helper Jobs", href: "/helper-jobs" },
      { label: "Caregiver Jobs", href: "/caregiver-jobs" },
      { label: "ANM Jobs", href: "/caregiver-jobs/anm" },
      { label: "GNM Jobs", href: "/caregiver-jobs/gnm" },
      { label: "GDA Jobs", href: "/caregiver-jobs/gda" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
      { label: "Care Guides", href: "/blog?category=family-guides" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Mobile quick actions (spec §7.1). */
export const MOBILE_PRIORITY = [
  { label: "Call", action: "call" },
  { label: "WhatsApp", action: "whatsapp" },
  { label: "Get Help", action: "enquire" },
  { label: "Apply for Job", action: "apply" },
] as const;
