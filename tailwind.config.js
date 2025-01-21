/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "midnight-green": "#014E56",
          "light-coral": "#F67E7E",
          white: "#FFFFFF",
        },
        secondary: {
          "reptaure-blue": "#79C8C7",
          "police-blue": "#2C6269",
          "deep-jungle-green": "#004047",
          "sacremento-state-green": "#012F34",
          "dark-green": "#002529",
        },
      },
      fontSize: {
        "h1-lg": ["100px", { lineHeight: "100px" }],
        "h1-sm": ["64px", { lineHeight: "56px" }],
        h2: ["48px", { lineHeight: "48px" }],
        h3: ["18px", { lineHeight: "28px" }],
        b1: ["18px", { lineHeight: "28px" }],
        b2: ["15px", { lineHeight: "25px" }],
      },
    },
    fontFamily: {
      livvic: "Livvic",
    },
  },
  plugins: [],
};
