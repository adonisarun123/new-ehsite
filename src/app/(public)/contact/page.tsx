import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Briefcase } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadForm } from "@/components/forms/LeadForm";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";
import { telHref, whatsappHref } from "@/lib/utils/phone";
import { GENERAL_FAQS } from "@/content/seed-faqs";

export const metadata: Metadata = buildMetadata({
  title: "Contact EzyHelpers — Talk to Our Team",
  description:
    "Contact EzyHelpers for caregiving and home help in Bangalore. Call, WhatsApp, or send an enquiry and our team will understand your requirement before suggesting a helper or caregiver.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${BRAND.name}`,
          url: `${BRAND.url}/contact`,
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to EzyHelpers"
        subtitle="Tell us what your family needs. Our team will call you to understand the requirement before suggesting a helper or caregiver."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          {/* Quick contact + form */}
          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={telHref()} className="flex items-center gap-3 rounded-2xl border border-edge bg-white p-4 hover:border-brand">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint text-brand-deep">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-muted">Call us</span>
                  <span className="font-semibold text-ink">{BRAND.phone}</span>
                </span>
              </a>
              <a href={whatsappHref()} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl border border-edge bg-white p-4 hover:border-brand">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#1a8f47]">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-muted">WhatsApp</span>
                  <span className="font-semibold text-ink">Message us</span>
                </span>
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 rounded-2xl border border-edge bg-white p-4 hover:border-brand">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-care text-[#1F5FA0]">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-muted">Email</span>
                  <span className="font-semibold text-ink">{BRAND.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-edge bg-white p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-[#8A6D2F]">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-muted">Service area</span>
                  <span className="font-semibold text-ink">Bangalore, India</span>
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-edge bg-white p-6 shadow-card sm:p-8">
              <SectionHeading title="Send an enquiry" />
              <p className="mt-1 text-sm text-muted">
                Share a few details and we'll get back to you.
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </div>

          {/* Side: apply + office */}
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint text-brand-deep">
                <Briefcase className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-semibold text-ink">
                Looking for work?
              </h3>
              <p className="mt-2 text-sm text-muted">
                If you are a helper or caregiver looking for a safe, dignified job, apply with
                EzyHelpers. There is no charge to apply.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button href="/helper-jobs" variant="primary" size="sm">Apply as Helper</Button>
                <Button href="/caregiver-jobs" variant="outline" size="sm">Apply as Caregiver</Button>
              </div>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-ink">Service areas</h3>
              <p className="mt-2 text-sm text-muted">
                We serve families across Bangalore and support families in Bareilly, with plans to
                expand to more Indian cities. Don't see your area? Just ask.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FAQSection faqs={GENERAL_FAQS.slice(0, 5)} trackContext="contact" />
    </>
  );
}
