import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ListBlock } from "@/components/sections/ListBlock";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Live-In vs Day-Shift Caregiver — Which Makes Sense for Your Family?",
  description:
    "A clear comparison of live-in and day-shift caregiver arrangements in Bangalore — coverage, cost logic, family fit, and the situations each one is right for.",
  path: "/care-services/live-in-vs-day-shift-caregiver",
});

const SCENARIOS = [
  {
    situation: "Mother lives alone in Bangalore. Children abroad. Mild dementia.",
    recommended: "Live-in",
    why: "Overnight presence is non-negotiable when there's no one else in the home. A day shift wouldn't cover the highest-risk hours.",
  },
  {
    situation: "Working couple. Father at home recovering from a fracture.",
    recommended: "Day shift (12 hours)",
    why: "Family provides nights and weekend cover. The day shift fills working hours and costs significantly less than live-in.",
  },
  {
    situation: "Bedridden patient. Family at home, but exhausted at night.",
    recommended: "Night shift + family days",
    why: "A night caregiver covers the hardest hours so the family caregiver can sleep. Days are managed by the spouse or adult children.",
  },
  {
    situation: "Recent post-stroke discharge. First weeks of recovery.",
    recommended: "Live-in",
    why: "The highest-risk period for falls, missed medication, and complications. Continuous presence matters most here.",
  },
];

const FAQS = [
  {
    question: "Which costs less — live-in or day shift?",
    answer:
      "A 12-hour day shift generally costs less per month than a live-in arrangement, because the caregiver covers fewer hours. But the comparison depends on who covers the rest of the day: if the family would otherwise need a separate night caregiver, a single live-in placement is often the more economical option overall.",
  },
  {
    question: "What does a live-in arrangement actually involve?",
    answer:
      "The caregiver stays at the patient's home and is present through the day and overnight. The family provides lodging and meals, and the caregiver's daily rest hours and weekly off-day are agreed upfront so expectations are clear on both sides.",
  },
  {
    question: "Can a live-in caregiver help at night?",
    answer:
      "Yes — being present overnight for occasional help is part of why families choose live-in care. However, a live-in caregiver still needs adequate sleep. If the patient needs active, continuous attention through the night every night, a dedicated night-shift arrangement is the safer and fairer setup.",
  },
  {
    question: "Is a night-only shift available?",
    answer:
      "Yes. Night caregivers are a common arrangement for families who can manage daytime care themselves but need cover during sleeping hours — particularly for bedridden patients, post-surgery recovery, and dementia care. See our night caregiver service for details.",
  },
  {
    question: "How do live-in caregivers take their off-day?",
    answer:
      "Off-days are agreed at the start of the placement. The family either covers that day themselves or asks EzyHelpers to help arrange relief cover. Planning this upfront avoids last-minute gaps.",
  },
  {
    question: "Can we switch between arrangements later?",
    answer:
      "Yes. Many families start with live-in care during a high-risk recovery period and step down to a day shift as the patient stabilises — or the reverse when needs increase. Tell your EzyHelpers coordinator and the arrangement is adjusted.",
  },
];

export default function LiveInVsDayShiftPage() {
  return (
    <>
      <PageHero
        tone="care"
        eyebrow="Bangalore · Decision guide"
        title="Live-in or day-shift caregiver: which makes sense?"
        subtitle="Both arrangements are common. The right one depends less on the patient and more on who else is in the home — and which hours actually need covering."
        breadcrumbs={[
          { name: "Care Services", href: "/care-services" },
          {
            name: "Live-In vs Day-Shift Caregiver",
            href: "/care-services/live-in-vs-day-shift-caregiver",
          },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <AnswerBlock>
            Live-in care is the right choice when the patient cannot be alone — seniors living
            alone, recent post-discharge recovery, advanced dementia, or bedridden care. A day
            shift is right when family covers the remaining hours — working couples sharing care,
            a spouse covering nights, or recovery from minor surgery. A night-only shift suits
            families who need rest during sleeping hours.
          </AnswerBlock>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Side by side"
            title="What each arrangement actually delivers"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ListBlock
              title="Live-in caregiver"
              description="One caregiver stays in the home, with agreed rest hours and a weekly off-day."
              items={[
                "Presence through the day and overnight",
                "Strong continuity of routine and trust",
                "Quickest response when something goes wrong",
                "Best fit for seniors living alone",
                "Family provides lodging and meals",
              ]}
            />
            <ListBlock
              title="Day-shift caregiver (12 hours)"
              description="Typically 8am–8pm, while family covers nights."
              items={[
                "Full daytime supervision and support",
                "Lower monthly cost than live-in cover",
                "Family privacy in the evenings and at night",
                "Best fit for working couples sharing care",
                "Needs a family member for night cover",
              ]}
            />
            <ListBlock
              title="Night-shift caregiver"
              description="Covers sleeping hours so the family caregiver can rest."
              items={[
                "Overnight presence and safety supervision",
                "Real respite for exhausted family caregivers",
                "Pairs well with family-managed days",
                "Best fit for bedridden and post-surgery care",
                "Day hours remain the family's responsibility",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="The deciding question"
            title="Who else is in the home, and when?"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ListBlock
              title="Choose live-in when…"
              items={[
                "The patient lives alone or cannot safely be alone",
                "It's the first weeks after a hospital discharge",
                "Dementia, wandering, or night-time confusion is involved",
                "The patient is bedridden or needs frequent help",
              ]}
            />
            <ListBlock
              title="Choose a day or night shift when…"
              items={[
                "Family reliably covers the other half of the day",
                "Recovery is stable and lower-risk",
                "You want lower monthly cost and evening privacy",
                "The family caregiver mainly needs rest or work hours back",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Real situations"
            title="Four families, four right answers"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SCENARIOS.map((s) => (
              <div
                key={s.situation}
                className="flex h-full flex-col rounded-2xl border border-edge/70 bg-white p-6 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Situation</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/85">{s.situation}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                  Usually the right fit
                </p>
                <p className="mt-1 font-heading text-base font-semibold text-brand-deep">
                  {s.recommended}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Coverage questions, answered"
        description="What families ask when choosing between live-in and shift-based care."
        trackContext="live-in-vs-day-shift-caregiver"
      />

      <RelatedPages
        title="Related guides and services"
        links={[
          {
            label: "Home nurse vs caretaker",
            href: "/care-services/home-nurse-vs-caretaker",
            description: "Choosing the right role first",
          },
          {
            label: "Home nursing cost in Bangalore",
            href: "/care-services/home-nursing-cost-bangalore",
            description: "Market-rate ranges by arrangement",
          },
          {
            label: "Night caregiver at home",
            href: "/care-services/night-caregiver",
            description: "Overnight care and supervision",
          },
          {
            label: "Elderly care at home",
            href: "/care-services/elderly-care",
            description: "Daily support for seniors",
          },
          {
            label: "Home care for NRI families",
            href: "/care-services/nri-family-home-care",
            description: "Coordinating care from abroad",
          },
          {
            label: "Home care vs old age home",
            href: "/care-services/home-care-vs-old-age-home",
            description: "An honest comparison",
          },
        ]}
      />

      <CTASection
        title="Right cover, decided in a single call"
        description="Tell us who else is at home and which hours need covering. We'll recommend the right arrangement and share pricing after a free consultation."
      />
    </>
  );
}
