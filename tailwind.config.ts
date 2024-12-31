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
        "buttons-wrapper-gradient":
          "linear-gradient(to left, var(--color-black) 10%, transparent)",
        "heading-gradient":
          "linear-gradient(to right, var(--color-red--950), transparent)",
        "loader-gradient": "conic-gradient(transparent, var(--color-red--900))",
        "preview-gradient":
          "linear-gradient(to top, var(--color-black--09), transparent)",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      animation: {
        exploreMoreBg: "exploreMoreBgMove 60s linear infinite",
        fadeInForwards: "fadeIn .2s ease forwards",
        showVideoPopUp: "fadeInDown .2s ease forwards .2s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDown: {
          "0%": { top: "-20rem", opacity: "0" },
          "100%": { top: "0rem", opacity: "1" },
        },
        exploreMoreBgMove: {
          "0%": { backgroundPositionY: "0" },
          "100%": { backgroundPositionY: "-80rem" },
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
