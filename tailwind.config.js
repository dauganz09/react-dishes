/** @type {import('tailwindcss').Config} */
module.exports = { 
  mode : 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
     "./public/index.html",
     './components/**/*.{html,js,jsx}',
    ],
  theme: {
    screens: {
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      boxShadow: {
        'chev': '0px 4px 4px rgba(128, 128, 128, 0.07)',
      }
    },
  },
  plugins: [],
}
