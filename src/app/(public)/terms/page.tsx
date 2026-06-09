import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MedicalScopeNote } from "@/components/seo/MedicalScopeNote";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: `The terms that apply when you use the ${BRAND.name} website and services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="This is a template. Please have it reviewed and finalised by a qualified professional before launch."
        breadcrumbs={[{ name: "Terms", href: "/terms" }]}
      />
      <section className="section">
        <div className="container-page space-y-6">
          <div className="prose-care">
            <p>
              By using the {BRAND.name} website and services, you agree to these terms. This
              template is a starting point and must be reviewed before publication.
            </p>
            <h2 className="font-heading text-xl font-semibold text-ink">Our services</h2>
            <p>
              {BRAND.name} helps families find verified, trained home helpers and caregivers, and
              helps helpers and caregivers find work. We coordinate introductions and support, and
              provide a clear scope of work for each engagement.
            </p>
            <h2 className="font-heading text-xl font-semibold text-ink">Caregiving scope</h2>
            <p>
              Our caregiving services are non-clinical. They support daily living, comfort, safety,
              mobility, hygiene, companionship, and family coordination, and are not a replacement
              for medical care.
            </p>
          </div>
          <MedicalScopeNote />
          <div className="prose-care">
            <h2 className="font-heading text-xl font-semibold text-ink">Enquiries and information</h2>
            <p>
              You agree to provide accurate information in enquiries and applications. We may
              contact you to understand and fulfil your requirement.
            </p>
            <h2 className="font-heading text-xl font-semibold text-ink">Contact</h2>
            <p>For questions about these terms, email {BRAND.email} or call {BRAND.phone}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
