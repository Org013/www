/**
 * This will be in the future a independent eslint-config package. (Project).
 * [Readable project](https://github.com/orgs/Org013/projects/1)
 */

module.exports = {
	root: true,
	extends: [
		'@antfu',
		'plugin:svelte/recommended',
		'./src/.eslintrc-auto-import.json',
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
			rules: {
				'jsonc/array-bracket-spacing': ['error', 'never'],
				'jsonc/comma-dangle': ['error', 'never'],
				'jsonc/comma-style': ['error', 'last'],
				'jsonc/indent': ['error', 'tab'],
				'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
				'jsonc/no-octal-escape': 'error',
				'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
				'jsonc/object-curly-spacing': ['error', 'always'],
				'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
			},
		},
		{
			files: ['*.yaml', '*.yml'],
			parser: 'yaml-eslint-parser',
			rules: {
				'spaced-comment': 'off',
			},
		},
		{
			files: ['package.json'],
			parser: 'jsonc-eslint-parser',
			rules: {
				'jsonc/sort-keys': [
					'error',
					{
						pathPattern: '^$',
						order: [
							'publisher',
							'name',
							'displayName',
							'type',
							'version',
							'private',
							'packageManager',
							'description',
							'author',
							'license',
							'funding',
							'homepage',
							'repository',
							'bugs',
							'keywords',
							'categories',
							'sideEffects',
							'exports',
							'main',
							'module',
							'unpkg',
							'jsdelivr',
							'types',
							'typesVersions',
							'bin',
							'icon',
							'files',
							'engines',
							'activationEvents',
							'contributes',
							'scripts',
							'peerDependencies',
							'peerDependenciesMeta',
							'dependencies',
							'optionalDependencies',
							'devDependencies',
							'pnpm',
							'overrides',
							'resolutions',
							'husky',
							'simple-git-hooks',
							'lint-staged',
							'eslintConfig',
						],
					},
					{
						pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
						order: { type: 'asc' },
					},
					{
						pathPattern: '^exports.*$',
						order: [
							'types',
							'require',
							'import',
						],
					},
				],
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'import/no-duplicates': 'off',
			},
		},
		{
			files: ['*.js', '*.cjs', '*.jsx'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/no-require-imports': 'off',
			},
		},
		{
			files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
			rules: {
				'no-void': ['error', { allowAsStatement: true }],
			},
		},
		{
			files: ['scripts/**/*.*', 'cli.*'],
			rules: {
				'no-console': 'off',
			},
		},
		{
			files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
			rules: {
				'no-unused-expressions': 'off',
				'no-only-tests/no-only-tests': 'error',
			},
		},
		{
			// Code blocks in markdown file
			files: ['**/*.md/*.*'],
			rules: {
				'@typescript-eslint/no-redeclare': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/comma-dangle': 'off',
				'@typescript-eslint/consistent-type-imports': 'off',
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/no-require-imports': 'off',
				'import/no-unresolved': 'off',
				'unused-imports/no-unused-imports': 'off',
				'unused-imports/no-unused-vars': 'off',
				'no-alert': 'off',
				'no-console': 'off',
				'no-restricted-imports': 'off',
				'no-undef': 'off',
				'no-unused-expressions': 'off',
				'no-unused-vars': 'off',
				'antfu/no-cjs-exports': 'off',
				'antfu/no-ts-export-equal': 'off',
			},
		},
	],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/semi': ['error', 'always'],
		'max-depth': ['error', 3],
		'max-nested-callbacks': ['error', 3],
		'complexity': ['error', 4],
		'no-tabs': ['error', { allowIndentationTabs: true }],
	},
};
