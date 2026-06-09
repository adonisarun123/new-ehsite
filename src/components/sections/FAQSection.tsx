import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { SectionHeading } from "./SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/features/seo/schema";

interface FAQSectionProps {
  faqs: AccordionItem[];
  title?: string;
  description?: string;
  trackContext?: string;
}

/** Visible FAQ accordion + matching FAQPage JSON-LD (spec §13.2, §15.4). */
export function FAQSection({
  faqs,
  title = "Frequently asked questions",
  description,
  trackContext,
}: FAQSectionProps) {
  if (!faqs.length) return null;
  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container-page">
        <JsonLd data={faqSchema(faqs)} />
        <SectionHeading title={title} description={description} />
        <div className="mt-8 max-w-3xl">
          <Accordion items={faqs} trackContext={trackContext} />
        </div>
      </div>
    </section>
  );
}
