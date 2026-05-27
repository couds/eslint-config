import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import base from './base.js';

export default [
  ...base,
  eslintReact.configs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
