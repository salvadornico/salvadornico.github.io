// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		"parser": "babel-eslint",
		"ecmaVersion": 2017,
		sourceType: "module"
	},
	env: {
		browser: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended"
	],
	// required to lint *.vue files
	plugins: [
		"html"
	],
	"rules": {
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"arrow-parens": 0,
		"generator-star-spacing": 0,
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"linebreak-style": ["warn", "unix"],
		"no-undef": "off"
	}
}
