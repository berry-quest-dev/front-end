import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import eslintConfigNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    eslintPluginReact.configs.recommended,
    eslintConfigNext,
    eslintConfigPrettier,
    
    {
      ignores: [
        "node_modules/",
        "dist/",
        ".next/",
        "packages/styles/_reset.scss",
        "apps/**/node_modules/"
        ],

      rules: {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": "error"
      }
    }
  ];
  
  export default eslintConfig;
  