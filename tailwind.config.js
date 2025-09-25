/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      screens: {
        'xl2': '1440px', // custom breakpoint
      },
    },
  },
}
