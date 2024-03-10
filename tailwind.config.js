// ES Module import syntax
import daisyUI from "daisyui";
import themes from "daisyui/src/theming/themes.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [daisyUI],
	daisyui: {
		themes: [
			{
				corporate: {
					...themes["corporate"],
					primary: "#010081",
				},
			},
		],
	},
};
