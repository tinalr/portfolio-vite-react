/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myblue: '#4287f5',
        reactblue: {
          light: "#78a4eb",
          dark: "#3064b8"
        }
      },
    },
  },
  plugins: [],
}
