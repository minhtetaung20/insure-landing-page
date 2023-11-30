/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      heading: ["DM serif Display", "serif"],
      body: ["Karla", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2c2640",
        secondary: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
