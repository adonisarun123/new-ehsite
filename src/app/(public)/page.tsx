import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { QuickServiceSelector } from "@/components/sections/QuickServiceSelector";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyTrust } from "@/components/sections/WhyTrust";
import { Accreditations } from "@/components/sections/Accreditations";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CareConditionCards } from "@/components/sections/CareConditionCards";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getAllCareServices, getAllServices } from "@/features/services/queries";
import { GENERAL_FAQS } from "@/content/seed-faqs";
import { BANGALORE_LOCALITIES } from "@/lib/constants/locations";
import { ShieldCheck } from "lucide-react";

const HELP_PROCESS = [
  { title: "Tell us your need", description: "Share the service, timing, and location through a quick enquiry, call, or WhatsApp." },
  { title: "Free consultation", description: "Our team understands your requirement before suggesting anyone." },
  { title: "Matched, verified helper", description: "We share a screened, trained helper or caregiver who suits your home." },
  { title: "Ongoing support", description: "We stay available for coordination and replacement support if needed." },
];

export default async function HomePage() {
  const careServices = await getAllCareServices();
  const services = await getAllServices();
  const featuredCare = careServices.slice(0, 6);

  return (
    <>
      <Hero />
      <QuickServiceSelector />
      <TrustBar />
      <StatsBar />

      {/* Caregiving-first block (spec §12.1 §5) */}
      <section className="section" aria-labelledby="care-heading">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Caregiving at home"
              title="Trained caregiving support for elders and patients"
              description="Non-clinical caregiver and attendant support focused on comfort, safety, and dignity — working alongside your doctors, never replacing them."
            />
            <Button href="/care-services" variant="outline">
              View all care services
            </Button>
          </div>
          <div className="mt-10">
            <CareConditionCards services={featuredCare} />
          </div>
        </div>
      </section>

      {/* Domestic helper block (spec §12.1 §6) */}
      <section className="section bg-gradient-to-b from-cta-soft/60 to-white" aria-labelledby="homehelp-heading">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Home help"
              eyebrowTone="warm"
              title="Verified helpers for everyday household needs"
              description="Live-in and full-time maids, cooks, nannies, and housekeeping help — screened, trained, and matched to your home."
            />
            <Button href="/home-help-services" variant="outline">
              View all home help
            </Button>
          </div>
          <div className="mt-10">
            <ServiceCards services={services} />
          </div>
        </div>
      </section>

      <ProcessSteps steps={HELP_PROCESS} eyebrow="Simple & supported" />

      {/* Why families trust EzyHelpers (mirrors live site) */}
      <WhyTrust />

      {/* Government / skill-council accreditations */}
      <Accreditations />

      {/* City / locality coverage */}
      <section className="section bg-brand-mint/40" aria-labelledby="coverage-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="Where we serve"
            title="Caregiving and home help across Bangalore"
            description="We support families across these localities and more. Don't see your area? Just ask."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {BANGALORE_LOCALITIES.map((l) => (
              <Link
                key={l.slug}
                href={`/localities/bangalore/${l.slug}/elderly-care`}
                className="rounded-full border border-edge bg-white px-4 py-2 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-card motion-reduce:transform-none"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Helper dignity / employment */}
      <section className="section" aria-labelledby="dignity-heading">
        <div className="container-page">
          <div className="grid items-center gap-8 rounded-3xl border border-cta/20 bg-gradient-to-br from-cream to-cta-soft/70 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <SectionHeading
                eyebrow="For helpers & caregivers"
                eyebrowTone="green"
                title="Safe, dignified work — without agent cuts"
                description="EzyHelpers helps trained helpers and caregivers — including GDA, ANM, and GNM candidates — find respectful jobs with supportive coordination."
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/helper-jobs" variant="primary">Find Helper Jobs</Button>
                <Button href="/caregiver-jobs" variant="outline">Find Caregiver Jobs</Button>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Respectful treatment and clear scope of work",
                "Support finding suitable, steady jobs",
                "No middleman exploitation",
                "Coordination and a point of contact",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden />
                  <span className="text-sm text-ink/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Customer testimonials (real reviews from live site) */}
      <Testimonials />

      <FAQSection faqs={GENERAL_FAQS.slice(0, 6)} trackContext="homepage" />

      <CTASection />
    </>
  );
}
