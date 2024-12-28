import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "rubik-vinyl": ["'Rubik Vinyl'", "cursive"], // Add the font family here
        "oswald": ["'Oswald'", "sans-serif"],
        "rowdies": ["'Rowdies'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
