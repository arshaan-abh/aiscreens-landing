import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        rubik: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
        manrope: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
        monda: ["var(--font-monda)", ...defaultTheme.fontFamily.sans],
      },
      width: {
        main: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
