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
        '2000': '2000ms',
      },
      animation: {
        pulse: 'pulse 1s ease-in-out infinite', // Define pulse animation
        slideUp: 'slideUp 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards', // New slideUp animation
        slideDown: 'slideDown 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards', // New slideDown animation
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 var(--hover)' },
          '100%': { boxShadow: '0 0 0 2em transparent' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12rem)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(12rem)' },
        },
      },
      // Extend grid options if needed
      gridTemplateColumns: {
        'custom': 'repeat(5, minmax(0, 1fr))', // 5 columns grid example
      },
    },
  },
  plugins: [],
}
