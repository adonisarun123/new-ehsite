import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";

interface MetaOpts {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

/** Build consistent Next.js Metadata for a route (spec §14.1). */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: MetaOpts): Metadata {
  const url = `${BRAND.url}${path}`;
  const image = ogImage ?? `${BRAND.url}/og/ezyhelpers-og.png`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      type: "website",
      images: [{ url: image }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
