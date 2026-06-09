/** Map a service/care slug to the matching LeadForm service-option label. */
const MAP: Record<string, string> = {
  "live-in-maids": "Live-in Maid",
  "full-time-maids": "Full-Time Maid",
  cooks: "Cook",
  "nanny-babysitter": "Nanny/Babysitter",
  housekeeping: "Housekeeping",
  "elderly-care": "Elderly Care",
  "dementia-care": "Dementia Care",
  "palliative-care": "Palliative Care Support",
  "patient-care": "Patient Care",
  "post-operative-care": "Post-Operative Care",
  "bedridden-patient-care": "Bedridden Patient Care",
  "parkinsons-care": "Parkinson's Care",
  "stroke-care": "Stroke Recovery Support",
};

export function leadLabelFor(slug: string, fallback = "Other"): string {
  return MAP[slug] ?? fallback;
}
