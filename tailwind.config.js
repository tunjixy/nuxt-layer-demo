/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      Apercu: ["ApercuPro", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "outline-primary": "0 0 0 0.5px rgba(222, 158, 54, 0.3)",
        btn: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
        custom: "0 4px 13px rgb(0 0 0 / 5%)",
      },
      colors: {
        primary: {
          light: "#ffca75",
          DEFAULT: "#DE9E36",
          dark: "#945e07",
        },
        "dark-text": "#222222",
        "light-text": "#666666",
        grey: "#E7E7E7",
        background: "#f4f7fa",
      },
    },
  },
  plugins: [],
};
