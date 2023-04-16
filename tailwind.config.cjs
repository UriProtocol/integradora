/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'appear-down': {
          '0%': {opacity: '0', translate: '0 1.5rem'}, '100%': {opacity: '1', translate: '0'}
        },
        'appear-up': {
          '0%': {opacity: '0', translate: '0 -1.5rem'}, '100%': {opacity: '1', translate: '0'}
        },
        'appear-left': {
          '0%': {opacity: '0', translate: '-1.5rem 0'}, '100%': {opacity: '1', translate: '0'}
        },
        'appear-right': {
          '0%': {opacity: '0', translate: '1.5rem 0'}, '100%': {opacity: '1', translate: '0'}
        },
        'appear': {
          '0%': {opacity: '0'}, '100%': {opacity: '1'}
        },
        'appear-scale': {
          '0%': {opacity: '0', scale: '0.95'}, '100%': {opacity: '1', scale: '1'}
        }
      },
      animation: {
        'popup-appear': 'appear-down 0.25s ease forwards',
        'appear-up': 'appear-up 0.25s ease forwards',
        'fade-in': 'appear 0.25s ease forwards',
        'container-appear': 'appear-scale 0.25s ease forwards',
        'home-buttons-appear': 'appear-up 0.25s 0.15s ease forwards',
        'card-left-appear': 'appear-left 0.5s 0.3s ease forwards',
        'card-right-appear': 'appear-right 0.5s 0.6s ease forwards',
        'card-bottom-appear': 'appear-down 0.5s 0.9s ease forwards',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}