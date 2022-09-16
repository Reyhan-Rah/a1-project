/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#EDEDED",
        "dark-gray": "#4A4A4A",
        "light-orange": "#EA7F28",
        "dark-orange": "#D37324",
      },
    },
  },
  plugins: [],
};
