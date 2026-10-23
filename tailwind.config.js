/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vinci: {
          red: '#e50000',
          redHover: '#cc0000',
          dark: '#111111',
          gray: '#888888',
          lightGray: '#f5f5f5',
          border: '#dddddd',
        }
      },
      fontFamily: {
        genos: ['Genos', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        ultra: '.35em',
      }
    },
  },
  plugins: [],
}
