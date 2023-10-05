/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#0097DD",
				secondary: "#00CBFF",
				thirdnary: "#024CE0",
				softBg: "#fafafa",
				navbar: "rgba(255, 255, 255, 0.95)",
			},
			backgroundImage: {
				contactBg: "url('/images/contact-bg.png')",
				contactBlury: "url('/images/ffflurry.svg')",
				ooorganize: "url('/images/ooorganize.svg')",
			},
			fontFamily: {
				text: ["Varela Round", "sans-serif"],
				headings: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
};
