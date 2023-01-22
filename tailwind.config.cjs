/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
