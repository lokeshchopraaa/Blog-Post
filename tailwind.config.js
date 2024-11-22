/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#232536',
        accent: '#FFD050',
        purple: '#592EA9',
        gray: {
          dark: '#4C4C4C',
          medium: '#6D6E76',
          light: '#F4F4F4'
        },
        lavender: '#F4F0F8',
        cream: '#FBF6EA'
      },
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};