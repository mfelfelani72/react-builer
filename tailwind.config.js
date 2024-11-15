const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    // flowbite.content(),
  ],
  // safelist: [
   
  // ],
  darkMode: "class",
  theme: {
    fontFamily: {
      // flowbite
      body: ["Inter", "ui-sans-serif", "system-ui"],
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    screens: {
      xs: "530px",
      // => @media (min-width: 530px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 769px) { ... }

      bi: "912px",
      // => @media (min-width: 912px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    pdirection: "ltr",

    extend: {
      colors: {
        yellow: "#F0B90A",
        nblue: "#032B44",
        green: "#34C759",
        black: "#000000",
        red: "#E02D2D",
        white: "#fff",
      },
    },
    plugins: [],
  },
  plugins: [
    require("flowbite/plugin")(),
  ],
};