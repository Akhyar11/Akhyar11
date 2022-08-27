/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#fbbf24"
      },
      fontFamily: {
        karla: ["karla", "serif"]
      }
    },
  },
  plugins: [],
}