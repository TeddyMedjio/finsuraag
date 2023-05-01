const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#185687",
          gray: "#6A6964",
          "light-blue": "#F1F9FF",
        },
      },
      fontFamily: {
        roboto: ["Roboto", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
