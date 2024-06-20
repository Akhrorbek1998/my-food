/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "btn-shadow": "0px 8px 24px 0px rgba(234, 124, 105, 0.32)",
      },
      fontFamily: {
        mulish: "'Barlow', sans-serif",
      },
      colors: {
        lighter: "#E0E6E9",
        primary: "#EA7C69",
        "base-dark-line": "#393C49",
        "base-dark-2": "#1F1D2B",
        success: "rgba(107, 226, 190, 0.24)",
      },
      backgroundColor: {
        "bg-overlay": "rgba(0, 0, 0, 0.8)",
        "active-bg": "rgba(234, 124, 105, 0.26)",
        "base-primary": "rgba(234, 124, 105, 0.24);",
      },
    },
  },
  plugins: [],
};
