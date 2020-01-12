module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/prettier',
    'eslint:recommended',
    'plugin:unicorn/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'unicorn/filename-case': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
