import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-3": {
          "0%,12.5%,87.5%,100%": { transform: "translateX(111px)" },
          "37.5%,62.5%": { transform: "translateX(0px)" },
        },
        "slide-3-cover": {
          "0%,12.5%,87.5%,100%": {
            transform: "translateX(111px)",
            opacity: "1",
          },
          "37.5%,62.5%": { transform: "translateX(0px)", opacity: "0" },
        },
        "pulse-full": {
          "0%,12.5%,87.5%,100%": { opacity: "1" },
          "37.5%,62.5%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-3": "slide-3 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "slide-3-cover": "slide-3-cover 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-full": "pulse-full 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-full-delay":
          "pulse-full 4s .25s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      screens: {
        "3xs": "400px",
        "2xs": "480px",
        xs: "560px",
        "1.5xl": "1152px",
      },
      width: {
        "main-smaller": "640px",
        main: "1280px",
      },
      gridRowStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridRowEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
        "13": "repeat(13, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "12": "repeat(12, minmax(0, 1fr))",
        "13": "repeat(13, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
      },
      colors: {
        rose: "#FF0066",
        gray: "#B8CCCB",
        primary: {
          300: "#053747",
          400: "#10657A",
          500: "#00A8C6",
          600: "#00C6DE",
          700: "#CDFEFF",
          800: "#EBFFFE",
        },
        secondary: "#050505",
        accent: "#FF0066",
        gradient: { from: "#60F4FF", to: "#04393D" },
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        rubik: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
        manrope: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
        monda: ["var(--font-monda)", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "border-2": "0 0 0 2px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
    require("tailwind-easing-gradients")({
      type: "radial",
      easing: "ease-in-out",
      directions: {
        radial: "512px circle at var(--illumination-x) var(--illumination-y)",
      },
      gradients: {
        illumination: ["#FFFFFF40", "transparent"],
      },
    }),
  ],
};

export default config;
