-- Row Level Security policies (spec §10.6)
-- Public content tables: world-readable (active rows).
-- Lead/application/partner tables: public INSERT only, admin SELECT/UPDATE.
-- All trusted server writes use the service-role key which bypasses RLS.

-- Enable RLS everywhere
alter table public.profiles            enable row level security;
alter table public.service_categories  enable row level security;
alter table public.services            enable row level security;
alter table public.care_services       enable row level security;
alter table public.cities              enable row level security;
alter table public.localities          enable row level security;
alter table public.service_locations   enable row level security;
alter table public.pages               enable row level security;
alter table public.faqs                enable row level security;
alter table public.blog_categories     enable row level security;
alter table public.blog_posts          enable row level security;
alter table public.leads               enable row level security;
alter table public.lead_notes          enable row level security;
alter table public.helper_applications enable row level security;
alter table public.partner_enquiries   enable row level security;
alter table public.testimonials        enable row level security;
alter table public.redirects           enable row level security;
alter table public.settings            enable row level security;

-- Helper: is the current user an admin/staff profile?
create or replace function public.is_admin()
returns boolean language sql stable as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('admin','staff')
  );
$$;

-- ── Public-readable content (active rows) ──────────────────────
do $$
declare t text;
begin
  foreach t in array array[
    'service_categories','services','care_services','cities','localities',
    'service_locations','pages','faqs','blog_categories','blog_posts',
    'testimonials','redirects'
  ] loop
    execute format(
      'create policy %1$s_public_read on public.%1$I for select using (true);', t
    );
  end loop;
end $$;

-- ── Leads: public can INSERT, only admins can read/update ───────
create policy leads_public_insert on public.leads
  for insert with check (true);
create policy leads_admin_read on public.leads
  for select using (public.is_admin());
create policy leads_admin_update on public.leads
  for update using (public.is_admin());

create policy helper_apps_public_insert on public.helper_applications
  for insert with check (true);
create policy helper_apps_admin_read on public.helper_applications
  for select using (public.is_admin());
create policy helper_apps_admin_update on public.helper_applications
  for update using (public.is_admin());

create policy partner_public_insert on public.partner_enquiries
  for insert with check (true);
create policy partner_admin_read on public.partner_enquiries
  for select using (public.is_admin());
create policy partner_admin_update on public.partner_enquiries
  for update using (public.is_admin());

-- ── Admin-only management of content & notes ───────────────────
create policy profiles_self_read on public.profiles
  for select using (id = auth.uid() or public.is_admin());

create policy lead_notes_admin_all on public.lead_notes
  for all using (public.is_admin()) with check (public.is_admin());

-- Admin write access to content tables (service-role bypasses RLS,
-- but this lets an authenticated admin manage content via the app too).
do $$
declare t text;
begin
  foreach t in array array[
    'services','care_services','cities','localities','service_locations',
    'pages','faqs','blog_categories','blog_posts','testimonials','redirects','settings'
  ] loop
    execute format(
      'create policy %1$s_admin_write on public.%1$I for all using (public.is_admin()) with check (public.is_admin());', t
    );
  end loop;
end $$;
