/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace: ["Monospace", "monospace"],
        sansserif: ["SansSerif"],
         manrope: ['Manrope', 'sans-serif'],
          inter: ['Inter']
      },
      
    },
  },
  plugins: [],
}
