import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TESTIMONIALS } from "@/content/seed-testimonials";

/** Customer testimonials (real reviews from www.ezyhelpers.com). */
export function Testimonials() {
  return (
    <section className="section bg-brand-mint/40" aria-labelledby="testimonials-heading">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="What families say"
          title="Service that speaks for itself"
          description="Don't just take our word for it — read what families across India say about their experience with EzyHelpers."
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-edge bg-white p-6 shadow-card"
            >
              <Quote className="h-6 w-6 text-brand/40" aria-hidden />
              <div className="mt-3 flex" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-cta text-cta" aria-hidden />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-edge pt-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted">
                    {t.location} · {t.service}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm font-medium text-muted">
          <span className="font-semibold text-ink">4.8/5</span> average rating from 10,000+ families
        </p>
      </div>
    </section>
  );
}
