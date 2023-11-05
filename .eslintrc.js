/*
  This program and the accompanying materials are
*/

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  ignorePatterns: ['.github/**/*.yml', '**/.build', '**/build', '**/dist', '**/node_modules', '**/release', '**/lib'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/electron',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['header'],
  rules: {
    'header/header': [
      2,         // Error level
      'block',   // Location
     [
        '\n  This program and the accompanying materials are\n'
     ],
      2,        // Comments
    ],
  },
}
