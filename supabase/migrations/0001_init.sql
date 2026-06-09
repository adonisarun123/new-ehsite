-- EzyHelpers initial schema (spec §10)
-- Run in Supabase SQL editor or via the Supabase CLI.

create extension if not exists "pgcrypto";

-- Helper: auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ─────────────────────────────────────────────────────────────
-- Profiles (admin users; mirrors auth.users)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'admin', -- admin, staff
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Service categories
-- ─────────────────────────────────────────────────────────────
create table if not exists public.service_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  tier int,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Domestic / home-help services
-- ─────────────────────────────────────────────────────────────
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  category text,
  short_description text,
  answer_block text,
  hero_title text,
  hero_subtitle text,
  who_it_is_for jsonb default '[]',
  what_is_included jsonb default '[]',
  what_is_not_included jsonb default '[]',
  service_options jsonb default '[]',
  process_steps jsonb default '[]',
  trust_points jsonb default '[]',
  pricing_note text,
  faqs jsonb default '[]',
  meta_title text,
  meta_description text,
  og_image text,
  icon text,
  is_active boolean not null default true,
  priority int default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger services_updated before update on public.services
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- Caregiving / condition-led services
-- ─────────────────────────────────────────────────────────────
create table if not exists public.care_services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  condition_type text,
  care_level text,
  support_level text,
  short_description text,
  answer_block text,
  hero_title text,
  hero_subtitle text,
  family_concerns jsonb default '[]',
  who_it_is_for jsonb default '[]',
  caregiver_can_help_with jsonb default '[]',
  caregiver_cannot_do jsonb default '[]',
  recommended_caregiver_profile jsonb default '[]',
  care_options jsonb default '[]',
  process_steps jsonb default '[]',
  safety_points jsonb default '[]',
  family_checklist jsonb default '[]',
  medical_scope_note text,
  pricing_note text,
  faqs jsonb default '[]',
  meta_title text,
  meta_description text,
  og_image text,
  icon text,
  is_active boolean not null default true,
  priority int default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger care_services_updated before update on public.care_services
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- Cities & localities
-- ─────────────────────────────────────────────────────────────
create table if not exists public.cities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  state text,
  intro text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.localities (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id) on delete cascade,
  name text not null,
  slug text not null,
  context text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (city_id, slug)
);

create table if not exists public.service_locations (
  id uuid primary key default gen_random_uuid(),
  service_slug text not null,
  service_kind text not null, -- 'care' | 'home'
  city_slug text not null,
  locality_slug text,
  intro text,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Generic editable pages
-- ─────────────────────────────────────────────────────────────
create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text,
  body jsonb default '{}',
  meta_title text,
  meta_description text,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);
create trigger pages_updated before update on public.pages
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- FAQs
-- ─────────────────────────────────────────────────────────────
create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  topic text,
  priority int default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Blog
-- ─────────────────────────────────────────────────────────────
create table if not exists public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category_slug text,
  excerpt text,
  answer_summary text,
  body jsonb default '[]',
  checklist jsonb default '[]',
  faqs jsonb default '[]',
  is_medical boolean not null default false,
  cover_image text,
  reading_minutes int,
  related_service_slug text,
  related_service_type text,
  published_at timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger blog_posts_updated before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- Leads
-- ─────────────────────────────────────────────────────────────
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null default 'customer', -- customer, caregiver, helper, partner
  service_interest text,
  care_condition text,
  care_urgency text,
  patient_age text,
  patient_gender text,
  city text,
  locality text,
  name text not null,
  phone text not null,
  email text,
  preferred_contact_method text,
  message text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  landing_page text,
  referrer text,
  status text not null default 'new',
  assigned_to uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger leads_updated before update on public.leads
  for each row execute function public.set_updated_at();

create table if not exists public.lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  author uuid references public.profiles(id),
  note text not null,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Helper applications
-- ─────────────────────────────────────────────────────────────
create table if not exists public.helper_applications (
  id uuid primary key default gen_random_uuid(),
  applicant_type text,
  name text not null,
  phone text not null,
  alternate_phone text,
  city text,
  current_location text,
  preferred_job_type text,
  experience_years text,
  skills jsonb,
  certifications jsonb,
  languages jsonb,
  expected_salary text,
  availability text,
  has_documents boolean,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger helper_applications_updated before update on public.helper_applications
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- Partner enquiries
-- ─────────────────────────────────────────────────────────────
create table if not exists public.partner_enquiries (
  id uuid primary key default gen_random_uuid(),
  partner_type text,
  organisation text not null,
  contact_name text not null,
  phone text not null,
  email text,
  city text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger partner_enquiries_updated before update on public.partner_enquiries
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- Testimonials (only real, approved entries — spec §4.1)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  location text,
  service text,
  quote text not null,
  is_approved boolean not null default false,
  priority int default 0,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Redirects
-- ─────────────────────────────────────────────────────────────
create table if not exists public.redirects (
  id uuid primary key default gen_random_uuid(),
  source text unique not null,
  destination text not null,
  permanent boolean not null default true,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Settings (key-value)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.settings (
  key text primary key,
  value jsonb,
  updated_at timestamptz not null default now()
);

-- Useful indexes
create index if not exists idx_leads_status on public.leads(status);
create index if not exists idx_leads_created on public.leads(created_at desc);
create index if not exists idx_helper_apps_status on public.helper_applications(status);
create index if not exists idx_blog_published on public.blog_posts(published_at desc) where is_active;
