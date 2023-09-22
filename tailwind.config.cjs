/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#00BFA6",
        secondary: "#00ab95",
        softBg: "#fafafa",
      },
    },
  },
  plugins: [],
};
