import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow:{
        'up-lg': '0 -4px 6px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        background: "#fffeff",
        foreground: "hsl(var(--foreground))",

        primary: {
          900: "#100b17",
          500: "#251a36",
          300: "#6d6678",
          100: "#bbb8c1",
          50: "#e9e8eb",
        },
        secondary: {
          900: "#61615f",
          700: "#a5a3a0",
          500: "#e8e6e1",
          200: "#f4f4f1",
          50: "#fdfdfc",
        },
		tertiary:{
          900:"#66530e",
		  700:"#ad8c17",
		  500:"#f4c521",
		  300:"#f8d86a",
		  200:"#fae499",
		  100:"#fcedba",
		  50:"#fef9e9",
		},
        neutral: {
          900: "#424242",
          700: "#707070",
          500: "#9e9e9e",
          200: "#d2d2d2",
          100: "#13020f",
          50: "#f5f5f5",
        },

        accent: {
          green: "#18a862",
          blue: "#44bce4",
          purple: "#6d73ce",
          pink: "#e37886",
          cobalt: "#283e9e",
          orange: "#e36f4b",
        },
        error: {
          500: "#9f1819",
          100: "#e1b7b8",
          50: "#f5e8e8",
        },
        success: {
          500: "#0d5700",
          50: "#e7eee6",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
