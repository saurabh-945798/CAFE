/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' if you want to follow user's system preference
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide','@tailwindcss/line-clamp')],
}