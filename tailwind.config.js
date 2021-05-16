module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Josefin Sans", "Helvetica"],
			},
			height: () => ({
				"screen-10vh": "calc(100vh / 10)",
				"screen-90vh": "calc(100vh * 0.9)",
				"screen-80vh": "calcl(100vh * 0.8)",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
