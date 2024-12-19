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
        lightBgBrighter: '#e5e7eb',  // Brighter version for the navigation
      },
      transitionDuration: {
        '1100': '1100ms',
        '1200': '1200ms',
        '1300': '1300ms',
        '1400': '1400ms',
        '1500': '1500ms', // Add custom duration for 1500ms
        '2000': '2000ms'
      },
      animation: {
        pulse: 'pulse 1s ease-in-out infinite', // Define pulse animation
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 var(--hover)' },
          '100%': { boxShadow: '0 0 0 2em transparent' },
        },
      },
    },
  },
  plugins: [],
}
