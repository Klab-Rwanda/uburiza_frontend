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
        sans: ['Inter', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#11664a', // darker shade of primary
          primary: '#1D9E75', // the requested Uburiza green
          light: '#e8f5f1', // light tint
          accent: '#10b981', // keeping accent
        }
      }
    },
  },
  plugins: [],
}
