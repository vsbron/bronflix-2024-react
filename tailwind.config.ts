/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, var(--color-red--950), transparent)",
        "loader-gradient": "conic-gradient(transparent, var(--color-red--900))",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
