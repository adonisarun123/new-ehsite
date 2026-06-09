import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { MedicalScopeNote } from "@/components/seo/MedicalScopeNote";
import { CareConditionCards } from "@/components/sections/CareConditionCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ListBlock } from "@/components/sections/ListBlock";
import { getAllCareServices } from "@/features/services/queries";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Caregiving Services at Home in Bangalore",
  description:
    "Trained caregiver and attendant support at home in Bangalore — elderly care, dementia, palliative, patient, post-operative, bedridden, Parkinson's, and stroke recovery support from EzyHelpers.",
  path: "/care-services",
});

const CARE_PROCESS = [
  { title: "Share the need", description: "Tell us the condition, support needed, location, and timing." },
  { title: "Free assessment", description: "We understand the daily routine and care expectations." },
  { title: "Matched caregiver", description: "We share a screened, trained caregiver who suits the requirement." },
  { title: "Ongoing support", description: "We stay available for coordination and replacement support." },
];

const CHOOSE_RIGHT = [
  "Decide if you need companionship, daily-living help, or full attendant support",
  "Consider day, night, or live-in support based on the routine",
  "Match the caregiver's experience to the condition",
  "Keep medical decisions with your doctor; the caregiver follows their guidance",
];

export default async function CareServicesPage() {
  const careServices = await getAllCareServices();
  const faqs = [
    {
      question: "What caregiving services does EzyHelpers offer in Bangalore?",
      answer:
        "EzyHelpers offers trained caregiver support for elderly care, dementia, palliative, patient, post-operative, bedridden, Parkinson's, and stroke recovery, plus companion and night care. All are non-clinical, daily-living focused, and work alongside your doctors.",
    },
    {
      question: "Is this the same as nursing care?",
      answer:
        "No. EzyHelpers provides caregiver and attendant support for daily living, comfort, and companionship. Clinical nursing and medical treatment are handled by qualified nurses and doctors unless qualified nursing is specifically arranged.",
    },
    {
      question: "Can I get live-in caregiving support?",
      answer:
        "Yes, subject to assessment and availability. Many families choose live-in or long-hour caregiver support so help is available through the day and night.",
    },
    {
      question: "How do I start?",
      answer:
        "Submit an enquiry, call, or WhatsApp us. Our team will understand your requirement through a free consultation and suggest a suitable, screened caregiver based on availability.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Caregiving at home"
        title="Caregiving support at home for elders, patients, and recovering family members"
        subtitle="Trained, verified caregivers from EzyHelpers focused on comfort, safety, mobility, hygiene, and companionship — working alongside your medical team."
        breadcrumbs={[{ name: "Care Services", href: "/care-services" }]}
        tone="care"
      />

      <section className="section">
        <div className="container-page space-y-8">
          <AnswerBlock>
            EzyHelpers provides trained caregiver and attendant support at home in Bangalore for
            elders, patients, and recovering family members. Caregivers help with daily routines,
            hygiene, meals, mobility, companionship, and family coordination, while medical
            diagnosis and treatment stay with qualified doctors and nurses.
          </AnswerBlock>
          <MedicalScopeNote />
          <div>
            <SectionHeading title="Choose the care you need" />
            <div className="mt-8">
              <CareConditionCards services={careServices} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-mint/40">
        <div className="container-page">
          <SectionHeading title="How to choose the right caregiver" />
          <div className="mt-8 max-w-2xl">
            <ListBlock title="A quick guide" items={CHOOSE_RIGHT} />
          </div>
        </div>
      </section>

      <ProcessSteps steps={CARE_PROCESS} title="How EzyHelpers matches caregivers" />
      <FAQSection faqs={faqs} trackContext="care-services-listing" />
      <CTASection title="Talk to us about caregiving support for your family" />
    </>
  );
}
