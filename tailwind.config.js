/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGray: 'rgba(200, 200, 200, 0.2)',
      }
    },
  },
  plugins: [],
}
