/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "border-card-color": "#E8E8EA",
        "badge-text": "#4B6BFB",
        "desc-color": "#181A2A",
        "button-bg": "#696A75",
        "title-color":"#181A2A",
        "username-color":"#97989F",
        "border-color":"#DCDDDF",
        "selected":"#495057",
        "contact":"#F6F6F7",

      },
    },
  },
  plugins: [
    require('daisyui'), 
    require('@tailwindcss/typography'),
  ],
};
