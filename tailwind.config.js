/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37', 
          500: '#C5A028',
          600: '#B08D20',
          light: '#F3E5AB', 
        },
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1c1c1c',
        },
        cream: '#F9F9F5'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
        explorer: ['"TASA Explorer"', 'sans-serif']
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}