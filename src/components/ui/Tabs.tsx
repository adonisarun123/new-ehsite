"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  className?: string;
}

export function Tabs({ items, className }: TabsProps) {
  const [active, setActive] = useState(items[0]?.id);

  return (
    <div className={className}>
      <div role="tablist" className="flex flex-wrap gap-2 border-b border-edge">
        {items.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={cn(
                "min-h-[44px] rounded-t-lg px-4 text-sm font-semibold transition-colors",
                selected
                  ? "border-b-2 border-brand text-brand"
                  : "text-muted hover:text-ink"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {items.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== tab.id}
          className="pt-5"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
