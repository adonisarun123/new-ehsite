"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { track } from "@/lib/utils/analytics";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Allows GA to attribute faq_expand events to a page/section. */
  trackContext?: string;
}

/** Keyboard-accessible FAQ accordion (spec §11.5). */
export function Accordion({ items, trackContext }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-edge overflow-hidden rounded-2xl border border-edge bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  const next = isOpen ? null : i;
                  setOpen(next);
                  if (next === i) track("faq_expand", { context: trackContext, question: item.question });
                }}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink hover:bg-brand-mint/50"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-brand transition-transform",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 text-[0.975rem] leading-relaxed text-ink/85"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
