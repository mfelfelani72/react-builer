const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    flowbite.content(),
  ],
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
       // flowbite
       sans: ['Graphik', 'sans-serif'],
       serif: ['Merriweather', 'serif'],
    },
    screens: {
      xs: "530px",
      // => @media (min-width: 475px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

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
        // flowbite
        // gray: colors.coolGray,
        // blue: colors.lightBlue,
        // red: colors.rose,
        // pink: colors.fuchsia,
      },
    },
    plugins: [],
  },
  plugins: [flowbite.plugin()],
};
