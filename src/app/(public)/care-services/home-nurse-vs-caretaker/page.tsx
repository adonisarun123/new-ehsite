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
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Home Nurse vs Caretaker — Which Does Your Family Need?",
  description:
    "Should you hire a home nurse, a caretaker, or both? A clear decision guide with side-by-side comparisons, typical market cost differences, and common scenarios from Bangalore families.",
  path: "/care-services/home-nurse-vs-caretaker",
});

const ROLES = [
  {
    badge: "Medical",
    tone: "care" as const,
    title: "Home nurse",
    body: "A licensed nurse (GNM / B.Sc Nursing) trained for procedural medical work and clinical observation.",
    items: [
      "Wound dressing, IV, catheter care",
      "Vital monitoring and escalation",
      "Medication administration",
      "Doctor handoffs and clinical log",
    ],
    cost: "₹35,000–₹55,000 / month live-in (typical Bangalore market range)",
  },
  {
    badge: "Most common",
    tone: "brand" as const,
    title: "Caretaker",
    body: "An experienced caregiver focused on hygiene, feeding, mobility, medication reminders, and companionship.",
    items: [
      "Hygiene, meals, and mobility support",
      "Medication reminders",
      "Day, night, or live-in shifts",
      "Companionship and supervision",
    ],
    cost: "₹18,000–₹26,000 / month live-in (typical Bangalore market range)",
  },
  {
    badge: "Physical handling",
    tone: "cta" as const,
    title: "Trained attendant",
    body: "Skilled in safe transfers, repositioning, and pressure-sore prevention — the work bedridden and post-stroke patients need.",
    items: [
      "Bedridden patient management",
      "Pressure-sore prevention",
      "Safe transfers and repositioning",
      "Tube-feed and catheter comfort",
    ],
    cost: "₹24,000–₹34,000 / month live-in (typical Bangalore market range)",
  },
];

const SCENARIOS = [
  {
    situation: "Mother, 72, type-2 diabetes and mild forgetfulness. Lives alone.",
    recommended: "Caretaker (live-in)",
    why: "No active medical procedures. Daily companionship, meals, medication reminders, and safety supervision matter most.",
    href: "/care-services/elderly-care",
  },
  {
    situation: "Father, 67, discharged after bypass surgery with dressings and prescriptions.",
    recommended: "Nurse + caretaker (combined)",
    why: "A visiting nurse for wound care and monitoring; a caretaker for meals, mobility, and hygiene. Two roles, one coordinated plan.",
    href: "/care-services/post-operative-care",
  },
  {
    situation: "Aunt, 78, bedridden after a stroke, with a feeding tube.",
    recommended: "Trained attendant (live-in)",
    why: "Skilled physical handling — repositioning, transfers, feeding-tube comfort. A general caretaker isn't equipped for this.",
    href: "/care-services/bedridden-patient-care",
  },
  {
    situation: "Husband recovering from a fracture, mobile but slow.",
    recommended: "Caretaker (12-hour day shift)",
    why: "Daytime companionship, mobility help, light support. No clinical needs — family covers the nights.",
    href: "/care-services/patient-care",
  },
  {
    situation: "Mother undergoing chemotherapy, with weekly clinical needs.",
    recommended: "Caretaker daily + nurse weekly",
    why: "A caretaker manages day-to-day comfort; a visiting nurse handles clinical tasks and flags warning signs to the doctor.",
    href: "/care-services/patient-care",
  },
  {
    situation: "Parent with advanced dementia and difficult evenings.",
    recommended: "Specialist dementia caregiver",
    why: "Behavioural support is the main work. Choose a caregiver with verified dementia experience, not a clinical nurse.",
    href: "/care-services/dementia-care",
  },
];

const FAQS = [
  {
    question: "In one sentence — what's the difference?",
    answer:
      "A home nurse performs clinical procedures like wound dressing, IV therapy, and catheter care; a caretaker supports daily living — hygiene, meals, mobility, medication reminders, and companionship.",
  },
  {
    question: "How do I know which one I actually need?",
    answer:
      "Look at the doctor's discharge or care plan. If it lists clinical procedures — dressings, injections, IV, tube management — you need nursing for at least those tasks. If the need is supervision, hygiene, meals, mobility, and company, a caretaker is the right fit. Many families combine a daily caretaker with scheduled nurse visits.",
  },
  {
    question: "Can a caretaker give injections or change a wound dressing?",
    answer:
      "No. Clinical procedures such as injections, IV therapy, and wound dressing are nursing tasks performed by qualified nurses. Caretakers placed by EzyHelpers provide medication reminders, daily-living support, and observation — and escalate to the family or doctor when something looks wrong.",
  },
  {
    question: "Is a nurse always the better choice?",
    answer:
      "Not necessarily — they're different jobs. A nurse is trained for clinical work, while an experienced caretaker is often better suited to long hours of companionship, hygiene, feeding, and mobility support. Paying for nursing when there are no clinical tasks is one of the most common ways families overspend.",
  },
  {
    question: "Can I save money with a caretaker plus weekly nurse visits?",
    answer:
      "For stable patients, yes — this combination is one of the most cost-effective arrangements. At typical Bangalore market rates, a live-in caretaker with two to three weekly nurse visits costs substantially less than a live-in nurse while still covering clinical needs.",
  },
  {
    question: "What if my parent's needs change midway?",
    answer:
      "Arrangements can be adjusted — adding nurse visits after a new diagnosis, moving from a caretaker to a trained attendant if mobility declines, or stepping down as the patient recovers. Tell your EzyHelpers coordinator and we'll rework the plan.",
  },
];

