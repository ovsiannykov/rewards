module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: [
		'@react-native',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'@feature-sliced',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/no-unstable-nested-components': 'off',
		'react-refresh/only-export-components': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/no-children-prop': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'react-native/no-inline-styles': 'off',
		'comma-dangle': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'import/no-internal-modules': 'off',
		'no-debugger': 'warn',
		'newline-before-return': 'warn',
		curly: 'warn',
		semi: 'off',
		'react/display-name': 'off',
		'no-console': 'warn',
	},
}
