/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "chair-img": "url('../img/main-chair.png')",
      },
      fontFamily: {
        sans: ["Inter"],
        clash: ["Clash Display"],
        satoshi: ["Satoshi"],
      },
      container: {
        center: true,
        screens: {
          md: "1024px",
          lg: "1280px",
          xxl: "1386px",
        },
      },
    },
  },
  plugins: [],
};
