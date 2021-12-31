module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mdx'],
      },
    },
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'react/no-danger': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/forbid-p rop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-bind': 'off',
    'no-nested-ternary': 'off',
    'react/destructuring-assignment': 'off',
  },
};
