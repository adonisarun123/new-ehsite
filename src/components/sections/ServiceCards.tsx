"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/features/services/types";
import { Icon } from "@/components/Icon";
import { track } from "@/lib/utils/analytics";

interface Props {
  services: Pick<Service, "slug" | "name" | "shortDescription" | "icon">[];
}

export function ServiceCards({ services }: Props) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/services/${s.slug}`}
            onClick={() => track("service_card_click", { service: s.slug, kind: "home" })}
            className="group flex h-full flex-col rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint text-brand-deep">
              <Icon name={s.icon} className="h-6 w-6" />
            </span>
            <h3 className="font-heading text-lg font-semibold text-ink">{s.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {s.shortDescription}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              View details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
