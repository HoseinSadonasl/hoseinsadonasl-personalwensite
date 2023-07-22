/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        primary: "#921DDF",
        primaryLight: "#BA52FF",
        primaryDark: "#641DDF",
        secoundary: "#B81DDF",
        secoundaryDark: "#8619A2",
      },
      fontFamily: {
        YekanReg: ["YekanReg"],
        YekanBd: ["YekanBd"],
        YekanTn: ["YekanTn"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
