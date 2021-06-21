module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'lg1':'750px',
      'xl1':'1050px',
       },
  },
  variants: {
    outline: ["focus"],
  },
  plugins: [],
}



