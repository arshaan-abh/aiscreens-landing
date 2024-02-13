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
        "2xs": "352px",
        xs: "528px",
      },
      width: {
        main: "80rem",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        rubik: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
        manrope: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
        monda: ["var(--font-monda)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
