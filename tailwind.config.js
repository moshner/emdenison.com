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
    extend: {
      colors: {
        'brown': {
          900: '#3A2104',
          700: '#622A0E',
          500: '#8E4C29',
          300: '#C38763',
          100: '#F1BFA2',
          50: '#FFD4BB',
        },
        'orange': '#E24810',
        'teal': '#217F88',
      }, 
      backgroundPosition: {
        'top-3': 'center top -5rem',
      },
      backgroundImage: {
      'hero-1': "url('/img/hero-1.png')",
      'hero-2': "url('/img/hero-2.png')",
      'hero-3': "url('/img/hero-3.png')",
      'hero-EM': "url('/img/hero-EM.png')",
      },
      screens: {
        'xs': '500px'
      }
    },
  },
  plugins: [],
}