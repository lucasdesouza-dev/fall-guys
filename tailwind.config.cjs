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
    fontFamily: {
      "Poppins700": "Poppins"
    }, fontSize: {
      bv: ['28px', '42px'],
      fgu: ['64px', '96px'],
    }
  },
  plugins: [],
}
