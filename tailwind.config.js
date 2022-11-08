/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.js"],
  theme: {
    extend: {colors:{
        'my-letra': 'black', 'my-warning': 'red',
      }
    },
  },
  plugins: [],
}
