# CLAUDE.md — EzyHelpers Website Rebuild

> Project memory and coding instructions for Claude Code. Keep this file in the root of the repository as `/CLAUDE.md`. Update this file whenever the product direction, route structure, Supabase schema, service model, design system, SEO/AEO strategy, or compliance rules change.

---

## 1. Project Identity

### Brand

**EzyHelpers**  
Website: `https://www.ezyhelpers.com`  
Business type: Domestic helper placement, trained caregiving support, and home-care workforce platform.  
Primary market: Bangalore, India.  
Secondary market: Bareilly and future Indian cities.  
Primary positioning: **Trusted, trained, and verified home helpers and caregivers for Indian families who need reliable domestic support, elderly care, patient care, dementia care, palliative support, childcare, cooks, and live-in/full-time help.**

### Strategic repositioning for the rebuild

The new EzyHelpers website must not feel like only a maid-service website. It must become a **caregiving-led home support platform** while continuing to serve the domestic helper demand.

The site must give equal strategic importance to:

1. **Caregiving services**
   - Elderly care
   - Dementia care
   - Palliative care support
   - Parkinson's care support
   - Stroke recovery support
   - Post-operative care support
   - Bedridden patient care
   - Mobility assistance
   - Companion care
   - Patient attendant services
   - Caregiver support for chronic conditions

2. **Domestic helper services**
   - Live-in maids
   - Full-time maids
   - Cooks
   - Nannies and babysitters
   - Housekeeping support
   - Home managers, if retained
   - On-demand and part-time services only if the business confirms they remain active priorities

The user must immediately understand that EzyHelpers is suitable for both:

- Families looking for daily home help
- Families looking for dependable non-clinical caregiving support for elders, patients, children, and recovering family members

### Current brand promise

EzyHelpers helps Indian households find verified, trained, and reliable domestic helpers and caregivers with dignity, safety, transparency, and structured support.

### Suggested tagline options

Primary tagline:

**Trusted hands for your home.**

Caregiving-led alternatives:

- **Trusted care and home help, when your family needs it most.**
- **Reliable caregivers and helpers for safer homes.**
- **Care, comfort, and trusted support at home.**
- **Verified home helpers. Trained caregiving support. One trusted platform.**

Use the primary tagline unless the design direction chooses a more caregiving-led brand statement.

### Brand tone

- Warm, human, reassuring
- Trust-first and safety-first
- Professional but not hospital-like
- Caring, calm, and family-oriented
- Clear and simple Indian English
- Respectful toward elders, patients, children, helpers, and caregivers
- Empathetic without fear-mongering
- Transparent about process, pricing, scope, and limitations
- Avoid exaggerated medical claims or miracle language

### Primary audiences

1. Adult children arranging care for ageing parents in Bangalore
2. Families with elders needing dementia, mobility, post-stroke, Parkinson's, or palliative support
3. Families with post-operative or chronically ill patients needing an attendant at home
4. Working couples needing live-in maids, full-time maids, nannies, and cooks
5. NRIs managing care for parents in Bangalore
6. New parents needing baby care or nanny support
7. Busy urban households needing trained, verified domestic help

### Secondary audiences

1. Domestic helpers looking for safe, commission-free, dignified jobs
2. ANM/GNM/GDA/NSDC-trained caregivers looking for caregiving jobs
3. Training institutes, GDA centres, ANM/GNM networks, and supply partners
4. Apartment associations and community partners
5. Doctors, physiotherapists, discharge coordinators, and referral partners
6. Investors, partners, and collaborators

---

## 2. Project Goal

Rebuild `www.ezyhelpers.com` as a fast, modern, accessible, conversion-focused, AEO-optimised, SEO-friendly, Supabase-backed website using:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase PostgreSQL
- Supabase Auth for admin access, if required
- Supabase Storage for media, if required
- Vercel deployment

The rebuilt website must become EzyHelpers' primary digital growth engine for:

- Customer enquiries
- Caregiving leads
- Domestic helper leads
- Locality-based SEO/AEO traffic
- Service education content
- Helper and caregiver hiring
- Referral partner enquiries
- Blog and knowledge-led authority building
- Admin-led content management, if needed

The website must be designed so that both search engines and AI answer engines can easily understand:

- What EzyHelpers does
- Which services are caregiving services
- Which services are domestic helper services
- Which services are non-clinical support and which are not medical/nursing treatment
- Who each service is for
- Where services are available
- How the screening and matching process works
- How families can enquire
- How helpers and caregivers can apply
- Why EzyHelpers is trustworthy
- What customers should expect
- What helpers and caregivers should expect

---

## 3. Business Priorities

### 3.1 Primary conversion goals

Every important page must guide users toward one or more of these actions:

1. Submit customer enquiry form
2. Call EzyHelpers
3. WhatsApp EzyHelpers
4. Request free consultation
5. Select service type, city, and urgency
6. Apply as helper/caregiver
7. Submit partner/institute enquiry
8. Download or view caregiving checklist, where applicable
9. Read related caregiving guide or FAQ

### 3.2 Service priority hierarchy

The new site must give top navigation, homepage space, and landing page depth to the following service hierarchy:

#### Tier 1 — Caregiving growth vertical

1. Elderly care
2. Dementia care
3. Palliative care support
4. Patient care
5. Post-operative care
6. Bedridden patient care
7. Parkinson's care support
8. Stroke recovery support
9. Companion care
10. Night caregiver / overnight attendant

#### Tier 2 — Family and childcare vertical

