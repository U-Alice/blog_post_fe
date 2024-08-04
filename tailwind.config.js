/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'darkb': "#022140",
        'brand' : '#143751',
        'blue': 'rgb(210, 233, 255, 45%)',
        'gray': '#C0C0C0',
        'blue-gray-100': "#d8dfe3",
        'blue-gray-50': "#f6f7f8",
        'blue-gray-900' : "#6e777b"
      }, 
      fontFamily:{
        'quicksand': ['Quicksand', 'sans'],
        'urbanist': ['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
})

