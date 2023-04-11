const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Osland: ["Oswald", "sans-serif"],
      },
    },
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
};
