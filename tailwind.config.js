/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#F2F2F2',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
          950: '#0A0A0A',
        },
        brand: {
          50: '#E5F7FD',
          100: '#CCEFFB',
          200: '#99DFF7',
          300: '#66CFF3',
          400: '#33BFEF',
          500: '#00AEEF',
          600: '#008BBE',
          700: '#00688F',
          800: '#00465F',
          900: '#002330',
        },
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(10, 10, 10, 0.05), 0 10px 20px -2px rgba(10, 10, 10, 0.03)",
        medium: "0 4px 25px -5px rgba(10, 10, 10, 0.08), 0 10px 30px -5px rgba(10, 10, 10, 0.04)",
        strong: "0 10px 40px -10px rgba(10, 10, 10, 0.12), 0 20px 50px -10px rgba(10, 10, 10, 0.06)",
        brand: "0 4px 20px -4px rgba(0, 174, 239, 0.35)",
        dark: "0 4px 20px -4px rgba(10, 10, 10, 0.4)",
      },
    },
  },
  plugins: [],
};