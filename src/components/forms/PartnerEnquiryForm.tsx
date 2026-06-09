"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { submitPartnerEnquiry } from "@/features/applications/actions";
import type { PartnerEnquiryInput } from "@/features/applications/schema";
import { track } from "@/lib/utils/analytics";

const PARTNER_TYPES = [
  { value: "training-institute", label: "Training institute / GDA-ANM-GNM centre" },
  { value: "apartment-association", label: "Apartment / community association" },
  { value: "referral", label: "Referral partner (doctor, physio, discharge)" },
  { value: "other", label: "Other" },
];

export function PartnerEnquiryForm({ defaultType }: { defaultType?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    setFormError(null);
    const fd = new FormData(e.currentTarget);
    const input = Object.fromEntries(fd.entries()) as unknown as PartnerEnquiryInput;

    const result = await submitPartnerEnquiry(input);
    setSubmitting(false);
    if (result.ok) {
      track("partner_enquiry_submit", { partner_type: input.partner_type });
      setDone(result.message);
    } else {
      setErrors(result.errors ?? {});
      setFormError(result.message);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-ok/30 bg-ok/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-ok" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">Enquiry received</h3>
        <p className="mt-2 text-muted">{done}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Partner enquiry form">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-0 w-0" aria-hidden />
      <Select
        label="Partnership type"
        name="partner_type"
        required
        defaultValue={defaultType}
        placeholder="Choose a partnership type"
        options={PARTNER_TYPES}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Organisation name" name="organisation" required error={errors.organisation?.[0]} />
        <Input label="Contact person" name="contact_name" required error={errors.contact_name?.[0]} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Phone number" name="phone" type="tel" required inputMode="tel" error={errors.phone?.[0]} />
        <Input label="Email" name="email" type="email" error={errors.email?.[0]} />
      </div>
      <Input label="City" name="city" />
      <Textarea label="How would you like to partner?" name="message" />
      {formError && <p role="alert" className="text-sm font-medium text-danger">{formError}</p>}
      <Button type="submit" variant="primary" size="lg" fullWidth disabled={submitting}>
        {submitting ? "Sending…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
