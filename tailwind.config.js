/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary1: 'hsl(180, 29%, 50%)',
        neutral1: 'hsl(180, 52%, 96%)',
        neutral2: 'hsl(180, 31%, 95%)',
        neutral3: 'hsl(180, 8%, 52%)',
        neutral4: 'hsl(180, 14%, 20%)',
      }
    },
  },
  plugins: [],
};
