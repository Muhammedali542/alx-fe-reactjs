/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Paths to remove unused styles in production
  darkMode: false, // Options: 'media' (prefers-color-scheme), 'class', or false for no dark mode
  theme: {
    extend: {}, // Extend or customize the default theme
  },
  variants: {
    extend: {}, // Extend or add variants for existing utilities
  },
  plugins: [], // Add Tailwind CSS plugins here if needed
};
