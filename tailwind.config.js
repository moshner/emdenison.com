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
      backdropBlur: {
        xs: '2px',
      },
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
        'top-1': 'center top -5rem',
        'top-2': 'center top -8rem',
        'top-3': 'center top -13rem',
      },
      backgroundImage: {
      'hero-1': "url('/img/hero-1.jpg')",
      'hero-2': "url('/img/hero-2.png')",
      'hero-3': "url('/img/hero-3.png')",
      'hero-EM': "url('/img/hero-EM.png')",
      'background': "url('/img/background.png')"
      },
      screens: {
        'xs': '500px'
      }
    },
  },
  plugins: [],
}