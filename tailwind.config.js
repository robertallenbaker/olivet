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
	},
	plugins: [],
};
