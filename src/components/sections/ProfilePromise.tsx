import {
  BadgeCheck,
  UserRound,
  ShieldCheck,
  GraduationCap,
  Languages,
  FileText,
  ClipboardList,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * "Know who enters your home" — shows the profile details EzyHelpers shares
 * for every placement. An honest take on competitor profile-card patterns:
 * no invented people, just the fields families actually receive.
 */
const PROFILE_FIELDS = [
  { icon: ShieldCheck, label: "Identity & background verification", note: "police verification on request*" },
  { icon: ClipboardList, label: "Experience & skill assessment", note: "verified during screening" },
  { icon: GraduationCap, label: "Training for the role", note: "completed before placement" },
  { icon: Languages, label: "Languages & preferences", note: "matched to your household" },
  { icon: FileText, label: "Clear scope of work", note: "agreed upfront, in writing" },
];

export function ProfilePromise() {
  return (
    <section className="section bg-ivory" aria-labelledby="profile-promise-heading">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Know who enters your home"
            title="A complete profile, shared before you decide"
            description="We don't ask you to trust a stranger. Before any placement, you see exactly who we're suggesting and why they suit your home — and you can always ask for someone else."
          />
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Get Free Consultation
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted">
            * Police verification is conducted when specifically requested by the customer.
          </p>
        </div>

        {/* Sample profile card — fields only, no invented person */}
        <div className="relative">
          <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift sm:p-8">
            <div className="flex items-center gap-4 border-b border-edge/60 pb-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-mint text-brand-deep" aria-hidden>
                <UserRound className="h-7 w-7" />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold text-ink">
                  Your matched helper or caregiver
                </p>
                <p className="text-sm text-muted">Every profile we share includes:</p>
              </div>
            </div>
            <ul className="mt-5 space-y-4">
              {PROFILE_FIELDS.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
                    <f.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{f.label}</span>
                    <span className="block text-xs text-muted">{f.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Floating verified chip */}
          <div className="absolute -top-4 right-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-bold text-white shadow-card">
            <BadgeCheck className="h-4 w-4" aria-hidden /> Verified before placement
          </div>
        </div>
      </div>
    </section>
  );
}
