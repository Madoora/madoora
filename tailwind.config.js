/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        georgia: ['Georgia'],
        indigo: ['Indigo'],
        helvetica: ['Helvetica'],
      },
      colors: {
        madooraYellow: '#efb814',
      },
      transitionProperty: {
        left: 'left',
      },
    },
  },
  plugins: [],
};
