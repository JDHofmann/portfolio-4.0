export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: true,

	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "JD Brewer-Hofmann || Freelance Web Developer",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content:
					"Web developer and musician. Since graduating Flatiron School's software engineering programming I have been working for ninety6 - Progressive's in-house creative agency. I enjoy building visually striking websites that keep accessibility in mind.",
			},
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/Favicon-2022.png" },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/css/main.css",
		// SCSS file in the project
		"~/assets/css/main.scss",
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/style-resources", "@nuxtjs/google-fonts"],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// "@nuxtjs/style-resources",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: "/",
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	// mode: "universal",
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/nuxt/image/upload/",
		},
	},
	styleResources: {
		scss: [
			"./assets/vars/*.scss",
			"./assets/css/_colors.scss", // use underscore "_" & also file extension ".scss"
		],
	},
	googleFonts: {
		// download: true,
		families: {
			// "Abril Fatface": true,
			"Open Sans": [300, 400, 600, 700],
			Chivo: [300, 400, 700],
			"Poiret One": true,
			"Poller One": [400],
			// Monton: true,
			Comfortaa: [300, 400, 600, 700, 900],
			Raleway: {
				wght: [100, 400],
				ital: [100],
			},
			"Yeseva One": [400],
		},
	},
};
