import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#C1503B",
          50: "#F6E5E1",
          100: "#ECC5BD",
          200: "#DFA094",
          300: "#D27B6B",
          400: "#C9624F",
          500: "#C1503B",
          600: "#A04231",
          700: "#7F3427",
          800: "#5F271D",
          900: "#3E1913",
        },
        cream: {
          DEFAULT: "#F4EEE1",
          50: "#FBF9F4",
          100: "#F8F4EB",
          200: "#F4EEE1",
          300: "#EDE4D2",
          400: "#E2D6BF",
          500: "#D8CFC0",
        },
        ink: {
          DEFAULT: "#1A1512",
          50: "#4A3F3A",
          100: "#3E342F",
          200: "#322A25",
          300: "#28211D",
          400: "#1A1512",
          500: "#14100E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
