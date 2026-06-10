import {
  ShieldCheck,
  CalendarClock,
  Star,
  IndianRupee,
  GraduationCap,
  RefreshCw,
} from "lucide-react";

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

/** Dark trust band with numbered cards (editorial style). */
export function WhyTrust() {
  return (
    <section className="section bg-night text-white" aria-labelledby="why-trust-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow !text-white/70">Why families trust EzyHelpers</p>
          <h2
            id="why-trust-heading"
            className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl"
          >
            The unglamorous work that makes home help safe.
          </h2>
          <p className="mt-3 text-white/70">
            We don&apos;t just connect you with helpers — we make sure they&apos;re verified,
            trained, and committed to your family&apos;s safety.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <li
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="font-heading text-2xl font-medium text-white/50" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                  <f.icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-white/50">
          * Police verification is conducted when specifically requested by the customer.
        </p>
      </div>
    </section>
  );
}