1. Baby care
2. Nanny / babysitter
3. Childcare support
4. Mother and newborn support, only if business confirms service scope

#### Tier 3 — Domestic helper vertical

1. Live-in maids
2. Full-time maids
3. Cooks
4. Housekeeping
5. Home managers, if retained
6. Part-time/on-demand, only if actively retained

#### Tier 4 — Workforce and partner vertical

1. Helper jobs
2. Caregiver jobs
3. ANM/GNM/GDA job pages
4. Training institute partnerships
5. Apartment/community partnerships
6. Referral partner pages

### 3.3 Positioning rules

The website must position EzyHelpers as:

- A caregiving-led home support company
- A structured alternative to informal, unverified hiring
- A platform that respects and supports helpers/caregivers
- A service for practical family needs, not a hospital or clinical nursing replacement

Caregiving language must be strong but compliant:

Use:

- Caregiver support
- Patient attendant
- Elder care attendant
- Dementia care support
- Palliative support at home
- Daily living assistance
- Mobility support
- Hygiene and feeding assistance
- Companionship
- Family coordination
- Doctor/physio instruction follow-through, where appropriate

Avoid:

- Cure
- Treatment guarantee
- Medical supervision, unless provided by qualified personnel
- ICU-level care
- Nurse-led care, unless actual nurses are being provided
- 100% recovery
- Guaranteed same-day placement, unless confirmed
- Emergency medical response

---

## 4. Non-Negotiable Claude Rules

### 4.1 Development rules

Claude must follow these rules in every coding task:

- Use TypeScript everywhere.
- Use Next.js App Router.
- Prefer Server Components by default.
- Use Client Components only when browser state, event handlers, animations, forms, or client-only APIs are needed.
- Use semantic HTML.
- Keep public content crawlable without JavaScript.
- Keep main page content server-rendered wherever possible.
- Use Tailwind CSS for styling.
- Use reusable components instead of duplicating UI.
- Validate all form inputs with Zod.
- Never expose Supabase service-role keys to the browser.
- Never use `any` unless absolutely unavoidable; explain why in a comment.
- Always handle loading, empty, error, and success states.
- Use accessible forms, labels, buttons, landmarks, and alt text.
- All phone, WhatsApp, and form CTAs must be trackable.
- Do not hard-code content that should be managed through Supabase CMS tables.
- Do not invent business claims, numbers, reviews, ratings, certifications, prices, medical capabilities, or guarantees.
- Do not remove existing indexed route value without creating redirect rules.

### 4.2 Brand and content rules

- Write in simple Indian English.
- Avoid jargon.
- Avoid exaggerated claims like “best in India” unless backed by proof.
- Avoid unsafe guarantees such as “100% safe”, “risk-free”, “guaranteed helper in 24 hours”, or “medically certified care” unless officially confirmed.
- Use “verified”, “trained”, “screened”, and “supported” carefully and consistently.
- Always respect helpers and caregivers. Never describe them as commodities.
- Always separate caregiving support from medical/nursing treatment.
- For dementia, palliative, Parkinson's, stroke, and bedridden care, include scope clarification.
- Never create content that suggests EzyHelpers replaces a doctor, hospital, nurse, emergency service, or medical diagnosis.

### 4.3 Caregiving compliance rules

Each serious-care service page must include a small, reassuring scope note:

```txt
EzyHelpers provides trained caregiver and attendant support for daily living, comfort, safety, mobility, hygiene, companionship, and family coordination. This is not a replacement for medical diagnosis, emergency care, or treatment by doctors, nurses, or hospitals.
```

Use this note especially on:

- Dementia care
- Palliative care
- Parkinson's care
- Stroke recovery support
- Bedridden patient care
- Post-operative care
- Patient care

### 4.4 AEO rules

Every service, city, locality, condition-care, hiring, and blog page must include:

1. A direct 40–70 word answer block near the top.
2. Clear H1 and H2 hierarchy.
3. Short “Who this is for” section.
4. Short “What is included” section.
5. Process section.
6. Trust/safety section.
7. FAQs with concise direct answers.
8. Relevant schema markup.
9. Internal links to related pages.
10. Clear CTA above the fold and after major sections.
11. A short human summary that AI engines can quote.

---

## 5. Recommended Tech Stack

```txt
Framework: Next.js App Router
Language: TypeScript
Styling: Tailwind CSS
Database: Supabase PostgreSQL
Auth: Supabase Auth for admin panel only if required
Storage: Supabase Storage for images/downloads if required
Validation: Zod
Forms: Server Actions or Route Handlers
Email: Resend / SendGrid / SMTP provider, configurable
SMS/WhatsApp: External provider integration later
Analytics: GA4 + Google Tag Manager + Search Console
Error tracking: Sentry optional
Deployment: Vercel
Package manager: pnpm
Icons: lucide-react
Schema typing: schema-dts optional
```

---

## 6. Environment Variables

Create `.env.local` with at least:

```env
NEXT_PUBLIC_SITE_URL=https://www.ezyhelpers.com
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=

LEAD_NOTIFICATION_EMAIL=contact@ezyhelpers.com
SALES_NOTIFICATION_EMAIL=
ADMIN_NOTIFICATION_EMAIL=
CARE_LEADS_NOTIFICATION_EMAIL=
HIRING_NOTIFICATION_EMAIL=

RESEND_API_KEY=
WHATSAPP_PHONE_NUMBER=
PRIMARY_PHONE_NUMBER=08031411776
```

Rules:

