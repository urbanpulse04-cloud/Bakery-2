/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
      },
      colors: {
        cream: "#fdf6ec",
        "warm-brown": "#6b3f1f",
        "light-brown": "#c9956b",
        "dark-brown": "#3d1f0a",
      },
    },
  },
  plugins: [],
}

