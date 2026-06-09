import { BRAND } from "@/lib/constants/brand";

/** Build a tel: link from the configured primary phone number. */
export function telHref(): string {
  return `tel:${BRAND.phone.replace(/[^+\d]/g, "")}`;
}

/**
 * Build a WhatsApp click-to-chat link.
 * @param message Optional prefilled message.
 */
export function whatsappHref(message?: string): string {
  const digits = BRAND.whatsapp.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Display-friendly phone string. */
export function formatPhone(raw: string = BRAND.phone): string {
  return raw;
}
