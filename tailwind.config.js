/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      harry: ['Harry P', 'sans-serif'],
      lumos: ['Lumos', 'sans-serif'],
    },},
  },
  plugins: [],
}