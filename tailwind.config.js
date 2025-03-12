/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1F1F1F',
        secondary: '#545454',
        third: '#D1D1D1'
      },
      fontFamily: {
        inter: ["Inter", "serif"]
      }
    },
  },
  plugins: [],
}

