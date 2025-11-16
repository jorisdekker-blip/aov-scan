// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // DEZE PADEN ZIJN DE SLEUTEL
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        baloo: ['var(--font-baloo)', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#2D2E5B',
        'secondary-orange': '#F77F00',
        'light-blue': '#e0e7ff',
      },
    },
  },
  plugins: [],
};
export default config;