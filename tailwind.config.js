/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          500: "#EA580C",
          600: "#C2410C",
          700: "#9A3412",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15,23,42,0.08)",
      },
    },
  },
  plugins: [],
}

