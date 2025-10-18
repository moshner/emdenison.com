/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Serif', 'serif'],
      "digital-native-serif": ['Zilla Slab', 'serif'],
      "digital-native-sans": ['Carrois Gothic SC', 'sans-serif'],
      "reluctant-cyborg-sans": ['Nova Square', 'sans-serif'],
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
        'teal': '#217F88',
        'digital-native-bg': '#182528f2',
        'digital-native-green': '#6DA09B',
        'reluctant-cyborg-bg': '#123456',
        'voyager-20-peach': '#FD9689'
      }, 
      backgroundPosition: {
        'top-1': 'center top -2rem',
        'top-2': 'center top -8rem',
        'top-3': 'center top -13rem',
        'right-3': 'right -5rem top',
      },
      backgroundImage: {
      'hero-1': "url('/img/hero-1.jpg')",
      'hero-2': "url('/img/hero-2.jpg')",
      'hero-3': "url('/img/hero-3.jpg')",
      'hero-EM': "url('/img/hero-EM.jpg')",
      'background': "url('/img/background.png')",
      'hero-digital-native': "url('/img/hero-digital-native.jpg')",
      'hero-reluctant-cyborg': "url('/img/reluctant-cyborg-background.png')",
      'hero-voyager-20': "url('/img/voyager-2.0-background.png')",
      'footer-1': "url('/img/footer-1.jpg')",
      },
      screens: {
        'xs': '500px'
      }
    },
  },
  plugins: [],
}