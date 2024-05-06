module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:solid/typescript'],
    plugins: ['@typescript-eslint', 'solid'],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['**/*.md', 'dist', '.eslintrc.cjs'],
    plugins: ['react-refresh'],
    rules: {
        '@next/next/no-img-element': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        'solid/no-innerhtml': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    }
}
