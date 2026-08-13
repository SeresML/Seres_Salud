import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0A5229',
          darkgreen: '#073B1D',
          moss: '#75A376',
          lightmoss: '#EAF3EB',
          lightgreen: '#F0F7F2',
          lightbg: '#F8F9FA',
          darktext: '#1A1A1A',
          muted: '#555555',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['var(--font-open-sans)', 'sans-serif'],
      },
      borderRadius: {
        brand: '8px',
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(10, 82, 41, 0.08)',
        cardhover: '0 12px 30px -4px rgba(10, 82, 41, 0.16)',
        dropdown: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;

