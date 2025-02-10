import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      transitionProperty: {
        theme: 'color, background-color, border-color, box-shadow'
      },
    },
  },
  plugins: [],
} satisfies Config;