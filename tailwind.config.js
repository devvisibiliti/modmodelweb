/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open+Sans"],
        Montserrat: ["Montserrat"],
        Inter: ["Inter"],
      },
      fontSize: {
        text_54px: ["3.375rem"],
        text_32px: ["2rem"],
      },
      lineHeight: {
        LH_65px: ["4.114rem"],
      },
      maxHeight: {
        section1: "32.313rem",
        section3H: "34.563rem",
      },
      maxWidth: {
        Section1col1: "37.625",
        section3W: "28.313rem",
      },
      colors: {
        Section3colr:
          "background: linear-gradient(180deg, rgba(57,59,60,1) 90%, rgba(211,35,40,1) 90%);",
      },
    },
  },
  plugins: [],
};
