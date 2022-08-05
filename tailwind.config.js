/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },

    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "light-blue": "#f1f6fc",
        "light-gray": "#fbfbfb",
        "dark-blue": "#2f455d",
        "light-green": "#66c5af",
        dark: "#101010",
      },
      boxShadow: {
        1: "0px 1px 8px 3px rgb(0 0 0 / 3%)",
        2: "0px 14px 30px rgb(0 0 0 / 7%)",
      },
    },
  },
  plugins: [],
};
