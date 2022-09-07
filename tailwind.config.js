/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      
      "content": "max-content"
    },
    extend: {
      fontFamily: {
        "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        "Fredoka": ["Fredoka sans", ...defaultTheme.fontFamily.sans],
      },
      

    },
    screens: {
      
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'mm': '375px',
      // => @media (min-width: 640px) { ... }

      'mmc': '360px',
      // => @media (min-width: 640px) { ... }

      'mlc': '390px',
      // => @media (min-width: 640px) { ... }

      'ml': '425px',
      // => @media (min-width: 640px) { ... }

      'mlcc': '700px',
      // => @media (min-width: 640px) { ... }

      't': '768px',
      // => @media (min-width: 768px) { ... }

      'tc': '800px',
      // => @media (min-width: 768px) { ... }

      'tcc': '900px',
      // => @media (min-width: 768px) { ... }

      'l': '1024px',
      // => @media (min-width: 1024px) { ... }

      'll': '1440px',
      // => @media (min-width: 1280px) { ... }

      '4k': '2560px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
