module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:vue/vue3-recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/ignore': ['node_modules'],
  },
  rules: {
    // ------------------ JS/TS ------------------
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': ['warn', { allow: ['error', 'debug'] }],
    'no-case-declarations': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-var': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'func-call-spacing': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'none', requireLast: false },
      singleline: { delimiter: 'comma', requireLast: false },
    }],
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides:
          {
            arrow: {
              before: true,
              after: true,
            },
          },
      },
    ],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'prefer-promise-reject-errors': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // ------------------ Import ------------------
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/namespace': 'off',

    // ------------------ Vue ------------------
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
