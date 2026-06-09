# EzyHelpers Website

Caregiving-led home-support website for **EzyHelpers** (Bangalore) — trained caregivers
and verified home helpers for Indian families. Built with Next.js App Router, TypeScript,
Tailwind CSS, and Supabase, optimised for SEO and answer engines (AEO).

## Tech stack
- **Next.js 15** (App Router, Server Components) + **TypeScript**
- **Tailwind CSS** with the EzyHelpers brand tokens
- **Supabase** (PostgreSQL) for leads, applications, and content — optional in dev
- **Zod** for form validation, **lucide-react** for icons
- **pnpm**, deployable to **Vercel**

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in values (see below)
pnpm dev                     # http://localhost:3000
```

The site runs **without** Supabase credentials — pages use typed seed data in
`src/content/*`, and form submissions log to the server and return success. Add
Supabase keys to persist leads and applications.

### Scripts
| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | ESLint (next/core-web-vitals) |

> Note: `next build` skips the in-build lint/type-check (run them with the scripts
> above). See `next.config.ts`.

## Environment variables
See `.env.example`. Key ones:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL (used for metadata, sitemap, schema)
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — public Supabase
- `SUPABASE_SERVICE_ROLE_KEY` — **server-only**, never exposed to the browser
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID` — analytics (optional)
- `NEXT_PUBLIC_PRIMARY_PHONE_NUMBER`, `NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER` — contact CTAs

## Supabase setup
Run the migrations and seed in `supabase/` against your project (SQL editor or CLI):

```
supabase/migrations/0001_init.sql   # tables, triggers, indexes
supabase/migrations/0002_rls.sql    # row-level security policies
supabase/seed.sql                   # cities, localities, blog categories, settings
```

RLS allows public **inserts** to `leads`, `helper_applications`, and
`partner_enquiries`, and restricts reads to authenticated admins. Trusted server
writes use the service-role key (bypasses RLS) in server actions / route handlers.

## Project structure
```
src/
  app/
    (public)/        Public pages (home, services, care, cities, localities, jobs, blog, …)
    admin/           Admin scaffold (noindex) — wire to Supabase Auth before launch
    api/             Route handlers: leads, helper-applications, partner-enquiries, webhooks
    sitemap.ts, robots.ts, layout.tsx, not-found.tsx, globals.css
  components/
    layout/          Header, Footer, MobileNav, StickyMobileCTA
    sections/        Hero, AnswerBlock-driven page bodies, cards, process, FAQ, CTA, …
    forms/           LeadForm, HelperApplicationForm, PartnerEnquiryForm
    seo/             JsonLd, Breadcrumbs, AnswerBlock, MedicalScopeNote
    ui/              Button, Card, Input, Select, Textarea, Badge, Accordion, Tabs, Stat
  features/          leads, applications, services, seo (queries, schema, actions, types)
  content/           Typed seed data (care services, services, FAQs, blog, jobs)
  lib/               supabase clients, constants (brand, navigation, locations), utils
supabase/            migrations + seed.sql
docs/                Full product & design brief
```

## Content & compliance
EzyHelpers is a **home-support / caregiver service, not a medical provider**. Care
pages separate caregiver support from clinical care and include a scope note
(`MedicalScopeNote`). Do not add invented claims, ratings, prices, certifications,
or guarantees. See `CLAUDE.md` and the brief in `docs/` for the full content rules.

## Before launch
- Map legacy URLs → new routes and add 301s in `src/lib/constants/redirects.ts`
- Add real brand assets to `public/logos`, `public/og`, `public/images`
- Wire the admin area to Supabase Auth + admin RLS
- Replace template Privacy Policy / Terms with reviewed legal copy
- Verify GA4/GTM, schema validation, and the launch QA checklist in the brief
```
