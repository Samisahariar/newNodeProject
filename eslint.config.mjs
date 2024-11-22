import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
  {
    ignores: [".node_modules/*, dist, '**/*.js'"]
  },
  { files: [".ts"] },
  { languageOptions: { globals: globals.node } },
  
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
module.exports = [
  // Any other config imports go at the top
  eslintPluginPrettierRecommended,
];