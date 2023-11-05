module.exports = {
  // ... other ESLint configuration ...

  // Define a custom rule for checking the license header
  rules: {
    'custom/license-header': ['error'],
  },

  // Register a custom rule handler
  overrides: [
    {
      files: ['*.js'], // Apply this rule to JavaScript files
      rules: {
        'custom/license-header': [
          'error',
          {
            header: `
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
`.trim(), // Define the expected license header
          },
        ],
      },
    },
  ],
};