- `SUPABASE_SERVICE_ROLE_KEY` must only be used server-side.
- Do not import server-only environment variables into Client Components.
- All public environment variables must begin with `NEXT_PUBLIC_`.

---

## 7. Information Architecture

### 7.1 Top navigation

Recommended desktop nav:

```txt
Home
Care Services
  Elderly Care
  Dementia Care
  Palliative Care
  Patient Care
  Post-Operative Care
  Bedridden Patient Care
  Parkinson's Care
  Stroke Care
Home Help
  Live-in Maids
  Full-Time Maids
  Cooks
  Nanny / Babysitter
  Housekeeping
For Helpers
  Helper Jobs
  Caregiver Jobs
  ANM/GNM/GDA Jobs
Resources
  Blog
  FAQs
  Care Guides
About
Contact
```

Primary header CTAs:

```txt
Call Now
WhatsApp
Get Free Consultation
```

Mobile nav must prioritize:

1. Call
2. WhatsApp
3. Get Help
4. Apply for Job

### 7.2 Footer structure

Footer must include:

- Brand summary
- Care services links
- Home help links
- City/locality links
- Helper job links
- Blog/resource links
- Contact details
- Privacy policy
- Terms
- Disclaimer for caregiving scope

---

## 8. Route Strategy

### 8.1 Core pages

Required routes:

```txt
/
/about
/services
/care-services
/home-help-services
/contact
/faqs
/blog
/blog/[slug]
/privacy-policy
/terms
```

### 8.2 Care services routes

Create these as priority pages:

```txt
/care-services/elderly-care
/care-services/dementia-care
/care-services/palliative-care
/care-services/patient-care
/care-services/post-operative-care
/care-services/bedridden-patient-care
/care-services/parkinsons-care
/care-services/stroke-care
/care-services/companion-care
/care-services/night-caregiver
```

City-specific care routes:

```txt
/cities/bangalore/elderly-care
/cities/bangalore/dementia-care
/cities/bangalore/palliative-care
/cities/bangalore/patient-care
/cities/bangalore/post-operative-care
/cities/bangalore/bedridden-patient-care
/cities/bangalore/parkinsons-care
/cities/bangalore/stroke-care
```

### 8.3 Domestic helper routes

```txt
/services/live-in-maids
/services/full-time-maids
/services/cooks
/services/nanny-babysitter
/services/housekeeping
/cities/bangalore/live-in-maids
/cities/bangalore/full-time-maid
/cities/bangalore/cooks
/cities/bangalore/nanny-babysitter
/cities/bangalore/housekeeping
```

Optional only if retained:

```txt
/services/part-time-maids
/services/on-demand-helpers
/services/drivers
/cities/bangalore/on-demand-helper
```

### 8.4 Hiring routes

```txt
/helper-jobs
/caregiver-jobs
/helper-jobs/bangalore
/caregiver-jobs/bangalore
/caregiver-jobs/anm
/caregiver-jobs/gnm
/caregiver-jobs/gda
/helper-jobs/live-in-maid
/helper-jobs/cook
/helper-jobs/nanny
/partners/training-institutes
/partners/apartment-associations
```

### 8.5 Bangalore locality routes

Create programmatic pages only when content is useful and non-duplicate.

Recommended priority localities:

```txt
HSR Layout
Sarjapur Road
Bellandur
Whitefield
Marathahalli
Electronic City
Koramangala
Indiranagar
Jayanagar
JP Nagar
Bannerghatta Road
Hebbal
Yelahanka
BTM Layout
Brookefield
Mahadevapura
```

Priority locality-service routes:

```txt
/localities/bangalore/hsr-layout/elderly-care
/localities/bangalore/hsr-layout/dementia-care
/localities/bangalore/hsr-layout/patient-care
/localities/bangalore/hsr-layout/live-in-maids
/localities/bangalore/whitefield/elderly-care
/localities/bangalore/whitefield/dementia-care
/localities/bangalore/whitefield/nanny-babysitter
/localities/bangalore/sarjapur-road/live-in-maids
```

Locality pages must not be thin doorway pages. Every locality page must include:

- Local family context
- Apartments/villas/working-family lifestyle context
- Local service availability explanation
- Nearby localities links
- Relevant FAQs
- Clear CTA
- Unique page intro and useful content

---

## 9. Recommended Repository Structure

