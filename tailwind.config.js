/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-custom": "#ffe5f1",
        "teal-custom": "#87f5f5",
      },
    },
  },
  plugins: [],
};
