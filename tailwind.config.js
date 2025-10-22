/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				red: "#ED2024",
				yellowGreen: "#8DC63F",
				lightGreen: "#50BB7D",
				orange: "#F26722",
				purple: "#AD4F9E",
				blue: "#4660AC",
				lightBlue: "#80ACDC",
				magenta: "#d81964",
				grey: "#D9D9D9",
				darkGrey: "#6B6A6A",
			},
		},
		// Bootstrap-like breakpoints (min-width)
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
			// max-* variants for convenience (e.g. 'max-lg:hidden' -> max-width: 991px)
			"max-sm": { max: "575px" },
			"max-md": { max: "767px" },
			"max-lg": { max: "991px" },
			"max-xl": { max: "1199px" },
			"max-xxl": { max: "1399px" },
		},
	},
	plugins: [],
};
