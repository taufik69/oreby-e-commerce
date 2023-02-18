/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1601px",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        aditionalColor: "#6D6D6D",
        seconddary: "#767676",
        inputbottom: "#D8D8D8",
      },
      screens: {
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
