/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darki': '#252954',
      'light': '#9b9ca7',
      'maincl': '#0e0e23',
      'sdch': '#bebec4',
      'white': '#ffff',
      'dark': '#01081f',
      'active': '#4255d4'
    },
    extend: {},
  },
  plugins: [],
}
