/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        "primary-color":"var(--primary-color)",
       "secondary-color" :"var(--secondary-color)",
       "font-color":"var(--font-color)",
       "error":"var(--error)",
      },
      screens:{
        sm:"529px",
      }
    },
  },
  plugins: [],
}
