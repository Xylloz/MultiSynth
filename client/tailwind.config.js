/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./public/**/*.html", "./src/**/*.js", "./src/components/**/*.js"],
  mode: "jit",
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      lightblue: "#22A7FA",
      pink: "#22FA75",
      pinker: "#FA22A7",
      noob: "#FAE122",
      background: "#181818",
      backerground: "#0b0b0b",
      foreground: "#222222",
      panelAccent: "#C44D1E",
    },
    extend: {},
  },
  plugins: [],
};
