import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";
import { BRAND, MEDICAL_SCOPE_NOTE, CREDIBILITY_NOTE } from "@/lib/constants/brand";
import { telHref, whatsappHref } from "@/lib/utils/phone";

const SOCIAL = [
  { label: "Facebook", href: BRAND.social.facebook, icon: Facebook },
  { label: "Instagram", href: BRAND.social.instagram, icon: Instagram },
  { label: "LinkedIn", href: BRAND.social.linkedin, icon: Linkedin },
  { label: "YouTube", href: BRAND.social.youtube, icon: Youtube },
].filter((s) => s.href);

const careLinks = [
  { label: "Elderly Care", href: "/care-services/elderly-care" },
  { label: "Dementia Care", href: "/care-services/dementia-care" },
  { label: "Palliative Care", href: "/care-services/palliative-care" },
  { label: "Patient Care", href: "/care-services/patient-care" },
  { label: "Post-Operative Care", href: "/care-services/post-operative-care" },
  { label: "Bedridden Care", href: "/care-services/bedridden-patient-care" },
];

const homeHelpLinks = [
  { label: "Live-in Maids", href: "/services/live-in-maids" },
  { label: "Full-Time Maids", href: "/services/full-time-maids" },
  { label: "Cooks", href: "/services/cooks" },
  { label: "Nanny / Babysitter", href: "/services/nanny-babysitter" },
  { label: "Housekeeping", href: "/services/housekeeping" },
];

const localityLinks = [
  { label: "HSR Layout", href: "/localities/bangalore/hsr-layout/elderly-care" },
  { label: "Whitefield", href: "/localities/bangalore/whitefield/elderly-care" },
  { label: "Sarjapur Road", href: "/localities/bangalore/sarjapur-road/live-in-maids" },
  { label: "Koramangala", href: "/localities/bangalore/koramangala/elderly-care" },
  { label: "Indiranagar", href: "/localities/bangalore/indiranagar/elderly-care" },
];

const workLinks = [
  { label: "Helper Jobs", href: "/helper-jobs" },
  { label: "Caregiver Jobs", href: "/caregiver-jobs" },
  { label: "Training Institute Partners", href: "/partners/training-institutes" },
  { label: "Apartment Partnerships", href: "/partners/apartment-associations" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/70 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand summary */}
          <div className="lg:col-span-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white px-3 py-2"
              aria-label={`${BRAND.name} home`}
            >
              <Image
                src="/logos/ezyhelpers-logo.png"
                alt={`${BRAND.name} logo`}
                width={96}
                height={93}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {BRAND.description}
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <a href={telHref()} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden /> {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" aria-hidden /> {BRAND.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden /> Bangalore, India
              </p>
            </div>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <s.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            <Column title="Care Services" links={careLinks} />
            <Column title="Home Help" links={homeHelpLinks} />
            <Column title="Areas We Serve" links={localityLinks} />
            <Column title="Work & Partners" links={workLinks} />
            <Column title="Resources" links={resourceLinks} />
          </div>
        </div>

        {/* Credibility / accreditation (from live site) */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm leading-relaxed text-white/75">
          <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/80" aria-hidden />
          <p>{CREDIBILITY_NOTE}</p>
        </div>

        {/* Caregiving scope disclaimer (spec §7.2) */}
        <div className="mt-4 rounded-2xl bg-white/5 p-4 text-xs leading-relaxed text-white/65">
          <strong className="text-white/80">Care scope:</strong> {MEDICAL_SCOPE_NOTE}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <nav className="flex gap-5" aria-label="Legal">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
