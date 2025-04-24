
import type { Config } from "tailwindcss";

export default {
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
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F97316",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ea384c",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(155, 135, 245, 0.1)",
          foreground: "#ffffff",
        },
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom right, #1A1F2C, #2A2F3C)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
