/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "/Users/naeemanasrin/Documents/Book/components/Banner.vue",
    "./assets/**/*.{css,scss}",
  ],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
      header: ["Sora", "sans-serif", "Inter"],
    },
    extend: {},
  },
  plugins: [],
};
