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
				contactShape: "url('/images/contact/contactShape.svg')",
				aboutShape: "url('/images/about/abstractShape.svg')",
			},
			fontFamily: {
				text: ["Varela Round", "sans-serif"],
				headings: ["Raleway", "sans-serif"],
			},
			gridTemplateRows: {
				7: "repeat(7, minmax(0, 1fr))",
				8: "repeat(8, minmax(0, 1fr))",
			},
			gridRowStart: {
				8: "8",
			},
		},
	},
	plugins: [],
};
