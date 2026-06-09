import { CARE_SERVICES, getCareService } from "@/content/seed-care-services";
import { SERVICES, getService } from "@/content/seed-services";
import type { CareService, Service } from "./types";

/**
 * Content queries. Currently sourced from typed seed constants, which are also
 * the canonical seed for Supabase. When the `services` / `care_services` tables
 * are populated, swap the bodies to read from Supabase and keep these signatures.
 */

export async function getAllCareServices(): Promise<CareService[]> {
  return [...CARE_SERVICES].sort((a, b) => a.priority - b.priority);
}

export async function getCareServiceBySlug(
  slug: string
): Promise<CareService | undefined> {
  return getCareService(slug);
}

export async function getAllServices(): Promise<Service[]> {
  return [...SERVICES].sort((a, b) => a.priority - b.priority);
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return getService(slug);
}

/** Related care services excluding the current one (spec §14.4 internal linking). */
export async function getRelatedCareServices(
  excludeSlug: string,
  limit = 4
): Promise<CareService[]> {
  return CARE_SERVICES.filter((s) => s.slug !== excludeSlug).slice(0, limit);
}

export async function getRelatedServices(
  excludeSlug: string,
  limit = 4
): Promise<Service[]> {
  return SERVICES.filter((s) => s.slug !== excludeSlug).slice(0, limit);
}

export type AnyService =
  | { kind: "care"; service: CareService }
  | { kind: "home"; service: Service };

/** Resolve a slug to either a care service or a home service (for city/locality pages). */
export async function getAnyServiceBySlug(slug: string): Promise<AnyService | undefined> {
  const care = getCareService(slug);
  if (care) return { kind: "care", service: care };
  const home = getService(slug);
  if (home) return { kind: "home", service: home };
  return undefined;
}