```txt
/src
  /app
    /(public)
      /page.tsx
      /about/page.tsx
      /contact/page.tsx
      /faqs/page.tsx
      /services/page.tsx
      /care-services/page.tsx
      /care-services/[serviceSlug]/page.tsx
      /home-help-services/page.tsx
      /services/[serviceSlug]/page.tsx
      /cities/[citySlug]/page.tsx
      /cities/[citySlug]/[serviceSlug]/page.tsx
      /localities/[citySlug]/[localitySlug]/page.tsx
      /localities/[citySlug]/[localitySlug]/[serviceSlug]/page.tsx
      /helper-jobs/page.tsx
      /helper-jobs/[jobSlug]/page.tsx
      /caregiver-jobs/page.tsx
      /caregiver-jobs/[jobSlug]/page.tsx
      /partners/training-institutes/page.tsx
      /partners/apartment-associations/page.tsx
      /blog/page.tsx
      /blog/[slug]/page.tsx
      /privacy-policy/page.tsx
      /terms/page.tsx
    /api
      /leads/route.ts
      /helper-applications/route.ts
      /partner-enquiries/route.ts
      /webhooks/route.ts
    /admin
      /login/page.tsx
      /dashboard/page.tsx
      /leads/page.tsx
      /content/page.tsx
    /sitemap.ts
    /robots.ts
    /layout.tsx
    /globals.css

  /components
    /layout
      Header.tsx
      Footer.tsx
      MobileNav.tsx
      StickyMobileCTA.tsx
    /sections
      Hero.tsx
      CareHero.tsx
      HomeHelpHero.tsx
      TrustBar.tsx
      ServiceCards.tsx
      CareConditionCards.tsx
      ProcessSteps.tsx
      FamilyConcernSection.tsx
      CaregiverScopeSection.tsx
      SafetyAndVerification.tsx
      FAQSection.tsx
      Testimonials.tsx
      LeadFormSection.tsx
      HiringCTA.tsx
      CityCoverage.tsx
      RelatedPages.tsx
      BlogGrid.tsx
    /forms
      LeadForm.tsx
      CareAssessmentForm.tsx
      HelperApplicationForm.tsx
      PartnerEnquiryForm.tsx
    /seo
      JsonLd.tsx
      Breadcrumbs.tsx
      AnswerBlock.tsx
      MedicalScopeNote.tsx
    /ui
      Button.tsx
      Card.tsx
      Input.tsx
      Select.tsx
      Textarea.tsx
      Badge.tsx
      Accordion.tsx
      Tabs.tsx
      Stat.tsx

  /features
    /leads
      actions.ts
      schema.ts
      queries.ts
      types.ts
    /content
      queries.ts
      types.ts
    /services
      queries.ts
      types.ts
    /locations
      queries.ts
      types.ts
    /seo
      metadata.ts
      schema.ts
      sitemap.ts

  /lib
    /supabase
      client.ts
      server.ts
      admin.ts
      middleware.ts
    /utils
      cn.ts
      slug.ts
      phone.ts
      analytics.ts
      format.ts
    /constants
      brand.ts
      navigation.ts
      services.ts
      careServices.ts
      locations.ts
      design.ts

  /content
    seed-services.ts
    seed-care-services.ts
    seed-faqs.ts
    seed-pages.ts
    seed-blog.ts

/supabase
  /migrations
  /seed.sql

/public
  /images
  /logos
  /icons
  /og
```

---

## 10. Supabase Database Model

Use Supabase as the content and lead data layer. Start simple, but design for scale.

### 10.1 Main tables

Required tables:

```sql
profiles
services
care_services
service_categories
cities
localities
service_locations
pages
faqs
blog_posts
blog_categories
leads
lead_notes
helper_applications
partner_enquiries
testimonials
redirects
settings
```

### 10.2 `services` table

For domestic/helper services.

Fields:

```txt
id uuid primary key
name text not null
slug text unique not null
category text
short_description text
answer_block text
hero_title text
hero_subtitle text
who_it_is_for jsonb
what_is_included jsonb
service_options jsonb
process_steps jsonb
trust_points jsonb
pricing_note text
faq_ids uuid[] optional
meta_title text
meta_description text
og_image text
is_active boolean default true
priority int
created_at timestamp
updated_at timestamp
```

### 10.3 `care_services` table

For caregiving and condition-led pages.

Fields:

```txt
id uuid primary key
name text not null
slug text unique not null
condition_type text
care_level text
short_description text
answer_block text
hero_title text
hero_subtitle text
family_concerns jsonb
who_it_is_for jsonb
caregiver_can_help_with jsonb
caregiver_cannot_do jsonb
recommended_caregiver_profile jsonb
care_options jsonb
process_steps jsonb
safety_points jsonb
family_checklist jsonb
medical_scope_note text
pricing_note text
faq_ids uuid[] optional
meta_title text
meta_description text
og_image text
is_active boolean default true
priority int
created_at timestamp
updated_at timestamp
```

Care levels can include:

```txt
companion-care
daily-living-support
mobility-support
bedridden-support
memory-care-support
palliative-support
post-operative-support
night-care-support
```

### 10.4 `leads` table

Fields:

```txt
id uuid primary key
lead_type text not null -- customer, caregiver, helper, partner
service_interest text
care_condition text nullable
care_urgency text nullable
patient_age text nullable
patient_gender text nullable
city text
locality text
name text not null
phone text not null
email text nullable
preferred_contact_method text nullable
message text nullable
utm_source text nullable
utm_medium text nullable
utm_campaign text nullable
utm_term text nullable
utm_content text nullable
landing_page text
referrer text
status text default 'new'
assigned_to uuid nullable
created_at timestamp
updated_at timestamp
```

### 10.5 `helper_applications` table

Fields:

```txt
id uuid primary key
applicant_type text -- helper, caregiver, cook, nanny, nurse_assistant, anm, gnm, gda
name text not null
phone text not null
alternate_phone text nullable
city text
current_location text
preferred_job_type text
experience_years text
skills jsonb
certifications jsonb
languages jsonb
expected_salary text nullable
availability text nullable
has_documents boolean nullable
message text nullable
status text default 'new'
created_at timestamp
updated_at timestamp
```

### 10.6 RLS and security rules

- Enable RLS on all tables.
- Public users can insert leads, helper applications, and partner enquiries only through safe policies or server routes.
- Public users must not read lead data.
- Admin users can read and update leads only after authentication.
- Service-role key must only be used in server-only code.
- Validate all inputs using Zod before writing to Supabase.

---

## 11. Design Direction

### 11.1 Overall visual personality

The website must feel:

- Warm
- Premium but accessible
- Trustworthy
- Clean
- Calm
- Family-first
- Caregiving-aware
- Human, not corporate-stock-photo-heavy

Avoid:

