/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
