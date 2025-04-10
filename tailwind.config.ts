import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--card-bg) / <alpha-value>)',
          foreground: 'rgb(var(--card-fg) / <alpha-value>)',
          muted: {
            foreground: 'rgb(var(--card-muted-fg) / <alpha-value>)'
          },
          tag: {
            DEFAULT: 'rgb(var(--card-tag-bg) / <alpha-value>)',
            foreground: 'rgb(var(--card-tag-fg) / <alpha-value>)'
          }
        },
        border: 'rgb(var(--border-color) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--hover-color) / <alpha-value>)',
        }
      },
      transitionProperty: {
        theme: 'color, background-color, border-color, box-shadow'
      },
    },
  },
  plugins: [],
} satisfies Config;
