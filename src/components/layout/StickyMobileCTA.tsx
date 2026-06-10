"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/utils/phone";
import { track } from "@/lib/utils/analytics";

/** Sticky Call / WhatsApp / Enquire bar on mobile (spec §12.1). */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-edge bg-white/95 backdrop-blur xl:hidden">
      <div className="grid grid-cols-3 divide-x divide-edge">
        <a
          href={telHref()}
          onClick={() => track("call_click", { location: "sticky-bar" })}
          className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-ink"
        >
          <Phone className="h-5 w-5 text-brand" aria-hidden />
          Call
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener"
          onClick={() => track("whatsapp_click", { location: "sticky-bar" })}
          className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-[#1a8f47]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-0.5 bg-cta/10 py-2.5 text-xs font-semibold text-cta-ink"
        >
          <FileText className="h-5 w-5 text-cta" aria-hidden />
          Enquire
        </Link>
      </div>
    </div>
  );
}
