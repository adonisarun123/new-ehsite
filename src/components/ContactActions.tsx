"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { telHref, whatsappHref } from "@/lib/utils/phone";
import { track } from "@/lib/utils/analytics";

interface ActionProps {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  message?: string;
  className?: string;
}

export function CallButton({ size = "md", fullWidth, className }: ActionProps) {
  return (
    <Button
      href={telHref()}
      variant="outline"
      size={size}
      fullWidth={fullWidth}
      className={className}
      onClick={() => track("call_click", { location: "button" })}
    >
      <Phone className="h-4 w-4" aria-hidden />
      Call Now
    </Button>
  );
}

export function WhatsAppButton({
  size = "md",
  fullWidth,
  message,
  className,
}: ActionProps) {
  return (
    <Button
      href={whatsappHref(message ?? "Hi EzyHelpers, I'd like to enquire about home support.")}
      variant="whatsapp"
      size={size}
      fullWidth={fullWidth}
      className={className}
      target="_blank"
      rel="noopener"
      onClick={() => track("whatsapp_click", { location: "button" })}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      WhatsApp
    </Button>
  );
}
