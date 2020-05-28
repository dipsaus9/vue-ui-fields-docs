import pkg from './package';
import config from './config/latest';

if (config.env === 'development') {
	process.env.DEBUG = 'nuxt:*';
}

export default {
	mode: 'universal',
	env: {
		environment: config.env || 'production',
	},

	/*
   ** Headers of the page
   */
	head: {
		title: 'UI Fields documenatation',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	/*
   ** Customize the progress bar color
   */
	loading: {
		color: '#2c3e50', //,
	},

	/*
   ** Plugins to load before mounting the App
   */
	plugins: ['~plugins/ui-fields.client.js', '~plugins/globals.js'],

	/*
   ** Nuxt.js modules
   */
	modules: ['nuxt-rfg-icon', '@nuxtjs/axios', '@nuxtjs/style-resources'],

	/*
   ** Axios module configuration
   */
	axios: {
		retry: {
			retries: 3,
		},
		baseURL: config.api,
	},
	styleResources: {
		scss: [
			'~/assets/scss/color/_index.scss',
			'~/assets/scss/variables/_index.scss',
			'@node_modules/matise-gryd/gryd-index.scss',
		],
	},
	generate: {
		fallback: true,
	},
	/*
   ** Build configuration
   */
	build: {
		/*
     ** Build plugins
     */
		plugins: [],

		// babel: {
		// 	babelrc: true,
		// 	cacheDirectory: undefined
		// },

		transpile: [], // Name of NPM packages to be transpiled

		/*
     ** You can extend webpack config here
     */
		extend(config, ctx) {
			// Define toolset shortcut
			config.resolve.alias['~tools'] = 'assets/scss/tools.scss';
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
				});
			}
		},
	},

	/*
   ** Global CSS
   */
	css: [
		{
			src: '~assets/scss/app.scss',
			lang: 'scss',
		},
		{
			src: 'vue-code-highlight/themes/prism-okaidia.css',
			lang: 'css',
		},
	],
};
