import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ListBlock } from "@/components/sections/ListBlock";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { Card } from "@/components/ui/Card";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";
import { ShieldCheck, Zap, RefreshCcw } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "How It Works — Simple Steps to Find Your Helper",
  description:
    "Discover how easy it is to find verified, reliable home helpers with EzyHelpers. Our simple 4-step process connects you with trusted professionals for all your household needs.",
  path: "/how-it-works",
});

const STEPS = [
  {
    title: "Tell us your needs",
    description:
      "Share your requirements — type of help needed, location, timing preferences, and specific skills required.",
  },
  {
    title: "We find & verify",
    description:
      "Our team searches for suitable candidates and conducts thorough background verification and skill assessment.",
  },
  {
    title: "Meet & interview",
    description:
      "We arrange meetings with pre-screened candidates so you can interview and select the best fit for your family.",
  },
  {
    title: "Ongoing support",
    description:
      "Once hired, we provide continuous support, replacement assistance, and regular check-ins for your satisfaction.",
  },
];

const FAQS = [
  {
    question: "How long does it take to find a helper?",
    answer:
      "We carefully shortlist suitable candidates based on your requirements within 72 hours, ensuring they meet your household needs and expectations. The final selection and hiring process is guided by your availability for interviews, so you can choose the helper who best fits your family.",
  },
  {
    question: "What if I'm not satisfied with the helper?",
    answer:
      "If you're not satisfied with the helper due to genuine concerns like skill gaps, attitude issues, or reliability problems, we will review the situation with both parties and arrange a replacement that better matches your family's needs and expectations.",
  },
  {
    question: "Do you charge any fees upfront?",
    answer:
      "We charge a one-time placement fee only after you've successfully hired a helper through our service. There are no upfront charges or hidden fees.",
  },
  {
    question: "Are all helpers verified?",
    answer:
      "Yes, all our helpers undergo thorough background verification including document checks, reference verification, and police verification where applicable.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="How It Works"
        subtitle="Finding reliable home help has never been easier. Our simple 4-step process connects you with verified, trusted professionals."
        breadcrumbs={[{ name: "How It Works", href: "/how-it-works" }]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <AnswerBlock>
            {BRAND.name} works in four simple steps: tell us your needs, we find and verify
            suitable candidates, you meet and interview pre-screened helpers, and we stay with
            you after hiring with check-ins and replacement support. A one-time placement fee
            applies only after you hire a helper through us — no upfront charges.
          </AnswerBlock>
        </div>
      </section>

      <ProcessSteps
        steps={STEPS}
        eyebrow="Simple steps to success"
        title="Our streamlined process, step by step"
      />

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="What happens at each step"
            title="A closer look at the process"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ListBlock
              title="1. Tell us your needs"
              items={[
                "Select the service type (maid, cook, caregiver, etc.)",
                "Choose your preferred schedule",
                "Set your location and budget",
                "Add any special requirements",
              ]}
            />
            <ListBlock
              title="2. We find & verify"
              items={[
                "Background verification checks",
                "Document validation",
                "Reference checks from previous employers",
                "Skill and experience assessment",
              ]}
            />
            <ListBlock
              title="3. Meet & interview"
              items={[
                "Meet candidates at your convenience",
                "Conduct face-to-face interviews",
                "Assess compatibility with your family",
                "Trial period options available",
              ]}
            />
            <ListBlock
              title="4. Ongoing support"
              items={[
                "Replacement support if a placement is not the right fit",
                "Regular performance check-ins",
                "A dedicated point of contact",
                "Conflict resolution assistance",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Why choose EzyHelpers"
            title="We go the extra mile for your peace of mind"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Verified professionals",
                body: "All our helpers undergo strict background checks and verification processes before placement.",
              },
              {
                icon: Zap,
                title: "Quick matching",
                body: "Hassle-free matching with verified, experienced domestic helpers suited to your requirement.",
              },
              {
                icon: RefreshCcw,
                title: "Replacement support",
                body: "If you are dissatisfied, we help arrange a replacement based on earliest availability.",
              },
            ].map((c) => (
              <Card key={c.title}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-deep shadow-card">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Frequently asked questions"
        description="Common questions about our process."
        trackContext="how-it-works"
      />

      <CTASection
        title="Ready to get started?"
        description="Tell us what your home needs, and our team will call you to understand your requirement before suggesting a helper. No obligation."
      />
    </>
  );
}
