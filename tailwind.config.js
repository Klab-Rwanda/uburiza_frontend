/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1e4c31', // very dark emerald
          primary: '#247045', // standard emerald
          light: '#e8f3ec', // very light green
          accent: '#10b981', // bright green for charts
        }
      }
    },
  },
  plugins: [],
}
