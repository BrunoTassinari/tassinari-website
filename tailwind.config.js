/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'color-bg': 'var(--color-bg)',
        'color-bg-secondary': 'var(--color-bg-secondary)',
        'color-text': 'var(--color-text)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-primary': 'var(--color-primary)',
        'color-hover-primary': 'var(--color-hover-primary)',
      },
    },
  },
  plugins: [],
};
