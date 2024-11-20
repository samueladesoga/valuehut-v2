import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "var(--gradient-custom)",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1320px",
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fill: {
          "brand-primary": "var(--Color-Fill-Brand-primary)",
          "brand-secondary": "var(--Color-Fill-Brand-secondary)",
          "neutral-strong": "var(--Color-Fill-Neutral-strong)",
        },
      },
      fontFamily: {
        primary: ["Bricolage Grotesque", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": ["12px", { lineHeight: "18px" }],
        xs: ["14px", { lineHeight: "21px" }],
        sm: ["16px", { lineHeight: "24px" }],
        base: ["18px", { lineHeight: "27px" }],
        lg: ["19px", { lineHeight: "28.5px" }],
        xl: ["21px", { lineHeight: "31.5px" }],
        "2xl": ["23px", { lineHeight: "34.5px" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["26px", { lineHeight: "39px" }],
        "5xl": ["29px", { lineHeight: "43.5px" }],
        "6xl": ["31px", { lineHeight: "40.3px" }],
        "7xl": ["47px", { lineHeight: "51.7px" }],
        "8xl": ["54px", { lineHeight: "70.2px" }],
        "9xl": ["60px", { lineHeight: "78px" }],
      },
      textColor: {
        main: "var(--Color-Text-Main)",
        secondary: "var(--Color-Text-Secondary)",
        body: "var(--Color-Text-Body)",
        accentmain: "var(--Color-Text-accentMain)",
        accentsecondary: "var(--Color-Text-accentSecondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
