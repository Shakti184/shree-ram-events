/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FF9933', // Saffron (Energy, Tradition)
          gold: '#B8860B',    // Dark Gold (Premium look, readable on white)
          red: '#C41E3A',     // Royal Red (Festivity)
          dark: '#2D2D2D',    // Soft Black (Text)
          light: '#FFF9F0',   // Floral White (Warm background)
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // Elegant for Titles
        body: ['Lato', 'sans-serif'],           // Clean for reading
      }
    },
  },
  plugins: [],
}