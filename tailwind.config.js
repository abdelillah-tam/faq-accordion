/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple':'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
        'pink': '#AD28EB'
      },
      fontFamily:{
        "work-sans-bold": "WorkSans-Bold",
        "work-sans-regular": "WorkSans-Regular"
      },
      transitionProperty:{
        'height': 'height'
      }
    },
  },
  plugins: [],
}

