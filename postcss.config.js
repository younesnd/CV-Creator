module.exports = {
  plugins: [
    require("stylelint")({
      configFile: "stylelint.config.js",
    }),
    require("autoprefixer")(),
    require("process"),
    require("postcss-preset-env"),
    require('tailwindcss')('tailwind.config.js')
  ],
};
