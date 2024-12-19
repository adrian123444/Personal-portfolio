/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#cacaca',
        lightBgBrighter: '#e5e7eb'  // Brighter version for the navigation
      },
    },
  },
  plugins: [],
}
