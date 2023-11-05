module.exports = {
  // ...other ESLint configuration...

  rules: {
    // ...other ESLint rules...

    'custom/header-check': 'error', // Enable the custom rule
  },

  overrides: [
    {
      files: ['*.js'], // Target JavaScript files
      rules: {
        'custom/header-check': 'error', // Enable the custom rule for these files
      },
    },
  ],

  plugins: ['custom'], // Enable your custom rules
  settings: {
    custom: {
      headerPattern: /\/\*\*\n([\s\*]*[^*]+)*\n([\s\*]*\*\/\n){1}[\s\*]*SPDX-License-Identifier: EPL-2\.0\n[\s\*]*Copyright Contributors to the Zowe Project\.\n\*\//,
    },
  },
};
