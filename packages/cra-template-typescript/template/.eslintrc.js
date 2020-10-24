module.exports = {
  plugins: [
    "@typescript-eslint",
    "jest"
  ],
  env: {
    browser: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
