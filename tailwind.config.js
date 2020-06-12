const purgeCSS = require("@fullhuman/postcss-purgecss");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./assets/**/*.tsx"],
  theme: {
    fontFamily: {
      sans:
        'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    maxHeight: {
      "10-screen": "10vh",
      "20-screen": "20vh",
      "30-screen": "30vh",
      "40-screen": "40vh",
      "50-screen": "50vh",
      "60-screen": "60vh",
      "70-screen": "70vh",
      "80-screen": "80vh",
      "90-screen": "90vh",
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
      blur: "blur(25px)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },

    extend: {
      spacing: {
        "1/12": "calc(1 * 100% / 12)",
        "2/12": "calc(2 * 100% / 12)",
        "3/12": "calc(3 * 100% / 12)",
        "4/12": "calc(4 * 100% / 12)",
        "5/12": "calc(5 * 100% / 12)",
        "6/12": "calc(6 * 100% / 12)",
        "7/12": "calc(7 * 100% / 12)",
        "8/12": "calc(8 * 100% / 12)",
        "9/12": "calc(9 * 100% / 12)",
        "10/12": "calc(10 * 100% / 12)",
        "11/12": "calc(11 * 100% / 12)",
        "12/12": "calc(12 * 100% / 12)",
      },
      width: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          color: config("theme.colors.black"),
          backgroundColor: config("theme.colors.white"),
        },
        "@screen dark": {
          body: {
            color: config("theme.colors.white"),
            backgroundColor: config("theme.colors.black"),
          },
        },
      });
    },

    require("tailwindcss-filters"),
  ],
};
