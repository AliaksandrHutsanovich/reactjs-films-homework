module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jest',
  ],
  rules: {
    'getter-return': 2,
    'no-console': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-inner-declarations': 2,
    'no-irregular-whitespace': 2,
    curly: 2,
    'dot-location': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parser: 'babel-eslint',
};
