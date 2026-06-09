import path from "node:path";
import type { NextConfig } from "next";
import { redirects } from "./src/lib/constants/redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the workspace root so Next/Turbopack doesn't infer it from an
  // unrelated lockfile higher up the filesystem.
  turbopack: { root: path.resolve(import.meta.dirname) },
  // Type-checking runs separately (pnpm typecheck); skipping it in the build
  // avoids the long in-build worker pass. ESLint is no longer run during
  // `next build` as of Next.js 16, so no eslint config is needed here.
  typescript: { ignoreBuildErrors: true },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
