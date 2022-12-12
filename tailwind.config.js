/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        secondaryColor:"#E8E8E8",
        primaryColor:"#FFFFFF",
        actionColor:"#D36135",
      }
    },
  },
  plugins: [],
}
