import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // EzyHelpers brand system — matched to www.ezyhelpers.com (blue-led).
        // `brand` is the primary blue; `mint` is now a soft blue tint so existing
        // bg-brand-mint usages become light-blue surfaces.
        brand: {
          DEFAULT: "#0074C8", // Primary Blue
          deep: "#005EA6", // Deep Trust Blue (links, headings on light)
          mint: "#EAF4FF", // Soft Blue surface
          bright: "#2E9BE8", // Energetic light blue (gradients, glows)
        },
        // Green/teal accent — caregiving, verified, Call-to-action trust cues.
        accent: {
          DEFAULT: "#16A34A", // Trust/verified green
          deep: "#04514F", // Deep teal (live top bar)
          soft: "#E6FFFE", // Mint surface
        },
        cream: "#FFF8EC", // Warm Cream (kept for childcare/warm sections)
        ivory: "#FAF7F1", // Warm page background (editorial, calm)
        night: "#1A2421", // Deep ink band (dark trust sections)
        care: "#E6F4FF", // Care Blue (soft)
        ink: "#2B2B2B", // Text Charcoal (live body text)
        muted: "#4B5563", // Muted Text
        edge: "#DCE7F2", // Soft Border (cool)
        cta: {
          DEFAULT: "#F59E0B", // CTA Amber accent
          deep: "#D97706", // Pressed/hover amber (large text on light only)
          ink: "#8A5A06", // Accessible amber text on light surfaces (≥4.5:1)
          soft: "#FFF3DC", // Warm amber surface
        },
        danger: "#DC2626", // Error Red
        ok: "#16A34A", // Success Green
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
        ui: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(0, 94, 166, 0.14)",
        card: "0 2px 12px -2px rgba(43, 43, 43, 0.08)",
        lift: "0 12px 32px -8px rgba(0, 94, 166, 0.20)",
        glow: "0 8px 24px -6px rgba(245, 158, 11, 0.45)",
        "glow-brand": "0 8px 28px -6px rgba(0, 116, 200, 0.35)",
      },
      maxWidth: {
        prose: "70ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
