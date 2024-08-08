/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1300px",
      },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "22px" }],
      md: ["16px", { lineHeight: "26px" }],
      lg: ["18px", { lineHeight: "28px" }],
      xl: ["20px", { lineHeight: "30px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      "3xl": ["28px", { lineHeight: "40px" }],
      "4xl": ["40px", { lineHeight: "54px" }],
      "5xl": ["48px", { lineHeight: "64px" }],
      "6xl": ["72px", { lineHeight: "89px" }],
    },
    extend: {
      colors: {
        desc: "#5E6282",
        heading: "#181E4B",
        primary: "#4475F2",
        linkUnactive: "#9A9EA6",
        linkActive: "#4737FF",
        placeholder: "#9C9C9C",
      },
      fontFamily: {
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
