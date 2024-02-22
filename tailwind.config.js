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
        'color-text': 'var(--color-text)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-primary': 'var(--color-primary)',
      },
    },
  },
  plugins: [],
};