- Overly hospital-like blue/white design
- Dark, gloomy eldercare visuals
- Cheap agency-style maid website design
- Cluttered cards and excessive icons
- Generic stock photos of nurses with stethoscopes unless the service is actually nursing
- Fear-based visuals of helpless elders

### 11.2 Suggested color system

Use the existing EzyHelpers brand colors if available from the logo. If exact values are unavailable, use this suggested palette:

```txt
Primary Green: #1F7A53
Deep Trust Green: #145C3E
Soft Mint Background: #EEF8F2
Warm Cream: #FFF8EC
Care Blue: #EAF4FF
Text Charcoal: #17211B
Muted Text: #5E6B63
Soft Border: #DCE8DF
CTA Orange: #F59E0B
Error Red: #DC2626
Success Green: #16A34A
White: #FFFFFF
```

Color usage:

- Green = trust, safety, helpers, nature, reliability
- Cream = warmth and family comfort
- Care Blue = caregiving, patient support, calmness
- Orange = primary CTA accent only
- Charcoal = readable text

### 11.3 Typography

Recommended:

```txt
Headings: Inter / Plus Jakarta Sans / Manrope
Body: Inter / Source Sans 3 / system sans-serif
```

Rules:

- H1 must be clear and readable.
- Avoid decorative fonts.
- Body font size should be comfortable for elder-care decision makers.
- Use generous line height.
- Use max-width constraints for long text.

### 11.4 UI style

Use:

- Rounded cards
- Soft shadows
- Large tap targets
- Clear CTA buttons
- Human illustrations or authentic photos
- Subtle gradients only in hero areas
- Trust badges
- Process cards
- FAQ accordions
- Sticky mobile CTA bar

Avoid:

- Tiny text
- Too many animations
- Heavy parallax
- Auto-playing sliders
- Long form before trust is established
- Forms without reassurance copy

### 11.5 Accessibility rules

- Minimum body text size: 16px.
- CTA buttons must be large enough for mobile tapping.
- All form inputs must have labels.
- Use visible focus states.
- Do not rely on color alone.
- Images must have meaningful alt text.
- Accordions must be keyboard accessible.
- Maintain good contrast for elder decision-maker audience.

---

## 12. Page Design Blueprints

### 12.1 Homepage blueprint

Goal: Position EzyHelpers as both a caregiving and home-helper platform, while converting visitors quickly.

Recommended homepage sections:

```txt
1. Header with service mega menu and CTAs
2. Hero section
3. Quick service selector
4. Trust bar
5. Caregiving-first service block
6. Domestic helper service block
7. How EzyHelpers works
8. Care conditions supported
9. Why families trust EzyHelpers
10. City/locality coverage
11. Helper dignity/employment section
12. Testimonials/proof section
13. FAQ block
14. Final CTA
15. Footer
```

Hero direction:

```txt
H1: Trusted caregivers and home helpers for families in Bangalore
Subtitle: EzyHelpers connects families with verified, trained, and supported caregivers, maids, nannies, cooks, and patient attendants for safer, more reliable care at home.
Primary CTA: Get Free Consultation
Secondary CTA: Call Now
Tertiary CTA: Apply as Helper/Caregiver
```

Hero visual idea:

- Use warm family/home setting.
- Show caregiver helping an elder walk, or a helper supporting a family at home.
- Avoid hospital bed imagery in the homepage hero.
- Use soft background shapes and a clean lead form card.

Quick service selector:

```txt
I need help with:
[ Elderly Care ] [ Dementia Care ] [ Patient Care ] [ Live-in Maid ] [ Nanny ] [ Cook ]
```

Care condition cards:

```txt
Dementia Care
Palliative Support
Post-Surgery Care
Bedridden Care
Parkinson's Support
Stroke Recovery Support
```

Homepage CTA logic:

- Above the fold: form + call + WhatsApp
- Mid-page: service-specific CTA
- Final: consultation CTA
- Mobile: sticky Call / WhatsApp / Enquire bar

### 12.2 About page blueprint

Goal: Build trust, mission clarity, and credibility.

Sections:

```txt
1. Hero: Bringing structure, trust, and dignity to home help and caregiving
2. Mission statement
3. Why EzyHelpers exists
4. What problems we solve
5. Our caregiving-led direction
6. How we support families
7. How we support helpers and caregivers
8. Verification and training philosophy
9. Leadership/team section, if content is approved
10. Timeline / milestones, only with verified data
11. Partner and community CTA
12. Final customer CTA
```

Tone:

- Human
- Mission-led
- Dignity for helpers
- Trust for families
- Caregiving future of India

### 12.3 Care services listing page blueprint

Route: `/care-services`

Sections:

```txt
1. Hero: Caregiving support at home for elders, patients, and recovering family members
2. Answer block
3. Service category cards
4. Condition-based care cards
5. How to choose the right caregiver
6. Process
7. Safety and verification
8. FAQ
9. CTA
```

Service cards:

- Elderly care
- Dementia care
- Palliative care support
- Patient care
- Post-operative care
- Bedridden patient care
- Parkinson's care support
- Stroke recovery support
- Night caregiver
- Companion care

### 12.4 Individual care service page blueprint

Use for dementia, palliative, elderly, patient, etc.

Sections:

```txt
1. Breadcrumbs
2. Hero with direct service-specific H1
3. Answer block
4. Lead form or CTA card
5. Who this care is for
6. Common family concerns
7. What the caregiver can help with
8. What the caregiver cannot do / medical scope note
9. Types of care options
10. Recommended caregiver profile
11. How EzyHelpers matches caregivers
12. Safety and verification
13. Pricing/consultation note
14. Related care services
15. FAQs
16. Final CTA
```

