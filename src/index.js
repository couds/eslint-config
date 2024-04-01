module.exports = {
  extends: ['airbnb', 'plugin:react-hooks/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2022,
  },
  globals: {
    window: true,
    document: true,
  },
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  plugins: ['prettier', 'import'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 0,
    'prettier/prettier': 2,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'arrow-body-style': [2, 'always'],
    'import/no-dynamic-require': 0,
  },
};
