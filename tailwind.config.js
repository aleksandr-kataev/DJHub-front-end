/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'secondary-black': "#1E2021",
        'purple': '#8968EE',
        'primary-grey': '#D9D9D9',
        'secondary-grey': '#A8A8A8',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

