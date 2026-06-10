import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Home, Briefcase, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { ListBlock } from "@/components/sections/ListBlock";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";
import { CAREER_CATEGORIES, CAREER_ROLES } from "@/content/seed-careers";

export const metadata: Metadata = buildMetadata({
  title: "Careers at EzyHelpers — Jobs for Helpers, Caregivers & Our Team",
  description:
    "Work with EzyHelpers in Bangalore: safe, dignified, commission-free jobs for helpers and caregivers, plus roles on our coordination and operations team.",
  path: "/careers",
});

const TRACKS = [
  {
    icon: HeartHandshake,
    title: "Caregiver jobs",
    body: "For trained caregivers and attendants — including GDA, ANM, and GNM candidates — who want respectful, steady placements with families.",
    href: "/caregiver-jobs",
    cta: "Explore caregiver jobs",
    tile: "bg-care text-brand-deep",
  },
  {
    icon: Home,
    title: "Helper jobs",
    body: "For maids, cooks, nannies, and housekeeping professionals looking for fair, commission-free work matched to your skills and location.",
    href: "/helper-jobs",
    cta: "Explore helper jobs",
    tile: "bg-cta-soft text-cta-ink",
  },
  {
    icon: Briefcase,
    title: "Team & operations roles",
    body: "We occasionally hire for coordination, placement, and operations roles in Bangalore. Write to us with your background and the kind of work you're looking for.",
    href: `mailto:${BRAND.email}?subject=Careers at EzyHelpers`,
    cta: "Email your profile",
    tile: "bg-brand-mint text-brand-deep",
  },
];

const GROUPED_ROLES = CAREER_CATEGORIES.map((category) => ({
  category,
  roles: CAREER_ROLES.filter((r) => r.category === category),
})).filter((g) => g.roles.length > 0);

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work that treats you with dignity"
        subtitle="Whether you provide care, run a home, or want to help us coordinate it all — there's a place for you at EzyHelpers."
        breadcrumbs={[{ name: "Careers", href: "/careers" }]}
      />

      <section className="bg-white pb-14 pt-8 sm:pb-20">
        <div className="container-page space-y-10">
          <AnswerBlock>
            EzyHelpers offers safe, dignified, commission-free work in Bangalore for helpers and
            caregivers — including trained GDA, ANM, and GNM candidates — along with occasional
            coordination and operations roles on our own team. Applying is free, and our team
            supports you through matching, placement, and beyond.
          </AnswerBlock>

          <div>
            <SectionHeading
              eyebrow="Choose your path"
              title="Three ways to work with us"
            />
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TRACKS.map((t) => {
                const external = t.href.startsWith("mailto:");
                const inner = (
                  <>
                    <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${t.tile}`}>
                      <t.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-ink">{t.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep">
                      {t.cta}
                      {external ? (
                        <Mail className="h-4 w-4" aria-hidden />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      )}
                    </span>
                  </>
                );
                const className =
                  "group flex h-full flex-col rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift motion-reduce:transform-none";
                return (
                  <li key={t.title}>
                    {external ? (
                      <a href={t.href} className={className}>{inner}</a>
                    ) : (
                      <Link href={t.href} className={className}>{inner}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            eyebrow="Open roles"
            title="Current openings on our team"
            description="Roles across caregiving, operations, city leadership, growth, and product. Each posting lists what you'll do, what we look for, and how to apply."
          />
          <div className="mt-10 space-y-10">
            {GROUPED_ROLES.map((group) => (
              <div key={group.category}>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {group.category}
                  <span className="ml-2 text-sm font-normal text-muted">
                    {group.roles.length} {group.roles.length === 1 ? "role" : "roles"}
                  </span>
                </h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.roles.map((role) => (
                    <li key={role.slug}>
                      <Link
                        href={`/careers/${role.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-edge bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift motion-reduce:transform-none"
                      >
                        <h4 className="font-heading text-base font-semibold text-ink">
                          {role.title}
                        </h4>
                        <p className="mt-2 flex-1 text-sm text-muted">
                          <span className="inline-flex items-start gap-1.5">
                            <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" aria-hidden />
                            {role.location}
                          </span>
                        </p>
                        <p className="mt-2 flex items-center justify-between text-sm">
                          <span className="text-muted">{role.type}</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-brand-deep">
                            View role
                            <ArrowRight
                              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                              aria-hidden
                            />
                          </span>
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <ListBlock
            title="What working with EzyHelpers means"
            items={[
              "No agent cuts or middleman commission",
              "Respectful treatment and a clear scope of work",
              "Support finding suitable, steady placements",
              "A point of contact for coordination and concerns",
              "Fair, transparent working arrangements",
            ]}
          />
          <ListBlock
            title="Good to have when you apply"
            items={[
              "A phone number we can reach you on",
              "Your experience and the kind of work you prefer",
              "Languages you speak",
              "Preferred localities and working hours",
              "Training certificates, if you have them (GDA, ANM, GNM)",
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Ready to find respectful, steady work?"
        description="Apply for free. Our team will contact you about suitable jobs — no charges, no middlemen."
        primaryHref="/helper-jobs"
        primaryLabel="Apply Now"
      />
    </>
  );
}
