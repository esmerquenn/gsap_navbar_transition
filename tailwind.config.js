/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        neon: ["NeonGratisk"],
        warpen: ["Warpen"],
      },
      screens: {
        sm: "540px",
        md: "765px",
        lg: "992px",
        xl: "1140px",
      },
      colors: {
        white: "#F7F7F7",
        lightGreen: "#8FBC8B",
        middleGreen: "#234829",
        darkGreen: "#001514",
        darkRed: "#8F1D2C",
        red: "#DB2B30",
      },
    },
  },
  plugins: [],
};
