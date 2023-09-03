/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "black":'#101218',
        "white":"#FFFFFF",
        "green":"#6FC78F",
        "light-gray":"#F9F9F9",
        "gray":"#37393E",
        "darker-gray":"#F3F3F3",
        "gray-400":"#A0A0A1",
        "red": "#EA5743",
        "gray-500": "#989898",
        "from":"#6FC78F",
        "to":"#A0EC25",
        "bg2":'#1E1E1E',
        "bg3":'#232323'
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "abbg": "url('./assets/abbg.png')"
      }),
      fontFamily: {
        dmsans: ["Kufam", "sans-serif"],
        montserrat: ["Inter", "sans-serif", "poppin"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
