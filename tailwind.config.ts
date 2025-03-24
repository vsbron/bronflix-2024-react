/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient":
          "linear-gradient(to right, var(--color-red--950), var(--color-red--900))",
        "button-gradient--active":
          "linear-gradient(to right, var(--color-red--700), var(--color-red--600))",
        "featured-gradient-1":
          "linear-gradient(to right, var(--color-black), transparent)",
        "featured-gradient-2":
          "linear-gradient(to top, var(--color-black) 5%, transparent)",
        "featured-gradient-3":
          "linear-gradient(to top, var(--color-black), transparent 15%, transparent 85%, var(--color-black))",
        "header-gradient":
          "linear-gradient(to top, transparent, var(--color-black) 30%, var(--color-black))",
        "buttons-wrapper-gradient":
          "linear-gradient(to left, var(--color-black) 10%, transparent)",
        "heading-gradient":
          "linear-gradient(to right, var(--color-red--950), transparent)",
        "loader-gradient": "conic-gradient(transparent, var(--color-red--900))",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      animation: {
        exploreMoreBg: "exploreMoreBgMove 60s linear infinite",
        mainPageBg: "mainPageBgMove 20s linear infinite",
        fadeInForwards: "fadeIn .2s ease forwards",
        showModalPopUp: "fadeInDown .2s ease forwards .2s",
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
          "100%": { backgroundPositionY: "-72rem" },
        },
        mainPageBgMove: {
          "0%": { backgroundPositionY: "0" },
          "100%": { backgroundPositionY: "-90.5rem" },
        },
      },
      screens: {
        xs: "450px",
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
        ".border-main-color": {
          borderColor: "var(--color-white--700)",
        },
        ".input-styles": {
          fontSize: "1.75rem",
          padding: "0.5rem 1rem",
          backgroundColor: "var(--color-black)",
          borderRadius: "0.375rem",
          outline: "none",
          border: "var(--color-red--900) 1px solid",
          height: "4rem",
          minWidth: "25rem",
          "&:disabled": {
            backgroundColor: "var(--color-white--700)",
            color: "var(--color-white--500)",
            cursor: "not-allowed",
            pointerEvents: "none",
          },
          "@media (max-width: 768px)": {
            fontSize: "1.5rem",
            padding: "0.25rem 0.75rem",
            minWidth: "0",
            height: "3.5rem",
          },
        },
        ".input-wide-styles": {
          maxWidth: "32rem",
        },
        ".add-to-user-list-ui": {
          svg: {
            filter: "drop-shadow(0 0 .45rem var(--color-white))",
            stroke: "var(--color-white--200)",
            strokeWidth: ".18rem",
          },
        },
        ".hamburger-line": {
          position: "absolute",
          left: "0",
          right: "0",
          height: "3px",
          background: "var(--color-white)",
          transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        },
      });
    },
  ],
};
