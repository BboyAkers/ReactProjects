/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          light: '#ABBCFF', // Light Blue
          DEFAULT: '#BEE2FD', // Sky Blue
          dark: '#022959' // Denim
        },
        'grey': {
          light: 'F8F9FF', // Very Light Grey
          DEFAULT: '#D6D9E6', // Light Grey
          dark: '#9699AA' // Grey
        },
        'orange': {
          DEFAULT: '#FFAF7E'
        },
        'pink': {
          DEFAULT: '#F9818E'
        },
        'purple': {
          DEFAULT: '#483EFF'
        },
        'red': {
          DEFAULT: '#EE374A'
        },
        'white': {
          DEFAULT: '#FFFFFF',
          dark: '#EFF5FF'
        }
      }
    },
  },
  plugins: [],
}

