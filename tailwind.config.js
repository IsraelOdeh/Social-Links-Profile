/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cGreen": "hsl(75, 94%, 57%)",
        "cWhite": "hsl(0, 0%, 100%)",
        "cGrey": "hsl(0, 0%, 20%)",
        "cDarkGrey": "hsl(0, 0%, 12%)",
        "cOffBlack": "hsl(0, 0%, 8%)"
      },
      fontFamily:{
        "Inter": ['Inter', "sans-serif"]
      }
    },
  },
  plugins: [],
}

