/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        themeLight: "#f8f8f8",
        themeDark: "#131313",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg')",
        "footer-texture":
          "url('https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg')",
      },
    },
  },
  plugins: [],
};
