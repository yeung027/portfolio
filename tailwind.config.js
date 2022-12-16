/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'myLandscape': { 'raw': '(orientation: landscape) and (max-width:974px)' },
      'desktop': '975px'
    },
    extend: {},
  },
  plugins: [],
}
