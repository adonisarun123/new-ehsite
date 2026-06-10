import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ListBlock } from "@/components/sections/ListBlock";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { MedicalScopeNote } from "@/components/seo/MedicalScopeNote";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home Nursing Cost in Bangalore — Market Rates for Visits, Shifts & Live-In Care",
  description:
    "What home nursing and caregiver support typically cost in Bangalore — market-rate ranges for nurse visits, 12-hour shifts, 24-hour cover, and live-in arrangements, plus what changes the price.",
  path: "/care-services/home-nursing-cost-bangalore",
});

interface RateRow {
  arrangement: string;
  bestFor: string;
  range: string;
  unit: string;
}

const NURSE_RATES: RateRow[] = [
  {
    arrangement: "Single nurse visit",
    bestFor: "Wound dressing, IV, injections, catheter change",
    range: "₹600 – ₹1,200",
    unit: "per visit",
  },
  {
    arrangement: "12-hour nursing shift",
    bestFor: "Daytime monitoring, post-surgery recovery, oxygen support",
    range: "₹1,200 – ₹1,800",
    unit: "per shift",
  },
  {
    arrangement: "24-hour shift cover",
    bestFor: "Critical recovery requiring continuous nursing",
    range: "₹2,200 – ₹3,000",
    unit: "per day",
  },
  {
    arrangement: "Live-in nurse",
    bestFor: "Long-term medical-grade care at home",
    range: "₹35,000 – ₹55,000",
    unit: "per month",
  },
  {
    arrangement: "ICU-grade nurse (live-in)",
    bestFor: "Tracheostomy, ventilator, complex post-stroke care",
    range: "₹55,000 – ₹85,000",
    unit: "per month",
  },
];

const CARETAKER_RATES: RateRow[] = [
  {
    arrangement: "Caretaker visit (4 hours)",
    bestFor: "Short daily support — hygiene, meals, company",
    range: "₹400 – ₹700",
    unit: "per visit",
  },
  {
    arrangement: "12-hour shift caretaker",
    bestFor: "Day or night cover when family handles the rest",
    range: "₹800 – ₹1,200",
    unit: "per day",
  },
  {
    arrangement: "Live-in caretaker",
    bestFor: "Round-the-clock daily-living support",
    range: "₹18,000 – ₹26,000",
    unit: "per month",
  },
  {
    arrangement: "Trained attendant (live-in)",
    bestFor: "Bedridden and post-stroke physical handling",
    range: "₹24,000 – ₹34,000",
    unit: "per month",
  },
];

const HOSPITAL_COMPARISON = [
  {
    label: "Private room (mid-tier hospital)",
    range: "₹8,000 – ₹15,000 / day",
    note: "Excludes nursing, food, and medication",
    home: false,
  },
  {
    label: "ICU bed",
    range: "₹15,000 – ₹35,000 / day",
    note: "Plus consumables, often far higher",
    home: false,
  },
  {
    label: "Live-in home nurse",
    range: "₹1,150 – ₹1,800 / day",
    note: "Familiar surroundings, family present",
    home: true,
  },
  {
    label: "Live-in caretaker + nurse visits",
    range: "₹650 – ₹1,000 / day",
    note: "For stable patients with weekly clinical needs",
    home: true,
  },
];

const FAQS = [
  {
    question: "Why does home nursing cost vary so much in Bangalore?",
    answer:
      "Four factors move the price most: the credentials required (ICU-trained or tracheostomy-experienced nurses cost more than general home nurses), the hours covered (night and 24-hour cover carry a premium), the clinical complexity of the case, and the locality — outer Bangalore and areas far from caregiver-dense neighbourhoods can see modest travel premiums.",
  },
  {
    question: "Is home care cheaper than staying in a hospital?",
    answer:
      "For most stable patients, yes. A private hospital room in Bangalore typically runs ₹8,000–₹15,000 per day before nursing, food, and medication, while live-in home nursing works out to roughly ₹1,150–₹1,800 per day at market rates. Recovery at home also keeps the patient in familiar surroundings with family present.",
  },
  {
    question: "What is the most economical way to get clinical care at home?",
    answer:
      "For stable patients, a live-in caretaker combined with two to three visiting nurse sessions per week is usually far cheaper than a live-in nurse, while still covering wound care, injections, and monitoring. A day shift instead of 24-hour cover also saves significantly when the patient is stable overnight.",
  },
  {
    question: "Are these EzyHelpers prices?",
    answer:
      "No. The figures on this page are indicative market ranges observed across Bangalore, shared to help families budget. EzyHelpers shares your exact caregiver or attendant quote after a free consultation, once we understand the patient's needs, the hours required, and the experience level the case calls for.",
  },
  {
    question: "What does a live-in arrangement mean for cost?",
    answer:
      "A live-in caregiver stays at the patient's home, so the family provides lodging and meals in addition to the monthly amount. Weekly off-days and any festival or annual bonus are agreed upfront, so there are no surprises later in the placement.",
  },
  {
    question: "What if our needs change midway through a placement?",
    answer:
      "Arrangements can be changed — for example, stepping down from 24-hour cover to a day shift as the patient recovers, or adding nurse visits if clinical needs increase. Discuss the change with your placement coordinator and the arrangement is adjusted from the next cycle.",
  },
];

function RateCard({ row }: { row: RateRow }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-edge/70 bg-white p-6 shadow-card">
      <h3 className="font-heading text-lg font-semibold text-ink">{row.arrangement}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{row.bestFor}</p>
      <p className="mt-4 border-t border-edge/60 pt-4">
        <span className="font-heading text-xl font-semibold text-brand-deep">{row.range}</span>
        <span className="ml-2 text-sm text-muted">{row.unit}</span>
      </p>
    </div>
  );
}

