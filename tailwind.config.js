module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"dark-body": "#121212",
				accent: "#00dd8d",
			},
			fontFamily: {
				sans: ["Fira Sans", "sans-serif"],
			},
			height: () => ({
				"screen-10vh": "calc(100vh / 10)",
				"screen-90vh": "calc(100vh * 0.9)",
				"screen-80vh": "calcl(100vh * 0.8)",
			}),
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecorationColor: theme("colors.accent"),
							textDecorationThickness: "3px",
						},
						"a:hover": {
							backgroundColor: theme("colors.accent"),
							color: theme("colors.white"),
						},
					},
				},
				dark: {
					css: {
						color: theme("colors.gray.400"),
						'[class~="lead"]': {
							color: theme("colors.gray.300"),
						},
						a: {
							color: theme("colors.white"),
						},
						"a:hover": {
							backgroundColor: theme("colors.accent"),
							color: theme("colors.black"),
						},
						strong: {
							color: theme("colors.white"),
						},
						"ol > li::before": {
							color: theme("colors.gray.400"),
						},
						"ul > li::before": {
							backgroundColor: theme("colors.gray.600"),
						},
						hr: {
							borderColor: theme("colors.gray.200"),
						},
						blockquote: {
							color: theme("colors.gray.200"),
							borderLeftColor: theme("colors.gray.600"),
						},
						h1: {
							color: theme("colors.white"),
						},
						h2: {
							color: theme("colors.white"),
						},
						h3: {
							color: theme("colors.white"),
						},
						h4: {
							color: theme("colors.white"),
						},
						"figure figcaption": {
							color: theme("colors.gray.400"),
						},

						"a code": {
							color: theme("colors.white"),
						},
						thead: {
							color: theme("colors.white"),
							borderBottomColor: theme("colors.gray.400"),
						},
						"tbody tr": {
							borderBottomColor: theme("colors.gray.600"),
						},
					},
				},
			}),
		},
	},
	variants: {
		extend: {
			typography: ["dark"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
