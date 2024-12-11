/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs":"480px",
        // "3xl": ""
      },
      boxShadow: {
        'inner-shadow': 'inset 0 -10px 100px 100px #000',
        'glow': '0 0px 5px #00ff00'
      },
      animation: {
        levitate: 'levitate 4s infinite ease-in-out',
      },
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}