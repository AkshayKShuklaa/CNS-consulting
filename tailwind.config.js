/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#080808",
          800: "#121212",
          700: "#1F1F1F",
        },
        teal: {
          500: "#FFFFFF",
          400: "#E5E5E5",
          300: "#A3A3A3",
        },
        gold: {
          500: "#FFFFFF",
          400: "#E5E5E5",
        },
        slate: {
          100: "#FFFFFF",
          200: "#737373",
          300: "#CCCCCC",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Merriweather"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