Example dementia page H1:

```txt
Dementia Care at Home in Bangalore
```

Example direct answer:

```txt
EzyHelpers provides trained caregiver support for families managing dementia care at home in Bangalore. Caregivers can help with daily routines, hygiene, meals, mobility, companionship, safety reminders, and family coordination while working alongside medical guidance from doctors or specialists.
```

### 12.5 Domestic helper services listing page blueprint

Route: `/home-help-services` or `/services`

Sections:

```txt
1. Hero: Verified home helpers for daily household needs
2. Answer block
3. Service cards
4. How EzyHelpers works
5. Verification and replacement support
6. City coverage
7. FAQs
8. CTA
```

Service cards:

- Live-in maid
- Full-time maid
- Cook
- Nanny / babysitter
- Housekeeping
- Home manager, if retained

### 12.6 Individual domestic service page blueprint

Sections:

```txt
1. Breadcrumbs
2. Hero
3. Answer block
4. Service options
5. Who this is for
6. Tasks included
7. What is not included
8. Matching process
9. Verification and support
10. Pricing/consultation note
11. Related services
12. FAQs
13. CTA
```

### 12.7 Blog page blueprint

Route: `/blog`

Goal: Build authority around caregiving, domestic help hiring, family support, elder care, and helper dignity.

Sections:

```txt
1. Blog hero
2. Featured caregiving guides
3. Categories
4. Latest articles
5. Popular guides
6. CTA to enquire
```

Recommended categories:

```txt
Elder Care
Dementia Care
Patient Care
Palliative Support
Childcare
Domestic Help Hiring
Helper Safety & Rights
Family Guides
Bangalore Home Support
```

### 12.8 Blog article blueprint

Each blog post must include:

```txt
1. Breadcrumbs
2. H1
3. Short answer summary
4. Table of contents
5. Main content
6. Practical checklist
7. FAQs
8. Related service CTA
9. Related articles
10. Author/reviewer note, if applicable
```

Medical/care posts must include disclaimer:

```txt
This article is for general awareness and family planning. It is not medical advice. Please consult a qualified doctor or healthcare professional for diagnosis, treatment, medication, or emergency care.
```

### 12.9 Contact page blueprint

Sections:

```txt
1. Hero: Talk to EzyHelpers
2. Quick contact cards: Call, WhatsApp, Email, Visit office
3. Customer enquiry form
4. Helper/caregiver application CTA
5. Office details
6. Service areas
7. FAQ
```

Keep contact actions prominent on mobile.

### 12.10 Hiring page blueprint

Routes:

```txt
/helper-jobs
/caregiver-jobs
```

Goal: Position EzyHelpers as a safe and dignified platform for helpers and caregivers.

Sections:

```txt
1. Hero: Find safe helper and caregiver jobs without agent cuts
2. Answer block
3. Job categories
4. Why work with EzyHelpers
5. Documents needed
6. Application process
7. Salary/payment expectation note
8. Safety and support
9. Application form
10. FAQs
```

Important content rules:

- Do not promise exact salary unless approved.
- Highlight no agent/middleman exploitation if true.
- Use respectful language.
- Translate or create Hindi/Kannada versions later if required.

### 12.11 Partner page blueprint

Routes:

```txt
/partners/training-institutes
/partners/apartment-associations
```

For training institutes:

```txt
1. Hero
2. Who can partner
3. GDA/ANM/GNM caregiver hiring focus
4. Benefits for candidates
5. Placement process
6. Partner enquiry form
```

For apartments:

```txt
1. Hero
2. Home help and caregiving needs in apartments
3. Resident support model
4. Verification and escalation process
5. Community partnership CTA
```

---

## 13. AEO Content Model

Each page must be answer-engine friendly.

### 13.1 Answer block component

Use this component near the top of each page.

```tsx
<AnswerBlock>
  EzyHelpers provides trained caregiver support for dementia care at home in Bangalore, helping families with daily routines, hygiene, meals, mobility, companionship, and safety reminders while following the family's medical guidance.
</AnswerBlock>
```

Rules:

- 40–70 words
- Direct answer
- Include service + location where relevant
- Mention EzyHelpers naturally
- No keyword stuffing
- No unsupported claims

### 13.2 Page-level FAQ rules

Each page must include 5–8 FAQs.

FAQ answer style:

- First sentence must answer directly.
- Keep most answers between 40–80 words.
- Avoid fluffy answers.
- Include service/location naturally.
- Include scope limitations for medical care pages.

### 13.3 Suggested FAQ examples for dementia care

```txt
Q: Does EzyHelpers provide dementia care at home in Bangalore?
A: Yes. EzyHelpers can help families find trained caregivers for dementia care support at home in Bangalore. Caregivers can assist with routines, hygiene, meals, mobility, companionship, and safety reminders, but medical diagnosis and treatment must remain with qualified doctors.

Q: Can a dementia caregiver give medicines?
A: A caregiver may remind or assist the patient with medicines only as instructed by the family or doctor. They should not prescribe, change, or decide medication.

Q: Is dementia care available as live-in support?
A: Depending on availability and assessment, EzyHelpers may help arrange live-in or long-hour caregiver support for dementia patients who need regular assistance and supervision at home.
```

### 13.4 Suggested FAQ examples for palliative care

