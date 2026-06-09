-- EzyHelpers seed data (cities, localities, blog categories, settings).
-- Service + care_service content is generated from typed seed constants in
-- src/content/* — port those into rows when you move content into the CMS.
-- Run after migrations 0001 and 0002.

insert into public.cities (name, slug, state, intro, is_active) values
  ('Bangalore', 'bangalore', 'Karnataka',
   'EzyHelpers serves families across Bangalore with verified caregivers and home helpers.', true),
  ('Bareilly', 'bareilly', 'Uttar Pradesh',
   'EzyHelpers supports families in Bareilly with verified home helpers and caregiving support.', true)
on conflict (slug) do nothing;

-- Bangalore localities
with c as (select id from public.cities where slug = 'bangalore')
insert into public.localities (city_id, name, slug, context)
select c.id, v.name, v.slug, v.context from c, (values
  ('HSR Layout','hsr-layout','A busy residential and start-up hub with many working families and apartment communities.'),
  ('Sarjapur Road','sarjapur-road','A fast-growing corridor of apartments and gated communities.'),
  ('Bellandur','bellandur','A tech-corridor neighbourhood with large apartment complexes.'),
  ('Whitefield','whitefield','An established IT hub with villas, apartments, and families.'),
  ('Marathahalli','marathahalli','A central, well-connected area with families and professionals.'),
  ('Electronic City','electronic-city','A major IT zone with apartment communities.'),
  ('Koramangala','koramangala','A vibrant, central neighbourhood with families and professionals.'),
  ('Indiranagar','indiranagar','A well-established residential area with houses and apartments.'),
  ('Jayanagar','jayanagar','A traditional, family-oriented locality with many senior residents.'),
  ('JP Nagar','jp-nagar','A settled residential area with families and elders.'),
  ('Bannerghatta Road','bannerghatta-road','A growing residential stretch with apartments and busy families.'),
  ('Hebbal','hebbal','A north Bangalore hub with apartment communities.'),
  ('Yelahanka','yelahanka','A spacious north Bangalore suburb with independent homes.'),
  ('BTM Layout','btm-layout','A dense, central residential area popular with working families.'),
  ('Brookefield','brookefield','A Whitefield-area neighbourhood with apartments and tech families.'),
  ('Mahadevapura','mahadevapura','A tech-corridor zone with large residential communities.')
) as v(name, slug, context)
on conflict (city_id, slug) do nothing;

-- Blog categories
insert into public.blog_categories (name, slug) values
  ('Elder Care','elder-care'),
  ('Dementia Care','dementia-care'),
  ('Patient Care','patient-care'),
  ('Palliative Support','palliative-support'),
  ('Childcare','childcare'),
  ('Domestic Help Hiring','domestic-help-hiring'),
  ('Helper Safety & Rights','helper-rights'),
  ('Family Guides','family-guides'),
  ('Bangalore Home Support','bangalore-home-support')
on conflict (slug) do nothing;

-- Settings
insert into public.settings (key, value) values
  ('contact', '{"phone":"08031411776","whatsapp":"918031411776","email":"contact@ezyhelpers.com"}'::jsonb)
on conflict (key) do nothing;
