/** @type {import('tailwindcss').Config} */
import theme from "./theme";
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: theme,
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
