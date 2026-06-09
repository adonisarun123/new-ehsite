import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${BRAND.name} collects, uses, and protects the information you share through enquiries and applications.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This is a template policy. Please have it reviewed and finalised by a qualified professional before launch."
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <section className="section">
        <div className="container-page prose-care">
          <p>
            {BRAND.name} ("we", "us") respects your privacy. This policy explains what information
            we collect, how we use it, and the choices you have. This template is provided as a
            starting point and must be reviewed before publication.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink">Information we collect</h2>
          <p>
            When you submit an enquiry or application, we collect details you provide such as your
            name, phone number, email, city, locality, service interest, and any message. We may
            also collect basic technical data such as the page you came from and campaign
            parameters (UTM) to understand how families find us.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink">How we use your information</h2>
          <p>
            We use your information to respond to your enquiry, understand your requirement, suggest
            suitable helpers or caregivers, and coordinate support. We do not send sensitive
            personal health details to analytics tools.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink">Sharing</h2>
          <p>
            We share your information only as needed to provide the service — for example, with our
            coordination team. We do not sell your personal information.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink">Your choices</h2>
          <p>
            You can contact us at {BRAND.email} to ask about, update, or remove your information.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink">Contact</h2>
          <p>
            For any privacy questions, email {BRAND.email} or call {BRAND.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
