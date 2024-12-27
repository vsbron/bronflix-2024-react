/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient":
          "linear-gradient(to right, var(--color-red--950), var(--color-red--900))",
        "featured-gradient-1":
          "linear-gradient(to right, var(--color-black), transparent)",
        "featured-gradient-2":
          "linear-gradient(to top, var(--color-black) 5%, transparent)",
        "heading-gradient":
          "linear-gradient(to right, var(--color-red--950), transparent)",
        "loader-gradient": "conic-gradient(transparent, var(--color-red--900))",
        preview: "linear-gradient(to top, var(--color-black--09), transparent)",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      animation: {
        fadeInForwards: "fadeIn 0.2s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      });
    },
  ],
};
