import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy",
  description: `How refunds and helper replacements work when you use ${BRAND.name} services — placement fee refunds, free replacements, timelines, and how to raise a request.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        subtitle="Our refund and replacement policy explains what you can expect at each stage of the service, so there are no surprises."
        breadcrumbs={[{ name: "Refund Policy", href: "/refund-policy" }]}
      />
      <section className="section">
        <div className="container-page space-y-6">
          <div className="prose-care">
            <h2 className="font-heading text-xl font-semibold text-ink">Refund summary</h2>
            <ul>
              <li>
                <strong>Free replacements</strong> — free helper replacements within the first
                month if you are not satisfied, as per the plan you have subscribed to.
              </li>
              <li>
                <strong>Quick processing</strong> — refund requests are processed with transparent
                timelines, starting within 3–5 business days.
              </li>
              <li>
                <strong>Customer protection</strong> — you are eligible for a full refund if no
                helper profiles are provided within 7 days of registration.
              </li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-ink">Refund policy overview</h2>
            <ul>
              <li>
                {BRAND.name} operates on a service placement model where we connect customers with
                domestic helpers.
              </li>
              <li>
                Our one-time placement fee covers verification, matching, and initial support
                services.
              </li>
              <li>Refunds are processed based on the service stage and satisfaction commitments.</li>
              <li>We maintain transparent refund policies to ensure customer satisfaction.</li>
              <li>Different refund terms apply to different service stages and situations.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-ink">Placement fee refunds</h2>
            <ul>
              <li>
                <strong>Helper does not report</strong> — if the helper does not report for duty on
                the first day, we will arrange a replacement at the earliest possible.
              </li>
              <li>
                <strong>Helper leaves early (first 3 days)</strong> — if the helper leaves within
                the first 3 days, we will provide a replacement or credit toward a new placement.
              </li>
              <li>
                <strong>Helper leaves within the first week</strong> — if the helper leaves within
                the first week due to compatibility issues, a replacement will be arranged.
              </li>
              <li>
                <strong>After 7 days of service</strong> — no refund or replacement is applicable
                once the helper has completed 7 days of satisfactory service.
              </li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-ink">Free replacement policy</h2>
            <ul>
              <li>
                <strong>Replacement within 10–15 days</strong> — if you are not satisfied with the
                assigned helper, a replacement will be provided as per the plan subscribed.
              </li>
              <li>
                <strong>Advance notice required</strong> — customers should notify us at least 15
                days in advance to request a replacement.
              </li>
              <li>
                <strong>Replacements during the first month</strong> — up to 2 replacements can be
                requested within the first month if service expectations are not met, depending on
                the plan subscribed.
              </li>
              <li>
                <strong>Temporary assistance</strong> — for urgent cases, a temporary helper can be
                arranged until a permanent replacement is assigned.
              </li>
              <li>
                <strong>Replacement for genuine concerns</strong> — if you have concerns about your
                helper, such as skill gaps, attitude issues, or reliability problems, we will
                discuss the matter with both parties and arrange a replacement accordingly.
              </li>
              <li>
                <strong>Service duration continuity</strong> — the service period starts from the
                first helper placement. If we provide a replacement later, the service days keep
                counting; the duration does not restart. All replacements are part of the same
                ongoing service period.
              </li>
              <li>
                <strong>Note:</strong> all of the above rules are subject to the specific plan you
                have subscribed to.
              </li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-ink">
              Refund processing timeframes
            </h2>
            <ul>
              <li>Refund requests must be submitted within the specified timeframes.</li>
              <li>7–10 business days refund processing for pre-placement cancellations.</li>
              <li>15 business days for placement fee refunds after helper placement.</li>
              <li>15 business days for complex cases requiring investigation.</li>
              <li>Refunds are processed to the original payment method or by bank transfer.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-ink">
              Non-refundable situations
            </h2>
            <ul>
              <li>
                Helper salaries paid directly to helpers are non-refundable through {BRAND.name}.
              </li>
              <li>Services completed satisfactorily for more than 7 days.</li>
              <li>Customer-initiated termination without a valid service-related reason.</li>
              <li>Cancellations due to customer relocation or changed requirements.</li>
              <li>Third-party payment processing fees (if applicable).</li>
              <li>
                Services used during festivals or emergency situations with premium pricing.
              </li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-ink">
              Dispute resolution process
            </h2>
            <ul>
              <li>Contact customer support immediately for any service issues.</li>
              <li>Detailed investigation of all refund requests within 48 hours.</li>
              <li>Documentation is required for service quality or performance issues.</li>
              <li>Mediation support is available for complex disputes.</li>
              <li>Final decision communicated within 72 hours of complaint submission.</li>
              <li>Escalation to senior management for unresolved cases.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-ink">Need help with refunds?</h2>
            <p>
              Our customer service team is ready to assist with your refund requests. Call us on{" "}
              {BRAND.phone} for immediate assistance, or email {BRAND.email} with detailed refund
              requests and documentation.
            </p>
            <p>
              This Refund Policy was last updated on December 09, 2025. We reserve the right to
              modify this policy with prior notice to customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
