import {
  ShieldCheck,
  CalendarClock,
  Star,
  IndianRupee,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

/** Trust features mirrored from www.ezyhelpers.com. */
const FEATURES = [
  {
    icon: ShieldCheck,
    title: "100% Verified & Background Checked",
    body: "Every helper undergoes police verification*, skill assessment, and training. DWSSC-registered professionals you can trust.",
  },
  {
    icon: CalendarClock,
    title: "Instant Booking & Flexible Hours",
    body: "From a few hours of help to full-time live-in support. Book instantly or schedule in advance.",
  },
  {
    icon: Star,
    title: "Highly Rated Professionals",
    body: "4.8/5 average rating from 10,000+ families. Our helpers are loved for their reliability and service.",
  },
  {
    icon: IndianRupee,
    title: "Transparent, Fair Pricing",
    body: "A simple one-time commission, then pay your helper directly. No hidden charges, no ongoing fees.",
  },
  {
    icon: GraduationCap,
    title: "Skilled & Trained Professionals",
    body: "All helpers are trained for the skills they need before placement, with a thorough skill assessment.",
  },
  {
    icon: RefreshCw,
    title: "Hassle-Free Replacements",
    body: "Not satisfied? We'll find you a replacement at no extra cost. Your satisfaction, guaranteed.",
  },
];

export function WhyTrust() {
  return (
    <section className="section" aria-labelledby="why-trust-heading">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="Why families trust EzyHelpers"
          title="A safer, more reliable way to find home help"
          description="We don't just connect you with helpers — we make sure they're verified, trained, and committed to your family's safety."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <li
              key={f.title}
              className="rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift motion-reduce:transform-none"
            >
              <span
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  [
                    "bg-brand-mint text-brand-deep",
                    "bg-accent/10 text-accent-deep",
                    "bg-cta/15 text-cta-ink",
                  ][i % 3]
                }`}
              >
                <f.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-muted">
          * Police verification is conducted when specifically requested by the customer.
        </p>
      </div>
    </section>
  );
}
