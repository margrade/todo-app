/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        vinaSans: "'Vina Sans', serif",
        lato: "'Lato', serif",
        marhey: "'Marhey', serif"
      }
    },
  },
  plugins: [],
}

