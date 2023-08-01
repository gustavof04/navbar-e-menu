/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '75rem': '75rem',
      },
      screens: {
        '-md': {max: '768px'},
        '-lg': {max: '1024px'},
      }
    },
  },
  plugins: [],
}

