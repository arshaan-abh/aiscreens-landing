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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "3xs": "360px",
        "2xs": "400px",
        xs: "480px",
        "1.5xl": "1152px",
      },
      width: {
        "main-smaller": "40rem",
        main: "80rem",
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
