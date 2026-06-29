/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b2efc',
          hover: '#731dd6',
          light: '#f3e8ff',
        },
        'bg-app': '#fcfcfd',
        'text-dark': '#111827',
        'text-body': '#4b5563',
        'text-muted': '#6b7280',
        'border-color': '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
