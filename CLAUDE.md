# CLAUDE.md — EzyHelpers

Project memory for Claude Code. The full product/design brief lives at
`docs/CLAUDE_EzyHelpers_Next_Supabase_AEO_Caregiving_Design.md` — read it before
making product, content, route, schema, or design changes.

## What this is
Caregiving-led home-support website for EzyHelpers (Bangalore). Next.js App Router +
TypeScript + Tailwind + Supabase. Equal weight to **caregiving** (elders, patients,
dementia, palliative, etc.) and **home help** (maids, cooks, nannies).

## Non-negotiables (summary — see brief for detail)
- TypeScript everywhere; Server Components by default; Client Components only when needed.
- Validate all form input with Zod. Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.
- Separate caregiver support from medical/nursing care. Use `MedicalScopeNote` on serious-care pages.
- No invented claims, numbers, ratings, prices, certifications, or guarantees.
- Every service/city/locality/condition/blog page: answer block, H1/H2 hierarchy,
  who-it's-for, what's-included, process, trust/safety, FAQs, schema, internal links, CTAs.

## Where things live
- Content/seed data (source of truth today): `src/content/*`, `src/lib/constants/*`
- Reusable sections/UI: `src/components/*`
- Forms + server actions: `src/components/forms/*`, `src/features/{leads,applications}/*`
- SEO (metadata, schema): `src/features/seo/*`, `src/components/seo/*`
- Supabase: `src/lib/supabase/*`, migrations + seed in `supabase/`

## Data layer
Pages read from typed seed constants in `src/content/*`. Supabase clients
(`client/server/admin`) degrade gracefully when env vars are absent, so the site
previews without credentials. Lead/application/partner writes go to Supabase when
configured (service-role, server-only) and log-and-succeed otherwise. To move
content into the CMS, port the seed constants into the `services` / `care_services`
tables and switch the bodies in `src/features/services/queries.ts`.

## Verify before done
`pnpm typecheck` and `pnpm lint` must pass; `pnpm build` must succeed.
