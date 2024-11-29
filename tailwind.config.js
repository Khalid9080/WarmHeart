/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sumana: ['"Sumana"', 'serif'], // Add "Sumana" to the font family list
        mulish: ['"Mulish"', 'serif'],
      },
  
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
