module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off'
  }
}
