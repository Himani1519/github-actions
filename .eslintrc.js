/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        caseSensitive: false,
      },
    },
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    before: 'readonly',
    after: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
  },
  ignorePatterns: ['.github/**/*.yml', '**/.build', '**/build', '**/dist', '**/node_modules', '**/release', '**/lib','**/test/yaml-loader'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['header'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    "no-undef": "off",
//    'no-restricted-imports': [
//      'warn',
//      {
//        patterns: ['*'],
//        paths: ['*'],
//      },
//    ],

   'header/header': [
      2,
      'block',
          [
        '/*',
        'This program and the accompanying materials are',
        'made available under the terms of the Eclipse Public License v2.0 which accompanies',
        'this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html',
        '',
        'SPDX-License-Identifier: EPL-2.0',
        '',
        'Copyright Contributors to the Zowe Project.',
        '*/',
        '',
      ].join('\n'),
      2
    ]
  }
}
