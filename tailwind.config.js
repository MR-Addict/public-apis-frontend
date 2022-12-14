/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#F0F0F0",
        "secondary-bg": "#E0E0E0",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
      },
    },
  },
  plugins: [],
};
