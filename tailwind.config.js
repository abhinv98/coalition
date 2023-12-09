/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mountains': "url('/hero-bg.png')",
        'peak': "url('/peak-bg.png')",
        'snow-peak': "url('/snow-peak.png')",
       
      },
    fontFamily: {
      'Bebas': [ 'Bebas Neue'],
      'Oswald': ['Oswald', 'sans-serif']
    }
  },
  plugins: [],
}
}