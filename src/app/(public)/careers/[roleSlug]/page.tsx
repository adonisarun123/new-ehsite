import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Briefcase, CalendarDays, Mail, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ListBlock } from "@/components/sections/ListBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/features/seo/metadata";
import { jobPostingSchema } from "@/features/seo/schema";
import { BRAND } from "@/lib/constants/brand";
import { CAREER_ROLES, getCareerRole } from "@/content/seed-careers";

interface Params {
  params: Promise<{ roleSlug: string }>;
}

export function generateStaticParams() {
  return CAREER_ROLES.map((r) => ({ roleSlug: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { roleSlug } = await params;
  const role = getCareerRole(roleSlug);
  if (!role) return {};
  return buildMetadata({
    title: `${role.title} — Careers at EzyHelpers`,
    description: role.summary,
    path: `/careers/${role.slug}`,
  });
}

function formatPosted(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function CareerRolePage({ params }: Params) {
  const { roleSlug } = await params;
  const role = getCareerRole(roleSlug);
  if (!role) notFound();

  const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Application: ${role.title}`
  )}`;

  return (
    <>
      <JsonLd
        data={jobPostingSchema({
          title: role.title,
          description: role.summary,
          url: `${BRAND.url}/careers/${role.slug}`,
          employmentType: role.employmentType,
          city: role.city,
          datePosted: role.datePosted,
        })}
      />

      <article>
        <header className="bg-ivory">
          <div className="container-page py-10 sm:py-14">
            <Breadcrumbs
              items={[
                { name: "Careers", href: "/careers" },
                { name: role.title, href: `/careers/${role.slug}` },
              ]}
            />
            <div className="mt-5 max-w-3xl">
              <Badge tone="brand">{role.category}</Badge>
              <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
                {role.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted">{role.summary}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Badge tone="neutral" className="!text-ink/70">
                  <MapPin className="h-3.5 w-3.5" aria-hidden /> {role.location}
                </Badge>
                <Badge tone="neutral" className="!text-ink/70">
                  <Briefcase className="h-3.5 w-3.5" aria-hidden /> {role.type}
                </Badge>
                {role.datePosted && (
                  <Badge tone="neutral" className="!text-ink/70">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden /> Posted{" "}
                    {formatPosted(role.datePosted)}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white py-10 sm:py-14">
          <div className="container-page">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="grid gap-6 lg:grid-cols-2">
                <ListBlock title="What you'll do" items={role.responsibilities} />
                <ListBlock title="What we're looking for" items={role.requirements} />
              </div>

              {/* Apply panel */}
              <div className="rounded-3xl bg-brand-deep px-6 py-8 text-center text-white sm:px-10">
                <h2 className="font-heading text-xl font-semibold text-white">
                  Apply for this role
                </h2>
                <p className="mx-auto mt-2 max-w-md text-white/80">
                  Email us your CV and a short note on why this role fits you. We review every
                  application.
                </p>
                <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href={mailto} variant="cta">
                    <Mail className="h-4 w-4" aria-hidden /> Apply by email
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
                  >
                    Have questions? Contact us
                  </Button>
                </div>
                <p className="mt-4 text-sm text-white/60">{BRAND.email}</p>
              </div>

              <div>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Back to all openings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
