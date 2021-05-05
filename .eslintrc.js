module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:mocha/recommended',
    'plugin:chai-friendly/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  },
  plugins: [
    'mocha',
    'chai-friendly'
  ]
}
