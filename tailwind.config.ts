import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* css variables available in
        * "@/app/globals.css"
        */
        background: "var(--background)",
        foreground: "var(--foreground)",
        skeleton: "var(--skeleton-bg)", // Using Tailwind's built-in gray-700 variable
        gradientStart: "var(--gradient-start)",
        gradientEnd: "var(--gradient-end)",
        gradientMid: "var(--gradient-middle)",
      },
      animation: {
        skeleton: "pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require('tailwindcss-animate')
  ],
  safelist: [
    {
      pattern: /pt-\d+/,
    },
  ],
} satisfies Config;
