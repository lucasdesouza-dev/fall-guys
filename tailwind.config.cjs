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
      "Poppins500": "Poppins"
    }, fontSize: {
      bv: ['28px', '42px'],
    }
  },
  plugins: [],
}
