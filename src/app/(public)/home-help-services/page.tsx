import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TrustBar } from "@/components/sections/TrustBar";
import { getAllServices } from "@/features/services/queries";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Verified Home Helpers in Bangalore — Maids, Cooks & Nannies",
  description:
    "Find verified live-in maids, full-time maids, cooks, nannies, and housekeeping help in Bangalore with EzyHelpers. Trained, screened, and matched to your home.",
  path: "/home-help-services",
});

const PROCESS = [
  { title: "Share your requirement", description: "Tell us the service, timings, and location." },
  { title: "We understand your home", description: "A quick consultation before suggesting anyone." },
  { title: "Matched, screened helper", description: "We share a verified helper who suits your home." },
  { title: "Replacement support", description: "If it's not the right fit, we help arrange a replacement." },
];

export default async function HomeHelpServicesPage() {
  const services = await getAllServices();
  const faqs = [
    {
      question: "What home help services does EzyHelpers offer in Bangalore?",
      answer:
        "EzyHelpers offers verified live-in maids, full-time maids, cooks, nannies and babysitters, and housekeeping help in Bangalore — all screened, trained, and matched to your home with a clear scope of work.",
    },
    {
      question: "Are EzyHelpers helpers background-checked?",
      answer:
        "Yes. EzyHelpers carries out identity and background checks before placement and verifies experience and skills during screening.",
    },
    {
      question: "What if a helper is not the right fit?",
      answer:
        "If a helper is not the right fit, EzyHelpers helps arrange a replacement. We stay available for coordination after placement.",
    },
    {
      question: "How is pricing decided?",
      answer:
        "Charges depend on the service, hours, and tasks. We share clear options after a quick consultation, before you decide. We do not quote a fixed price without understanding your requirement.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Home help"
        title="Verified home helpers for daily household needs"
        subtitle="Live-in and full-time maids, cooks, nannies, and housekeeping help — screened, trained, and matched to your home in Bangalore."
        breadcrumbs={[{ name: "Home Help", href: "/home-help-services" }]}
      />
      <TrustBar />
      <section className="section">
        <div className="container-page space-y-8">
          <AnswerBlock>
            EzyHelpers provides verified home helpers in Bangalore for daily household needs —
            live-in maids, full-time maids, cooks, nannies, and housekeeping. Every helper is
            screened with identity and background checks, matched to your home with a clear scope
            of work, and backed by replacement support.
          </AnswerBlock>
          <div>
            <SectionHeading title="Home help services" />
            <div className="mt-8">
              <ServiceCards services={services} />
            </div>
          </div>
        </div>
      </section>
      <ProcessSteps steps={PROCESS} />
      <FAQSection faqs={faqs} trackContext="home-help-listing" />
      <CTASection title="Find the right home help for your family" />
    </>
  );
}
