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
        background: "var(--background)",
        foreground: "var(--foreground)",
        skeleton: "var(--skeleton-bg)", // Using Tailwind's built-in gray-700 variable
        // TODO: replace this in the rest of skeletons and work on enhancing it or move to shadcn skeleton
      },
      animation: {
        skeleton: "pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /pt-\d+/,
    },
  ],
} satisfies Config;
