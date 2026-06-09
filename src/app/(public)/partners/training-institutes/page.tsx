import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ListBlock } from "@/components/sections/ListBlock";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PartnerEnquiryForm } from "@/components/forms/PartnerEnquiryForm";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Training Institute Partnerships — GDA, ANM & GNM Placement",
  description:
    "Partner with EzyHelpers to place trained GDA, ANM, and GNM caregivers into safe, dignified caregiving jobs with families in Bangalore.",
  path: "/partners/training-institutes",
});

const PROCESS = [
  { title: "Connect with us", description: "Share details about your institute and trained candidates." },
  { title: "Understand the fit", description: "We discuss candidate readiness and family needs together." },
  { title: "Refer candidates", description: "You refer trained candidates seeking caregiving work." },
  { title: "Placement & support", description: "We match candidates to suitable families with coordination support." },
];

export default function TrainingInstitutesPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partner with EzyHelpers to place trained caregivers"
        subtitle="We work with training institutes, GDA centres, and ANM/GNM networks to connect trained candidates with safe, dignified caregiving jobs."
        breadcrumbs={[{ name: "Training Institutes", href: "/partners/training-institutes" }]}
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <ListBlock
              title="Who can partner"
              items={[
                "GDA training centres",
                "ANM and GNM networks",
                "Nursing assistant and caregiver training institutes",
                "Skill-development and NSDC-aligned programmes",
              ]}
            />
            <ListBlock
              title="Benefits for your candidates"
              items={[
                "Access to safe, dignified caregiving jobs",
                "No agent or middleman exploitation",
                "Clear scope of work and coordination support",
                "Opportunities across Bangalore families",
              ]}
            />
            <div>
              <SectionHeading title="Our placement focus" />
              <p className="prose-care mt-3">
                We focus on non-clinical caregiving roles — elder care, patient attendant, and
                daily-living support — and are clear about scope. Candidates with GDA, ANM, or GNM
                training are especially well-suited to the families we support.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift">
              <h2 className="font-heading text-lg font-semibold text-ink">Partner enquiry</h2>
              <p className="mt-1 text-sm text-muted">Tell us about your institute and candidates.</p>
              <div className="mt-5">
                <PartnerEnquiryForm defaultType="training-institute" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProcessSteps steps={PROCESS} title="How the partnership works" />
    </>
  );
}
