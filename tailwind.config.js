/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002356",
        secondary: "#46B542",
        tertiary: "#B0C4DE",
        black: "#000000",
        white: "#FFFFFF", // le faltaba el "#" al color blanco
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
