import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // EzyHelpers brand system (spec §11.2)
        brand: {
          DEFAULT: "#1F7A53", // Primary Green
          deep: "#145C3E", // Deep Trust Green
          mint: "#EEF8F2", // Soft Mint Background
        },
        cream: "#FFF8EC", // Warm Cream
        care: "#EAF4FF", // Care Blue
        ink: "#17211B", // Text Charcoal
        muted: "#5E6B63", // Muted Text
        edge: "#DCE8DF", // Soft Border
        cta: "#F59E0B", // CTA Orange
        danger: "#DC2626", // Error Red
        ok: "#16A34A", // Success Green
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(20, 92, 62, 0.12)",
        card: "0 2px 12px -2px rgba(23, 33, 27, 0.08)",
        lift: "0 12px 32px -8px rgba(20, 92, 62, 0.18)",
      },
      maxWidth: {
        prose: "70ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
