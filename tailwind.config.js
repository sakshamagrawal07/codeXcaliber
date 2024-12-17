/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'multi-gradient': 'linear-gradient(to bottom, #4285F4, #EA4335, #FBBC04, #34A853, #4285F4, #EA4335, #FBBC04)',
      },
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
      },
    },
  },
  plugins: [],
}

