/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--button-primary)',
          hover: 'var(--button-primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--button-secondary)',
          hover: 'var(--button-secondary-hover)',
        },
      },
    },
  },
  plugins: [],
}
