import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ListBlock } from "@/components/sections/ListBlock";
import { CTASection } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";
import { HeartHandshake, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About EzyHelpers — Caregiving-led Home Support",
  description:
    "EzyHelpers brings structure, trust, and dignity to home help and caregiving in Bangalore — supporting families and helpers with verified, trained, and respectful care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${BRAND.name}`,
          url: `${BRAND.url}/about`,
        }}
      />
      <PageHero
        eyebrow="About us"
        title="Bringing structure, trust, and dignity to home help and caregiving"
        subtitle="EzyHelpers helps Indian families find verified, trained, and supported caregivers and home helpers — with care for both families and the people who serve them."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our mission" title="Reliable care at home, with dignity" />
            <div className="prose-care mt-4">
              <p>
                {BRAND.name} exists to make finding dependable home support simple, safe, and
                respectful. Too many families rely on informal, unverified hiring when they need
                help most — for ageing parents, recovering patients, or busy households.
              </p>
              <p>
                We bring a structured alternative: verified, trained helpers and caregivers,
                clear scope of work, and supportive coordination — so families get reliable care,
                and helpers get safe, dignified work.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Our direction" title="Caregiving-led home support" />
            <div className="prose-care mt-4">
              <p>
                While we continue to serve everyday domestic help needs, our focus is on
                caregiving — non-clinical support for elders, patients, and recovering family
                members. This means comfort, safety, mobility, hygiene, and companionship at home,
                always alongside the family's doctors.
              </p>
              <p>
                We are clear about scope: we are not a hospital, clinic, or nursing replacement.
                We support families and follow medical guidance, never replace it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-mint/40">
        <div className="container-page">
          <SectionHeading center eyebrow="What we solve" title="The problems we help families with" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Unverified hiring", body: "We replace informal, risky hiring with screened, background-checked helpers and caregivers." },
              { icon: HeartHandshake, title: "Care without dignity", body: "We support respectful, trained caregiving for elders and patients at home." },
              { icon: Users, title: "Helpers without support", body: "We help helpers and caregivers find safe, fair, commission-free work." },
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

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <ListBlock
            title="How we support families"
            items={[
              "A free consultation to understand your real needs",
              "Verified, trained, and matched helpers and caregivers",
              "Clear scope of work and expectations",
              "Coordination and a point of contact",
              "Replacement support if a placement is not the right fit",
            ]}
          />
          <ListBlock
            title="How we support helpers and caregivers"
            items={[
              "Safe, dignified, commission-free job opportunities",
              "Respectful treatment and clear scope of work",
              "Support for trained GDA, ANM, and GNM candidates",
              "A point of contact for coordination",
              "Fair, transparent working arrangements",
            ]}
          />
        </div>
      </section>

      <section className="section bg-cream/50">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Our philosophy" title="Verification and training, done with care" />
          <div className="prose-care mt-4">
            <p>
              Every helper and caregiver goes through identity and background checks before
              placement, with experience and skills verified during screening. Caregivers are
              supported to provide respectful, hygienic, safety-first daily care.
            </p>
            <p>
              We believe trusted care comes from people who are themselves treated with trust and
              dignity — and that is the standard we work toward every day.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
