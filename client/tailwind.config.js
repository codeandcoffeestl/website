/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#4B2E17",
        SecondaryColor: "#17A2B8",
        WAccentColor: "#FAF9F6",
        GAccentColor: "#D3D3D3",
        OHighlightColor: "#FFA500",
        YHighlightColor: "#FFD700",
      },
      backgroundImage: {
        coffeeBgImg: "url('../../src/assets/CoffeeBg.jpg')",
      },
    },
  },
  plugins: [],
};
