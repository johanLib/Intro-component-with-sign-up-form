/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 7px rgba(0, 0, 0, 0.2)',
        custom2: '0 4px 0 rgb(106, 221, 172)',
        button: '0 3px 0 1px rgb(50, 186, 127)'
      }
    },
  },
  plugins: [],
}