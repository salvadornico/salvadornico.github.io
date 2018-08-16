const path = require("path")
const PrerenderSPAPlugin = require("prerender-spa-plugin")

module.exports = {
	configureWebpack: {
		plugins: [
			new PrerenderSPAPlugin({
				staticDir: path.join(__dirname, "dist"),
				routes: ["/", "/skills"],
			}),
		],
	},
	chainWebpack: config => {
		config.module
			.rule("vue")
			.use("vue-loader")
			.tap(options => {
				options.loaders.stylus = options.loaders.stylus.concat({
					loader: "stylus-resources-loader",
					options: {
						resources: path.resolve("./src/assets/_base.styl"),
					},
				})
				return options
			})
	},
}
