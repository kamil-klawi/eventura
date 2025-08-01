import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier: require("eslint-plugin-prettier"),
      "@tanstack/query": require("@tanstack/eslint-plugin-query"),
    },
    rules: {
      "prettier/prettier": "error",
    },
    extends: [require.resolve("eslint-config-prettier")],
  },
];

export default eslintConfig;
