/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      main: [
        "iranSans",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
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
        redd: "#E02D2D",
        white: "#fff",
      },
    },
    plugins: [],
  },
};
