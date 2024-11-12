/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Fraunces": ['"Fraunces"', ...defaultTheme.fontFamily.serif],
        "Montserrat": ['"Montserrat"', ...defaultTheme.fontFamily.serif] 
      },
      colors : {
        "darkCyan" : "#3c8067",
        "cream" : "#f2ebe3",
        "VDBlue" : "#1c232b",
        "DGBlue" : " #6c7289",
      }
    },
  },
  plugins: [],
}