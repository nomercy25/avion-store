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
      },
      screens: {
        'sm': { 'max': '480px' },
        // => @media (max-width: 639px) { ... }

      },
    },
  },
  plugins: [],
}

