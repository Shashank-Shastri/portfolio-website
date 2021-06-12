// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    env: {
      browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: [
      'plugin:vue/recommended',
      '@vue/eslint-config-prettier',
    ],
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    // add your custom rules here
    'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      "no-unused-vars": 0,
      "semi": 0,
      "indent": 0,
      "no-unreachable": 0,
      "no-inner-declarations": 0,
      "no-undef": 0,
      "no-useless-escape": 0,
      "no-eval": 0,
      "no-use-before-define": 0,
      "no-async-promise-executor": 0,
      "handle-callback-err": 0,
      "vue/max-attributes-per-line": 0,
      "vue/multiline-html-element-content-newline": 0,
      "vue/html-self-closing": 0,
      "vue/singleline-html-element-content-newline": 0,
      "vue/attributes-order": 0,
      "vue/order-in-components": 0,
      "vue/html-indent": 0,
      "vue/v-bind-style": 0,
      "vue/no-v-html": 0,
      "vue/require-prop-types": 0,
      "no-eq-null": 0
    }
  }
  