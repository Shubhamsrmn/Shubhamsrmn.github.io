/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "var(--white-primary)",
        primaryPink: "var(--pink-primary)",
        primaryLightPink: "var(--light-pink-primary)",
        primaryTextGray: "var(--gray-primary)",
        primaryTextBlack: "var(--black-primary)",
      },
      fontFamily: {
        urbanist: ['"Urbanist"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
