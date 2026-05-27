import js from '@eslint/js';
import * as importXPlugin from 'eslint-plugin-import-x';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  importXPlugin.flatConfigs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
    },
    rules: {
      'prettier/prettier': 2,
      'no-console': 0,
      'import-x/no-extraneous-dependencies': 0,
      'global-require': 0,
      'import-x/prefer-default-export': 0,
      'max-len': 0,
      'no-underscore-dangle': 0,
      'class-methods-use-this': 0,
      'arrow-body-style': [2, 'always'],
      'import-x/no-dynamic-require': 0,
    },
  },
  prettierConfig,
];