export default function NurseVsCaretakerPage() {
  return (
    <>
      <PageHero
        tone="care"
        eyebrow="Bangalore · Decision guide"
        title="Home nurse vs caretaker: which does your family need?"
        subtitle="Many families overspend or underspend in the first two weeks because nobody explains the difference. Here it is — clearly, honestly, with examples."
        breadcrumbs={[
          { name: "Care Services", href: "/care-services" },
          { name: "Home Nurse vs Caretaker", href: "/care-services/home-nurse-vs-caretaker" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl space-y-6">
          <AnswerBlock>
            Hire a nurse when there are clinical procedures — wounds, IV lines, catheters, tube
            feeds, vitals that can&apos;t be missed. Hire a caretaker when daily living needs help —
            hygiene, meals, mobility, medication reminders, companionship. Hire a trained attendant
            when there&apos;s skilled physical handling — bedridden or post-stroke care. Many
            families need a combination, and that&apos;s usually the most cost-effective answer.
          </AnswerBlock>
          <MedicalScopeNote />
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="The three roles"
            title="Different jobs, different people"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="flex h-full flex-col rounded-2xl border border-edge/70 bg-white p-6 shadow-card sm:p-7"
              >
                <Badge tone={role.tone} className="self-start">{role.badge}</Badge>
                <h3 className="mt-4 font-heading text-xl font-semibold text-ink">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{role.body}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-edge/60 pt-5">
                  {role.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-deep" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted">{role.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Capability comparison"
            title="What each role can — and cannot — do"
            description="The honest version, including where roles overlap and where they don't."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ListBlock
              title="Tasks that need a nurse"
              description="Clinical procedures performed only by licensed nurses."
              items={[
                "Wound dressing and IV care",
                "Catheter and feeding-tube management",
                "Medication administration and oversight",
                "Clinical vitals monitoring with doctor handoffs",
              ]}
            />
            <ListBlock
              title="Tasks a caretaker handles best"
              description="The daily-living work that fills most caregiving hours."
              items={[
                "Bathing, hygiene, and grooming",
                "Feeding, meal preparation, and swallow-safe routines",
                "Mobility, walking support, and light exercise",
                "Companionship, supervision, and medication reminders",
              ]}
            />
            <ListBlock
              title="Tasks a trained attendant handles best"
              description="Skilled physical handling for higher-dependency patients."
              items={[
                "Safe transfers — bed to chair, chair to toilet",
                "Repositioning and pressure-sore prevention",
                "Bedridden patient handling with dignity",
                "Comfort care around tubes and catheters (non-clinical)",
              ]}
            />
            <ListBlock
              variant="cross"
              title="What caregivers do not do"
              description="These remain clinical tasks for nurses and doctors."
              items={[
                "Injections, IV therapy, or wound dressing",
                "Changing catheters or clinical tube procedures",
                "Diagnosing conditions or altering medication",
                "Emergency medical treatment — caregivers escalate instead",
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
            title="Six scenarios, six clear answers"
            description="If your situation looks like one of these, you're probably looking at the right answer. If it doesn't — talk to us and we'll work it through."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.why}</p>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:underline"
                >
                  Explore this service <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Decision questions, answered"
        description="What families ask when choosing between nursing and caregiver support."
        trackContext="home-nurse-vs-caretaker"
      />

      <RelatedPages
        title="Related guides and services"
        links={[
          {
            label: "Home nursing cost in Bangalore",
            href: "/care-services/home-nursing-cost-bangalore",
            description: "Market-rate ranges by arrangement",
          },
          {
            label: "Live-in vs day-shift caregiver",
            href: "/care-services/live-in-vs-day-shift-caregiver",
            description: "Which coverage pattern fits your home",
          },
          {
            label: "Hospital discharge care",
            href: "/care-services/hospital-discharge-care",
            description: "Set up care before discharge day",
          },
          {
            label: "Patient care at home",
            href: "/care-services/patient-care",
            description: "Caregiver support during recovery",
          },
          {
            label: "Bedridden patient care",
            href: "/care-services/bedridden-patient-care",
            description: "Trained attendant support",
          },
          {
            label: "Elderly care at home",
            href: "/care-services/elderly-care",
            description: "Daily support for seniors",
          },
        ]}
      />

      <CTASection
        title="Still not sure? A short call decides it"
        description="Tell us the situation. We'll recommend the right role — caretaker, attendant, or a combination with visiting clinical support — before you spend anything."
      />
    </>
  );
}
