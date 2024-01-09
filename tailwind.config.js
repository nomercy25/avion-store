/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'chair-img': "url('../img/main-chair.png')",
      },
      fontFamily: {
        sans: [
          "Inter",
        ],
        clash: [
          "Clash Display"
        ],
        satoshi: [
          "Satoshi"
        ]
      }
    },
  },
  plugins: [],
}

