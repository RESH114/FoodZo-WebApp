/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "maroon":"#921A40",
        "pink":"#C75B7A",
        "peach":"#D9ABAB",
        "black":"#1E201E",
        "gray":"#697565",
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

