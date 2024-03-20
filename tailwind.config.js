/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./build/pages/*.html"
  ],
  theme: {
    extend: {
      colors:{
        "custom-primary": "#2176AE",
        "c-dark": "#002B47"
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
    },
    fontFamily: {
      Libre: ["Libre Caslon Text, serif"],
      Onest: ["Onest, sans-serif"],
    },
  },
  plugins: [],
}


