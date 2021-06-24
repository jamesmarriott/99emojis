module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
       '5xl': '2.6rem',
       '6xl': '3rem',
      '7xl': '3.4rem',
     },
    screens: {
      'sm1':'600px',
      'lg1':'750px',
      'xl1':'1200px',
      'xl2':'1600px',
       },
  },
  variants: {
    outline: ["focus"],
  },
  plugins: [],
}