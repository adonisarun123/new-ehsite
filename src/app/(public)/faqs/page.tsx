import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/features/seo/metadata";
import { GENERAL_FAQS } from "@/content/seed-faqs";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about EzyHelpers caregiving and home help in Bangalore — services, screening, pricing, live-in support, and how to get started.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help & answers"
        title="Frequently asked questions"
        subtitle="Common questions about EzyHelpers caregiving and home help. Can't find your answer? Call, WhatsApp, or send an enquiry."
        breadcrumbs={[{ name: "FAQs", href: "/faqs" }]}
      />
      <FAQSection faqs={GENERAL_FAQS} title="" trackContext="faqs-page" />
      <CTASection />
    </>
  );
}
