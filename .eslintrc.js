module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', 'unused-imports', 'sort-imports-es6-autofix', '@typescript-eslint', 'promise'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:promise/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	rules: {
		// https://github.com/sweepline/eslint-plugin-unused-imports#usage
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],

		// https://github.com/prettier/eslint-plugin-prettier#installation
		'prettier/prettier': 'error',

		// https://github.com/marudor/eslint-plugin-sort-imports-es6-autofix#usage
		'sort-imports-es6-autofix/sort-imports-es6': [
			2,
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
	},
};
