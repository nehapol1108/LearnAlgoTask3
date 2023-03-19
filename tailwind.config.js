/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require("tailwindcss"),
    // require("autoprefixer"),
    // ...
  ],
};
