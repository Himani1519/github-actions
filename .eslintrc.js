/*
 This program and the accompanying materials are made available under the terms of the
 Eclipse Public License v2.0 which accompanies this distribution, and is available at
 https://www.eclipse.org/legal/epl-v20.html

 SPDX-License-Identifier: EPL-2.0
 
 Copyright Contributors to the Zowe Project.
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
      'error',
      {
        pattern: /^\s*\/\*{2}\n(?:\s+\w+[^\n]*\n)+\s+\*\/\n\s*SPDX-License-Identifier: EPL-2\.0\n\s*Copyright Contributors to the Zowe Project\.\n\s*\*\/$/,
        comments: 2,  // The number of comments to check
      },
    ],
  },
}
