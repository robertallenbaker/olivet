/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				DEFAULT: "1130px",
			},
		},
		extend: {
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
			colors: {
				red: {
					DEFAULT: "#ED2024",
					dark: "#8E1315", // 40% darker
				},
				yellowGreen: {
					DEFAULT: "#8DC63F",
					dark: "#547726", // 40% darker
				},
				lightGreen: {
					DEFAULT: "#50BB7D",
					dark: "#307047", // 40% darker
				},
				orange: {
					DEFAULT: "#F26722",
					dark: "#913E14", // 40% darker
				},
				purple: {
					DEFAULT: "#AD4F9E",
					dark: "#682F5F", // 40% darker
				},
				blue: {
					DEFAULT: "#4660AC",
					dark: "#2A3967", // 40% darker
				},
				lightBlue: {
					DEFAULT: "#80ACDC",
					dark: "#4C6784", // 40% darker
				},
				magenta: {
					DEFAULT: "#d81964",
					dark: "#820F3C", // 40% darker
				},
				grey: {
					DEFAULT: "#D9D9D9",
					dark: "#828282", // 40% darker
				},
				darkGrey: {
					DEFAULT: "#6B6A6A",
					dark: "#404040", // 40% darker
				},
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
