module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        clicker: ['"Clicker Script"', "sans-serif"],
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        bgBlack: "rgb(var(--color-black)/<alpha-value>)",
      },
      boxShadow: {
        custom: "0px 3px 31px 2px rgb(207 207 207 / 70%)",
      },
    },
  },
  plugins: [],
};
