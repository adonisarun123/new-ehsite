import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ListBlock } from "@/components/sections/ListBlock";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PartnerEnquiryForm } from "@/components/forms/PartnerEnquiryForm";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Apartment & Community Partnerships",
  description:
    "Partner with EzyHelpers to give your apartment community trusted access to verified caregivers and home helpers, with verification and escalation support.",
  path: "/partners/apartment-associations",
});

const PROCESS = [
  { title: "Connect with us", description: "Share your community's home help and caregiving needs." },
  { title: "Set up the model", description: "We agree how residents can access verified support." },
  { title: "Resident support", description: "Residents enquire and we match verified helpers and caregivers." },
  { title: "Coordination & escalation", description: "We provide a point of contact and a clear escalation process." },
];

export default function ApartmentAssociationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Trusted home support for your apartment community"
        subtitle="EzyHelpers partners with apartment and community associations to give residents reliable access to verified caregivers and home helpers."
        breadcrumbs={[{ name: "Apartment Associations", href: "/partners/apartment-associations" }]}
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <div>
              <SectionHeading title="Home help and caregiving needs in apartments" />
              <p className="prose-care mt-3">
                Apartment communities have many working families, elders, and new parents who need
                dependable, verified home support. Informal hiring can be risky and inconsistent.
                EzyHelpers brings a structured, trusted model to your community.
              </p>
            </div>
            <ListBlock
              title="Our resident support model"
              items={[
                "Verified caregivers and home helpers for residents",
                "A clear scope of work for each engagement",
                "A point of contact for coordination",
                "An escalation process for any concern",
                "Replacement support when needed",
              ]}
            />
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift">
              <h2 className="font-heading text-lg font-semibold text-ink">Community partnership enquiry</h2>
              <p className="mt-1 text-sm text-muted">Tell us about your community's needs.</p>
              <div className="mt-5">
                <PartnerEnquiryForm defaultType="apartment-association" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProcessSteps steps={PROCESS} title="How the partnership works" />
    </>
  );
}
