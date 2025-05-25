module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#155b99',
        'secondary': '#13064D',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}