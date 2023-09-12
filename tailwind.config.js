/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/login/**/*.{js,ts,jsx,tsx}",
    "./src/app/home/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    border: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        black: "#000",
        success: "#30F076",
        "success-light": "#ebfff0",
        "success-dark": "#00c853",
        danger: "#FC4242",
        "danger-light": "#f3dbde",
        primary: "#12214A",
        info: "#42c5f5",
        warning: "#FF9900",
        "warning-light": "#ffefd7",
        secondary: "#FFC630",
        "secondary-light": "#FFF6DE",
        white: "#fff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#00C853",
        yellow: "#E18904",
        solid: "#BEBEBE",
        dark: "#212121 ",
        gray: "#E7E7E7",
        "gray-light": "#E2E2E2",
        "gray-dark": "#EBEBEB",
        grey: "#757575",
      },
    },
  },
  plugins: [],
};
