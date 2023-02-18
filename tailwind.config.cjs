/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#475BE8',
        'light-text': '#11142D',
        'light-text-secondary': '#808191',
        'dark-text': '#EFEFEF',
        'dark-text-secondary': '#6F767E',
        'light-bg': '#F4F4F4',
        'dark-bg': '#111315',
        'app-light-bg': '#FCFCFC',
        'app-dark-bg': '#1A1D1F',
        'hover-color': '#F7F7F7',
      },
    },
    fontFamily: {
      bodytext: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
};
