export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#8FC0AC",
        brandBlue: "#599FFC",
        brandDark: "#0A0A0A",
        brandGray: "#4A5565",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        nav: "820px"
      }
    },
  },
  plugins: [],
};

