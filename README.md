# @couds/eslint-config

Shared ESLint 10 flat config for React and Node.js projects with Prettier integration. These are the rules I use across my personal projects.

## Requirements

- ESLint 10+ (flat config format)
- ESM project — your `eslint.config.js` must use `import`/`export`

## Installation

```sh
npm install --save-dev @couds/eslint-config eslint @eslint/js
```

`eslint` and `@eslint/js` are peer dependencies that your project must provide. `typescript` is bundled automatically (required internally by
`@eslint-react`).

## Usage

### React

```js
// eslint.config.js
import reactConfig from '@couds/eslint-config/react';

export default [
  ...reactConfig,
  // project-specific overrides
];
```

### Node.js

```js
// eslint.config.js
import nodeConfig from '@couds/eslint-config/node';

export default [
  ...nodeConfig,
  // project-specific overrides
];
```

The default export (`@couds/eslint-config`) is an alias for the React config.

## What's included

### Both configs

- **`@eslint/js` recommended** — ESLint core rules baseline
- **`eslint-plugin-import-x` recommended** — import/export correctness (ESLint 10-native fork of `eslint-plugin-import`)
- **`eslint-plugin-prettier`** — runs Prettier as an ESLint rule (`prettier/prettier: error`)
- **`eslint-config-prettier`** — disables ESLint rules that conflict with Prettier formatting

### React only

- **`@eslint-react/eslint-plugin` recommended** — React and hooks correctness rules built for ESLint 10
- **`eslint-plugin-jsx-a11y` recommended** — accessibility rules for JSX
- Browser + Node globals, JSX parsing enabled

### Node only

- Node globals only, no JSX

Notable rule overrides shared by both: `arrow-body-style` is enforced (`always`); `no-console`, `max-len`, `no-underscore-dangle`,
`class-methods-use-this`, and several `import-x` style rules are disabled.

## Notes

- Flat config only — `.eslintrc.*` files are not supported
- The Airbnb config base and `react/function-component-definition` style rule were removed during the ESLint 10 migration