```txt
Q: What is palliative care support at home?
A: Palliative care support at home focuses on comfort, daily assistance, hygiene, feeding support, companionship, mobility help, and family coordination for people with serious or long-term illness. Medical decisions and pain management must be handled by qualified doctors or nurses.

Q: Does EzyHelpers provide nurses for palliative care?
A: EzyHelpers primarily provides caregiver and attendant support unless a qualified nursing service is specifically confirmed. The page must clearly distinguish between caregiver support and clinical nursing care.
```

---

## 14. SEO and Metadata Rules

### 14.1 Metadata

Use Next.js Metadata API for every route.

Each page must define:

```txt
title
meta description
canonical URL
Open Graph title
Open Graph description
Open Graph image, where available
robots rules when needed
```

### 14.2 Title patterns

Care service page:

```txt
Dementia Care at Home in Bangalore | EzyHelpers
```

Domestic service page:

```txt
Live-in Maid Service in Bangalore | EzyHelpers
```

Hiring page:

```txt
Caregiver Jobs in Bangalore | Apply with EzyHelpers
```

Blog post:

```txt
How to Choose a Caregiver for Dementia at Home | EzyHelpers
```

### 14.3 Meta description pattern

```txt
Find trained caregiver support for dementia care at home in Bangalore with EzyHelpers. Get help with daily routines, hygiene, meals, mobility, companionship, and family coordination.
```

### 14.4 Internal linking rules

Every care page must link to:

- Elderly care
- Patient care
- Related condition-care page
- Caregiver jobs, where relevant
- Blog guide related to the condition
- Contact/enquiry page

Every domestic helper page must link to:

- Live-in maids
- Full-time maids
- Cooks/nanny where relevant
- City page
- Helper jobs
- FAQs

### 14.5 Sitemap and robots

Implement:

```txt
/app/sitemap.ts
/app/robots.ts
```

Sitemap must include:

- Static pages
- Services
- Care services
- City pages
- Locality pages
- Blog posts
- Hiring pages

Exclude admin and private routes.

---

## 15. Schema Markup Rules

Use JSON-LD for structured data.

### 15.1 Required schema types

Use where appropriate:

```txt
Organization
LocalBusiness
WebSite
WebPage
Service
FAQPage
BreadcrumbList
BlogPosting
ContactPage
AboutPage
JobPosting, only for real open jobs
```

### 15.2 Organization schema

Include:

- Name: EzyHelpers
- URL
- Logo
- Contact phone
- Email
- Address, if approved
- SameAs social profiles, if approved

### 15.3 Service schema

For each service page:

```txt
@type: Service
name
serviceType
provider
areaServed
description
url
```

### 15.4 FAQ schema

Every FAQ block must output valid FAQPage JSON-LD, but only for visible FAQs on the page.

### 15.5 Medical disclaimer in schema

Do not use `MedicalBusiness`, `MedicalClinic`, `Physician`, or clinical schema unless the business legally and operationally qualifies. EzyHelpers should be represented as a home support/caregiver service, not a hospital or medical clinic.

---

## 16. Lead Forms and UX

### 16.1 Customer lead form fields

Standard form:

```txt
Name
Phone
Service needed
City
Locality
Preferred start time
Message
```

Care-specific form:

```txt
Name
Phone
City
Locality
Care needed for
Patient/elder age
Condition or support required
Preferred support type
Urgency
Message
```

Service needed options:

```txt
Elderly Care
Dementia Care
Palliative Care Support
Patient Care
Post-Operative Care
Bedridden Patient Care
Parkinson's Care
Stroke Recovery Support
Live-in Maid
Full-Time Maid
Nanny/Babysitter
Cook
Housekeeping
Other
```

Urgency options:

```txt
Immediately
Within 24–48 hours
Within this week
Just enquiring
```

### 16.2 Form design rules

- Keep first-step form short.
- Use progressive disclosure for care details.
- Reassure users near the form: “Our team will call you to understand the requirement before suggesting a helper or caregiver.”
- Add phone and WhatsApp alternatives.
- Show success state clearly.
- Store UTM and landing page data.

### 16.3 Tracking events

Track:

```txt
lead_form_start
lead_form_submit
care_form_submit
helper_application_submit
call_click
whatsapp_click
service_card_click
faq_expand
blog_cta_click
```

Do not send sensitive personal health details to analytics tools.

---

## 17. Content and Blog Strategy

### 17.1 Priority service landing pages

Create rich landing pages for:

1. Dementia care at home in Bangalore
2. Palliative care support at home in Bangalore
3. Elderly care services in Bangalore
4. Patient care services in Bangalore
5. Post-operative care at home in Bangalore
6. Bedridden patient care at home in Bangalore
7. Parkinson's care support at home in Bangalore
8. Stroke patient care support at home in Bangalore
9. Live-in maid service in Bangalore
10. Full-time maid service in Bangalore
11. Nanny/babysitter service in Bangalore
12. Cook service in Bangalore

### 17.2 Priority blog topics

Create educational, high-trust content around:

```txt
How to choose a caregiver for elderly parents at home
Dementia care at home: what families should know
Difference between caregiver, nurse, and patient attendant
How to prepare your home for an elderly caregiver
Palliative care at home: family checklist
Post-operative care at home after hospital discharge
How to hire a live-in maid safely in Bangalore
Questions to ask before hiring a nanny
How to support bedridden patients at home
Caregiver duties for Parkinson's patients
Stroke recovery support at home: family guide
How NRIs can arrange elder care for parents in Bangalore
```

### 17.3 Content quality rules

