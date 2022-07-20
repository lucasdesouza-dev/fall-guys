/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'MaskgroupFallGuys': "url('/src/assets/MaskgroupFallGuys.svg')",

      }
    },
  },
  plugins: [],
}
