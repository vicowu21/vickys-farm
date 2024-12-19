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
        brown: {
          50: "#FAF6F3",
          100: "#F5EDE7",
          200: "#E6D5C7",
          300: "#D7BDA7",
          400: "#C8A587",
          500: "#B98D67",
          600: "#8C6544",
          700: "#674B32",
          800: "#4A3419",
          900: "#2D1F0F",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
