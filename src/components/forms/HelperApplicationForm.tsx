"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CallButton, WhatsAppButton } from "@/components/ContactActions";
import { submitHelperApplication } from "@/features/applications/actions";
import {
  APPLICANT_TYPES,
  EXPERIENCE_OPTIONS,
  type HelperApplicationInput,
} from "@/features/applications/schema";
import { track } from "@/lib/utils/analytics";

export function HelperApplicationForm({ defaultType }: { defaultType?: string }) {
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
    const input = Object.fromEntries(fd.entries()) as unknown as HelperApplicationInput;

    const result = await submitHelperApplication(input);
    setSubmitting(false);
    if (result.ok) {
      track("helper_application_submit", { applicant_type: input.applicant_type });
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
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">Application received</h3>
        <p className="mt-2 text-muted">{done}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton message="Hi EzyHelpers, I have applied for a job and want to know more." />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Job application form">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-0 w-0" aria-hidden />

      <Select
        label="Job type"
        name="applicant_type"
        required
        placeholder="Choose the kind of work"
        defaultValue={defaultType}
        options={APPLICANT_TYPES.map((o) => ({ value: o, label: o }))}
        error={errors.applicant_type?.[0]}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Your name" name="name" required autoComplete="name" error={errors.name?.[0]} />
        <Input label="Phone number" name="phone" type="tel" required inputMode="tel" autoComplete="tel" error={errors.phone?.[0]} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="City" name="city" required error={errors.city?.[0]} />
        <Input label="Current area / location" name="current_location" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          label="Experience"
          name="experience_years"
          required
          placeholder="Select experience"
          options={EXPERIENCE_OPTIONS.map((o) => ({ value: o, label: o }))}
          error={errors.experience_years?.[0]}
        />
        <Input label="Languages spoken" name="languages" placeholder="e.g. Hindi, Kannada, English" />
      </div>
      <Input label="Skills" name="skills" placeholder="e.g. elder care, cooking, baby care" />
      <Input label="Certifications (if any)" name="certifications" placeholder="e.g. GDA, ANM, GNM" />
      <Textarea label="Anything else you'd like to share" name="message" />

      {formError && <p role="alert" className="text-sm font-medium text-danger">{formError}</p>}

      <Button type="submit" variant="primary" size="lg" fullWidth disabled={submitting}>
        {submitting ? "Sending…" : "Submit Application"}
      </Button>
      <p className="text-xs leading-relaxed text-muted">
        EzyHelpers supports helpers and caregivers with safe, dignified work. Our team will
        contact you about suitable jobs. There is no charge to apply.
      </p>
    </form>
  );
}
