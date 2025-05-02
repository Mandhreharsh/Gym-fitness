/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend:{
      backgroundImage: {main: "url('images/mainbg.jpg')", 
                        main2: "url('images/mainbg2.jpg')", 
                        main3: "url('images/mainbg3.jpg')", 
                        main4: "url('images/mainbg4.jpg')", 
                        main5: "url('images/mainbg5.jpg')", 
                        workbg: "url('images/workbg.png')", 
                        Loginbg: "url('images/login.png')", 
                        Doctorsbg: "url('images/doctorsbg.png')",
                        bgfooter: "url('images/footerbg.jpg')",
                        bgdumbell: "url('images/dumbell.png')",
                        bgdumbell1: "url('images/dumbell11.png')",
                        aa: "url('images/aa1.jpg')"
                      },
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#CBD6FF",
      darkBlue: "#A9B7FF",
      lightBlue200: "#DDE7FF",
      violet: "#AFBBFF",
      bgBlue: "#D7E3FF",
      buttonBlue: "#ABB6FF",
      lightBlue200: "#D7E3FF",
      violet200: "#C4C1FF",
      lightBlue100: "#A8F1FF",
      lightBlue50: "#D9F6FF",
      violet50: "#E4E4FF",
      violet500: "#D0D2FF",
      lightBlue500: "#9BB3FB",
      violet100: "#E2DFFF",
      yellow500: "#F4AF00",
      black500: "#12100",
      black700: "#3d3d3d",
    },
  },
  },
  plugins: [],
}

