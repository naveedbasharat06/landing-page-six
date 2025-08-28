/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace: ["Monospace", "monospace"],
        sansserif: ["SansSerif", "sans-serif"],
         manrope: ['Manrope', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}
