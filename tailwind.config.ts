/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient":
          "linear-gradient(to right, var(--color-red--950), var(--color-red--900))",
        "featured-background":
          "linear-gradient(to top, var(--color-black--09), transparent)",
        "heading-gradient":
          "linear-gradient(to right, var(--color-red--950), transparent)",
        "loader-gradient": "conic-gradient(transparent, var(--color-red--900))",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Roboto", "sans-serif"],
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
