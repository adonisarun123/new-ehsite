"use client";

import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/utils/phone";
import { track } from "@/lib/utils/analytics";

/**
 * Always-reachable WhatsApp button (desktop only — mobile has the sticky CTA bar).
 * Standard trust/access pattern across Indian home-services brands.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref("Hi EzyHelpers, I'd like to enquire about home support.")}
      target="_blank"
      rel="noopener"
      aria-label="Chat with EzyHelpers on WhatsApp"
      onClick={() => track("whatsapp_click", { location: "floating-button" })}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 motion-reduce:transform-none xl:flex"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
