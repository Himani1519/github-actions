module.exports = {
  // ...other ESLint configuration...

  rules: {
    // ...other ESLint rules...

    // Enforce a specific header format using a custom rule
    'header/header-format': ['error', '/\\*\\*\\s+This program and the accompanying materials are\\n\\s+made available under the terms of the Eclipse Public License v2.0 which accompanies\\n\\s+this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html\\n\\n\\s+SPDX-License-Identifier: EPL-2.0\\n\\n\\s+Copyright Contributors to the Zowe Project\\.\\s+\\*/'],
  },
};
