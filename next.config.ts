import type { NextConfig } from "next";
import { redirects } from "./src/lib/constants/redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Lint and type-check are run separately (pnpm lint / pnpm typecheck);
  // skipping them in the build avoids the long in-build worker pass.
  eslint: { ignoreDuringBuilds: true },
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
