/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  prefix: "vd-",
  theme: {
    extend: {
      colors: {
        label: "#8c8c8c",
        title: "#404040",
        select: "#e5e5e5",
        divider: "#e6e6e6",
        value: "#f5f5f5",
        icon: "#d9d9d9",
        primary: "#18a0fb",
        hover: "#f0f0f0",
      },
      fontSize: {
        h1: "16px",
        h2: "12px",
      },
    },
  },
  plugins: [],
};