- Do not publish medical advice without expert review.
- Use checklists and practical guidance.
- Separate “caregiver can help with” from “doctor/nurse must handle”.
- Add related service CTA.
- Add FAQ schema.
- Use internal links.

---

## 18. Component Requirements

### 18.1 Core components

Build reusable components:

```txt
Header
Footer
StickyMobileCTA
Hero
CareHero
AnswerBlock
TrustBar
ServiceCard
CareConditionCard
ProcessSteps
ScopeNote
FAQSection
LeadForm
CareAssessmentForm
HelperApplicationForm
RelatedPages
Breadcrumbs
JsonLd
BlogCard
CTASection
```

### 18.2 CareConditionCard requirements

Card fields:

```txt
title
description
icon
href
supportLevel
ctaText
```

Example cards:

- Dementia Care
- Palliative Support
- Post-Surgery Care
- Bedridden Care
- Stroke Recovery Support
- Parkinson's Support

### 18.3 MedicalScopeNote component

Use on care pages.

```tsx
<MedicalScopeNote>
  EzyHelpers provides caregiver and attendant support for daily living and comfort. This service does not replace medical diagnosis, treatment, emergency care, or clinical nursing unless specifically confirmed.
</MedicalScopeNote>
```

---

## 19. Performance Rules

- Target Lighthouse performance score above 90.
- Use optimized images through Next Image.
- Avoid unnecessary Client Components.
- Avoid heavy animation libraries unless needed.
- Use server-side data fetching.
- Cache stable content.
- Use dynamic rendering only where necessary.
- Keep JavaScript small.
- Use static generation for content pages when possible.

---

## 20. Migration and Redirect Rules

Before replacing the existing site:

1. Crawl current URLs.
2. Export indexed URLs from Search Console if available.
3. Map old URLs to new URLs.
4. Preserve important existing URLs where possible.
5. Create 301 redirects for changed URLs.
6. Do not delete ranking pages without replacement.
7. Test all redirects before launch.

Redirect table should be stored in Supabase or `next.config.ts` depending on scale.

---

## 21. Definition of Done

A feature or page is done only when:

- It uses TypeScript correctly.
- It is responsive.
- It is accessible.
- It has crawlable page content.
- It has clear CTAs.
- It has metadata.
- It has schema where applicable.
- It has FAQ where applicable.
- It includes internal links.
- It handles loading/error states.
- It stores valid form submissions in Supabase.
- It does not expose secrets.
- It does not make unsupported business or medical claims.
- It follows EzyHelpers' caregiving-led positioning.

---

## 22. Claude Workflow Instructions

When Claude is asked to build or modify any part of this project:

1. Read this `CLAUDE.md` first.
2. Identify the route, component, and data model affected.
3. Check whether the task touches caregiving, domestic help, hiring, SEO, or Supabase.
4. Use existing components before creating new ones.
5. Keep content AEO-friendly.
6. Add schema and metadata for new pages.
7. Add/update Supabase types if schema changes.
8. Add validation for forms.
9. Add redirects if route changes.
10. Avoid unsupported claims.
11. Summarize what changed after implementation.

### Before editing a care page

Claude must check:

- Is this non-clinical caregiver support?
- Is there a medical disclaimer/scope note?
- Are we over-promising?
- Are we using family-friendly, empathetic language?
- Are FAQs direct and safe?

### Before editing a landing page

Claude must check:

- Is the CTA visible above the fold?
- Is there a direct answer block?
- Are trust signals present?
- Is there schema?
- Are related pages linked?
- Is the page unique and not thin?

---

## 23. Initial Build Order

Build in this order:

1. Project setup with Next.js, TypeScript, Tailwind, Supabase clients
2. Global layout, header, footer, sticky mobile CTA
3. Design tokens and base UI components
4. Supabase migrations for services, care services, leads, FAQs, blog
5. Homepage
6. Care services listing page
7. Elderly care page
8. Dementia care page
9. Palliative care page
10. Patient care page
11. Domestic services listing page
12. Live-in maid page
13. Full-time maid page
14. Nanny/babysitter page
15. Cook page
16. Bangalore city page
17. Bangalore service pages
18. Helper jobs page
19. Caregiver jobs page
20. Blog listing and article template
21. Contact page
22. FAQ page
23. Sitemap, robots, metadata, schema
24. Redirect mapping
25. QA and launch checklist

---

## 24. Launch QA Checklist

Before launch, verify:

```txt
[ ] Homepage loads fast and communicates caregiving + home help clearly
[ ] Header and mobile nav are clear
[ ] Care services are not hidden under generic services
[ ] All priority care pages exist
[ ] All priority domestic helper pages exist
[ ] Lead forms submit to Supabase
[ ] Helper applications submit to Supabase
[ ] Call and WhatsApp links work
[ ] GA4/GTM events work
[ ] Metadata exists for all pages
[ ] Schema validates
[ ] Sitemap works
[ ] Robots file works
[ ] 404 page exists
[ ] Existing URLs are redirected or preserved
[ ] No unsupported medical claims exist
[ ] No fake ratings/testimonials/statistics exist
[ ] Mobile sticky CTA works
[ ] Form success/error states work
[ ] Accessibility checks pass
```

---

## 25. Final Strategic Reminder

The new EzyHelpers website must feel like the digital home of a serious, compassionate, modern Indian home-support company.

The core message is:

```txt
EzyHelpers helps families find verified, trained, and supported caregivers and home helpers for everyday domestic needs, elderly care, patient care, dementia care, palliative support, childcare, and more.
```

Every design decision, page layout, database table, CTA, and content block must support this positioning.
