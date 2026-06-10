import { ShieldCheck } from "lucide-react";
import { ACCREDITATIONS } from "@/lib/constants/brand";

/**
 * "Backed by Government of India recognition" — accreditation logos mirrored
 * from www.ezyhelpers.com. Plain <img> is used because the assets include SVGs
 * (next/image would need dangerouslyAllowSVG); these are small static trust marks.
 */
export function Accreditations() {
  return (
    <section className="section bg-white" aria-labelledby="accreditations-heading">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-green">
            <ShieldCheck className="h-4 w-4" aria-hidden /> Recognised &amp; Affiliated
          </p>
          <h2
            id="accreditations-heading"
            className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl"
          >
            Backed by Government of India recognition
          </h2>
          <p className="mt-3 text-muted">
            EzyHelpers is a DPIIT-recognised startup, affiliated with India&apos;s national skill
            development ecosystem — so every helper we place is part of a formally trained,
            verified workforce.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ACCREDITATIONS.map((a) => (
            <li
              key={a.alt}
              className="flex flex-col items-center rounded-2xl border border-edge bg-white p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift motion-reduce:transform-none"
            >
              <div className="flex h-20 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={a.alt}
                  loading="lazy"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-xs leading-snug text-muted">{a.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
