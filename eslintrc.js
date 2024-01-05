module.exports = {
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      node: true,
    },
    rules: {
      'linebreak-style': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'no-console': 'off', // ou ajuste conforme necessário
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }