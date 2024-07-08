/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'alert-info-bg': '#ebf8ff',
        'alert-info-border': '#bee3f8',
        'alert-info-text': '#3182ce',
        'alert-success-bg': '#f0fff4',
        'alert-success-border': '#c6f6d5',
        'alert-success-text': '#38a169',
        'alert-warning-bg': '#fffff0',
        'alert-warning-border': '#faf089',
        'alert-warning-text': '#d69e2e',
        'alert-error-bg': '#fff5f5',
        'alert-error-border': '#fed7d7',
        'alert-error-text': '#e53e3e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
