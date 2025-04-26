import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': '#374151', // Use gray-700 as the default heading color
            '--tw-prose-invert-headings': '#D1D5DB', // Use gray-300 for dark mode headings
          },
        },
      },
    },
  },
  // Note: The typography plugin is now loaded via @plugin in globals.css, not here.
  // plugins: [require('@tailwindcss/typography')],
};

export default config;
