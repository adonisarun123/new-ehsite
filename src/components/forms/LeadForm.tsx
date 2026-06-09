"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CallButton, WhatsAppButton } from "@/components/ContactActions";
import { submitLead } from "@/features/leads/actions";
import {
  SERVICE_OPTIONS,
  URGENCY_OPTIONS,
  CONTACT_METHODS,
  type LeadInput,
} from "@/features/leads/schema";
import { track } from "@/lib/utils/analytics";

const CARE_SERVICES_SET = new Set<string>([
  "Elderly Care",
  "Dementia Care",
  "Palliative Care Support",
  "Patient Care",
  "Post-Operative Care",
  "Bedridden Patient Care",
  "Parkinson's Care",
  "Stroke Recovery Support",
]);

interface LeadFormProps {
  /** Pre-select a service (e.g. from a service page). */
  defaultService?: string;
  /** Pre-fill city / locality from city/locality pages. */
  defaultCity?: string;
  defaultLocality?: string;
  /** "care" forces the care fields open; "customer" shows the standard form. */
  variant?: "customer" | "care";
  compact?: boolean;
}

export function LeadForm({
  defaultService,
  defaultCity = "Bangalore",
  defaultLocality,
  variant = "customer",
  compact,
}: LeadFormProps) {
  const [service, setService] = useState(defaultService ?? "");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const showCareFields = variant === "care" || CARE_SERVICES_SET.has(service);

  function onFirstInteraction() {
    if (!startedRef.current) {
      startedRef.current = true;
      track("lead_form_start", { service: service || undefined });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    setFormError(null);

    const fd = new FormData(e.currentTarget);
    const tracking = readTracking();
    const input = {
      lead_type: "customer",
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service_interest: String(fd.get("service_interest") ?? ""),
      city: String(fd.get("city") ?? defaultCity),
      locality: String(fd.get("locality") ?? ""),
      preferred_contact_method: (fd.get("preferred_contact_method") as string) || undefined,
      care_condition: String(fd.get("care_condition") ?? ""),
      care_urgency: (fd.get("care_urgency") as string) || undefined,
      patient_age: String(fd.get("patient_age") ?? ""),
      preferred_support_type: String(fd.get("preferred_support_type") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      ...tracking,
    } as LeadInput;

    const result = await submitLead(input);
    setSubmitting(false);

    if (result.ok) {
      track(showCareFields ? "care_form_submit" : "lead_form_submit", {
        service: input.service_interest,
      });
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
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">Request received</h3>
        <p className="mt-2 text-muted">{done}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={onFirstInteraction}
      noValidate
      className="space-y-4"
      aria-label="Enquiry form"
    >
      {/* Honeypot — visually hidden, not for users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0"
        aria-hidden
      />

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Input label="Your name" name="name" required autoComplete="name" error={errors.name?.[0]} />
        <Input
          label="Phone number"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          error={errors.phone?.[0]}
        />
      </div>

      <Select
        label="Service needed"
        name="service_interest"
        required
        placeholder="Choose a service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        options={SERVICE_OPTIONS.map((o) => ({ value: o, label: o }))}
        error={errors.service_interest?.[0]}
      />

      {/* Compact (hero/sidebar) shows only City as the 4th essential field.
          The full form keeps Locality alongside it. */}
      {compact ? (
        <Input label="City" name="city" defaultValue={defaultCity} required error={errors.city?.[0]} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="City" name="city" defaultValue={defaultCity} required error={errors.city?.[0]} />
          <Input label="Locality / area" name="locality" defaultValue={defaultLocality} />
        </div>
      )}

      {/* Detailed fields only on the full form — keeps the hero card short.
          The team gathers these on the call-back (see reassurance below). */}
      {!compact && (
        <>
          {/* Progressive disclosure for care needs (spec §16.2) */}
          {showCareFields && (
            <div className="space-y-4 rounded-2xl border border-care bg-care/40 p-4">
              <p className="text-sm font-medium text-[#23456b]">A few care details (optional)</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Patient / elder age" name="patient_age" inputMode="numeric" />
                <Select
                  label="Urgency"
                  name="care_urgency"
                  placeholder="Select urgency"
                  options={URGENCY_OPTIONS.map((o) => ({ value: o, label: o }))}
                />
              </div>
              <Input
                label="Condition or support required"
                name="care_condition"
                placeholder="e.g. mobility help, dementia support, post-surgery care"
              />
            </div>
          )}

          <Select
            label="Preferred contact method"
            name="preferred_contact_method"
            placeholder="How should we reach you?"
            options={CONTACT_METHODS.map((o) => ({ value: o, label: o }))}
          />

          <Textarea
            label="Message (optional)"
            name="message"
            placeholder="Tell us a little about your requirement"
          />
        </>
      )}

      {formError && (
        <p role="alert" className="text-sm font-medium text-danger">
          {formError}
        </p>
      )}

      <Button type="submit" variant="cta" size="lg" fullWidth disabled={submitting}>
        {submitting ? "Sending…" : "Request Free Consultation"}
      </Button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
        <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
        {compact
          ? "Quick first step — our team will call to understand your needs. Your details stay private."
          : "Our team will call you to understand the requirement before suggesting a helper or caregiver. Your details are kept private."}
      </p>
    </form>
  );
}

/** Read UTM + landing context from the URL / document (spec §16.2). */
function readTracking() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const get = (k: string) => params.get(k) ?? undefined;
  return {
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
    utm_term: get("utm_term"),
    utm_content: get("utm_content"),
    landing_page: window.location.pathname,
    referrer: document.referrer || undefined,
  };
}
