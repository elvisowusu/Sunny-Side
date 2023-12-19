/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "Softred": "hsl(7, 99%, 70%)",
        "Yellow": "hsl(51, 100%, 49%)",
        "Darkdesaturatedcyan(graphicdesigntext)": "hsl(167, 40%, 24%)",
        "Darkblue(photographytext)": "hsl(198, 62%, 26%)",
        "Darkmoderatecyan(footer)": "hsl(168, 34%, 41%)",
        "Verydarkdesaturatedblue": "hsl(212, 27%, 19%)",
        "Verydarkgrayishblue": "hsl(213, 9%, 39%)",
        "Darkgrayishblue": "hsl(232, 10%, 55%)",
        "Grayishblue": "hsl(210, 4%, 67%)",
        "White": "hsl(0, 0%, 100%)",
      },
      fontFamily:{
        "BarlowFont": "Barlow, sans-serif",
        "FrauncesFont": "Fraunces, serif",
      }
    },
  },
  plugins: [],
}

