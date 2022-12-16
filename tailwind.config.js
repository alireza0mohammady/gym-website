/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        secondaryColor:"#3d1e6d",
        actionColor:"#D36135",
        footerColor:"#333333"
      }
    },
  },
  plugins: [],
}
