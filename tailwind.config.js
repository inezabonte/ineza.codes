module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Josefin Sans", "Helvetica"],
			},
			height: (theme) => ({
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
