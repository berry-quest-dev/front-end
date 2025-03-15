import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const isNextProject = process.env.PROJECT_TYPE === "next";

const eslintConfig = [
  eslintPluginReact.configs.recommended,
  ...(isNextProject ? compat.extends("next/core-web-vitals", "next/typescript") : []),
  eslintConfigPrettier,
  {
    ignores: ["node_modules/", "dist/", ".next/"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error"
    }
  }
];

export default eslintConfig;