/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: false,
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
        warning: "#fc2942",
      },
      ringColor: {
        select: "#e5e5e5",
        primary: "#18a0fb",
      },
      fontSize: {
        h1: "16px",
        h2: "12px",
      },
    },
  },
  plugins: [],
};
