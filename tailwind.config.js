/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Serif', 'serif']
    },
    colors: {
      'brown-900': '#3A2104',
      'brown-700': '#622A0E',
      'brown-500': '#8E4C29',
      'brown-300': '#C38763',
      'brown-100': '#F1BFA2',
      'brown-50': '#FFD4BB',
    },
    backgroundPosition: {
      'top-3': 'center top -5rem',
    },
    extend: {},
  },
  plugins: [],
}