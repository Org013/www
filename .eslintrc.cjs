module.exports = {
	root: true,
	extends: [
		'@antfu',
		'plugin:svelte/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
		{
			files: ['*.json', '*.json5', '*.jsonc'],
			parser: 'jsonc-eslint-parser',
		},
	],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/semi': ['error', 'always'],
		'max-depth': ['error', 3],
		'max-nested-callbacks': ['error', 3],
		'complexity': ['error', 2],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'jsonc/indent': ['error', 'tab'],
	},
};