export default function HomeNursingCostPage() {
  return (
    <>
      <PageHero
        tone="care"
        eyebrow="Bangalore · Cost guide"
        title="How much does home nursing cost in Bangalore?"
        subtitle="Market-rate ranges for every common arrangement — nurse visits, 12-hour shifts, 24-hour cover, and live-in care — plus what changes the price and where families spend less without compromising care."
        breadcrumbs={[
          { name: "Care Services", href: "/care-services" },
          { name: "Home Nursing Cost", href: "/care-services/home-nursing-cost-bangalore" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl space-y-6">
          <AnswerBlock>
            At typical Bangalore market rates, home nursing costs around ₹600–₹1,200 per nurse
            visit, ₹1,200–₹1,800 for a 12-hour shift, and ₹35,000–₹55,000 per month for a live-in
            nurse. Non-clinical caretaker support costs much less — roughly ₹18,000–₹26,000 per
            month live-in. These are market ranges, not quotes; EzyHelpers shares exact pricing
            after a free consultation.
          </AnswerBlock>
          <MedicalScopeNote />
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nursing arrangements"
            title="Nurse pricing, by arrangement"
            description="Indicative market ranges across Bangalore — not an EzyHelpers quote. Final pricing always depends on the patient's clinical complexity and the experience level the case requires."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NURSE_RATES.map((row) => (
              <RateCard key={row.arrangement} row={row} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Often a better fit"
            eyebrowTone="green"
            title="Caretaker pricing, for non-clinical needs"
            description="If the patient doesn't need procedural medical care, a caretaker is usually the right choice — significantly more affordable, and well suited to hygiene, feeding, mobility, and companionship."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CARETAKER_RATES.map((row) => (
              <RateCard key={row.arrangement} row={row} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Not sure which role you need? Read our{" "}
            <Link href="/care-services/home-nurse-vs-caretaker" className="font-medium text-brand-deep underline-offset-2 hover:underline">
              home nurse vs caretaker decision guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="What moves the price"
            title="What costs more — and where families save"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ListBlock
              title="What tends to push cost up"
              items={[
                "Specialised credentials — ICU-trained or tracheostomy-experienced nurses cost meaningfully more",
                "Night and 24-hour cover, which carry a premium for staffing rotation and rest",
                "High-complexity care protocols that need senior nursing experience",
                "Outer-Bangalore localities far from caregiver-dense areas",
              ]}
            />
            <ListBlock
              title="Where families spend less without compromising"
              items={[
                "Longer commitments — placements over several months typically cost less per month",
                "A live-in caretaker plus 2–3 weekly nurse visits instead of a live-in nurse, for stable patients",
                "Family members sharing nights or weekends to reduce the shift burden",
                "A 12-hour day shift instead of 24-hour cover when the patient is stable overnight",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="The economics"
            title="Home care vs an extended hospital stay"
            description="For most stable patients, continuing recovery at home is dramatically less expensive than staying in hospital — and gentler on the patient. Typical Bangalore market figures:"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOSPITAL_COMPARISON.map((c) => (
              <div
                key={c.label}
                className="flex h-full flex-col rounded-2xl border border-edge/70 bg-white p-6 shadow-card"
              >
                {c.home && <Badge tone="care" className="mb-3 self-start">Home care</Badge>}
                <h3 className="font-heading text-base font-semibold text-ink">{c.label}</h3>
                <p className="mt-3 font-heading text-lg font-semibold text-brand-deep">{c.range}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="No hidden charges"
            title="What's included, and what's paid separately"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ListBlock
              title="Included in an EzyHelpers placement"
              items={[
                "Caregiver matching and placement",
                "Aadhaar and government ID verification",
                "Background and reference checks",
                "Initial briefing and orientation",
                "Replacement support if the match isn't working",
                "Ongoing family support and follow-ups",
              ]}
            />
            <ListBlock
              variant="cross"
              title="Paid separately by the family"
              items={[
                "Caregiver salary, paid as per the agreed arrangement",
                "Medical consumables — gloves, dressings, syringes",
                "Prescription medication and IV fluids",
                "Equipment such as oxygen, hospital bed, or suction",
                "Hospital visits and ambulance services",
                "Festival or annual bonus, where agreed",
              ]}
            />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Cost questions, answered"
        description="What Bangalore families ask most before arranging care at home."
        trackContext="home-nursing-cost-bangalore"
      />

      <RelatedPages
        title="Keep deciding with these guides"
        links={[
          {
            label: "Home nurse vs caretaker",
            href: "/care-services/home-nurse-vs-caretaker",
            description: "A 3-minute decision guide",
          },
          {
            label: "Live-in vs day-shift caregiver",
            href: "/care-services/live-in-vs-day-shift-caregiver",
            description: "Coverage, cost, and family fit",
          },
          {
            label: "Insurance and home care",
            href: "/care-services/insurance-and-home-care",
            description: "What policies typically cover",
          },
          {
            label: "Hospital discharge care",
            href: "/care-services/hospital-discharge-care",
            description: "Care arranged before discharge day",
          },
          {
            label: "Patient care at home",
            href: "/care-services/patient-care",
            description: "Caregiver support for recovery",
          },
          {
            label: "Elderly care at home",
            href: "/care-services/elderly-care",
            description: "Daily support for seniors",
          },
        ]}
      />

      <CTASection
        title="Get your exact quote after a free consultation"
        description="Tell us the situation — patient needs, hours, and locality. Our team will recommend the right arrangement and share transparent pricing before you commit to anything."
      />
    </>
  );
}
