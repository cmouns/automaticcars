/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
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
      },},
  },
  plugins: [],
}

