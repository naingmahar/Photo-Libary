/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#3b82f6',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
}

