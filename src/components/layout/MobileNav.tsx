"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, MessageCircle, FileText, Briefcase } from "lucide-react";
import { MAIN_NAV } from "@/lib/constants/navigation";
import { telHref, whatsappHref } from "@/lib/utils/phone";
import { track } from "@/lib/utils/analytics";
import { cn } from "@/lib/utils/cn";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!open) return null;

  return (
    <div className="xl:hidden">
      <nav
        className="container-page max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-edge bg-white py-4"
        aria-label="Mobile"
      >
        {/* Priority quick actions (spec §7.1) */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          <a
            href={telHref()}
            onClick={() => track("call_click", { location: "mobile-nav" })}
            className="flex items-center justify-center gap-2 rounded-xl border border-edge py-3 text-sm font-semibold text-ink"
          >
            <Phone className="h-4 w-4 text-brand" /> Call
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener"
            onClick={() => track("whatsapp_click", { location: "mobile-nav" })}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-xl bg-cta py-3 text-sm font-semibold text-ink"
          >
            <FileText className="h-4 w-4" /> Get Help
          </Link>
          <Link
            href="/helper-jobs"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-xl border border-edge py-3 text-sm font-semibold text-ink"
          >
            <Briefcase className="h-4 w-4 text-brand" /> Apply for Job
          </Link>
        </div>

        <ul className="divide-y divide-edge">
          {MAIN_NAV.map((item) => (
            <li key={item.label} className="py-1">
              {item.children ? (
                <>
                  <button
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-ink"
                    aria-expanded={expanded === item.label}
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-muted transition-transform",
                        expanded === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded === item.label && (
                    <ul className="pb-2 pl-3">
                      <li>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block py-2 text-sm font-semibold text-brand-deep"
                        >
                          View all {item.label}
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-ink/80"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
