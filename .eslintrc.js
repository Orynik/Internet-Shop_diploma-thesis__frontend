module.exports = {
	root: true,
	env: {
		node: true,
		jquery: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard',
		'prettier'
	],
	parserOptions: {
		parser: "@typescript-eslint/parser"
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names': 'warn'
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				mocha: true
			}
		}
	],
	plugins: [
		'prettier'
	],
}
