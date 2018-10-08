module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [
      'error',
      'never'
    ],
    "linebreak-style": 0,
    "comma-dangle": ["error", "never"],
    "eol-last": 0,
    "no-trailing-spaces": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "indent": 0,
    "no-unused-vars": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
