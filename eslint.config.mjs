import { dirname } from "path";
import { fileURLToPath } from "url";

import react from "eslint-plugin-react"; // react 유용한 규칙 제공
import reactHooks from "eslint-plugin-react-hooks"; // react hooks 규칙 제공
import eslint from "@eslint/js"; // JavaScript와 관련된 기본 규칙들을 설정에 포함할 수 있도록 제공
import tsEslint from "typescript-eslint" // TypeScript 코드를 위한 ESLint 규칙을 제공 (코드 스타일과 일관성을 유지하고 오류를 방지)

import jsxA11Y from "eslint-plugin-jsx-a11y"; // 접근성 관련 규칙 제공 jsx 요소 검사 -> 개선 방향
import { FlatCompat } from "@eslint/eslintrc"; // ESLint 9 이상 버전의 새로운 Flat Config 스타일로 기존 설정을 관리할 수 있게 돕는 모듈
import stylisticJs from "@stylistic/eslint-plugin"; // 스타일 규칙을 제공 모듈

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
});


export default tsEslint.config(
  // https://typescript-eslint.io/users/configs
  tsEslint.configs.recommended,
  // https://eslint.style/packages/default
  tsEslint.configs.stylistic,
  tsEslint.configs.stylisticTypeChecked,
  // https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
  stylisticJs.configs.customize({
    arrowParens: true,
    semi: true,
  }),
  {
    ignores: [
      ".next",
      "node_modules"
    ],
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    settings: {
      react: {
        version: "detect",
      },
    }
  },
  {
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11Y,
      "@stylistic": stylisticJs
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11Y.configs.recommended.rules,
      "@stylistic/indent": ["error", 2],
      "@stylistic/arrow-parens": ["error"],
      "@stylistic/jsx-quotes": ["error"],
      "@stylistic/semi": ["error"],
      "@stylistic/keyword-spacing": ["error"],
      "@stylistic/space-before-blocks": ["error"],
      "@stylistic/space-infix-ops": ["error"],
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/quotes": ["error", "double",
        {
          allowTemplateLiterals: true,
        },
      ],
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/array-type": [
        "error",
        {
          "default": "array-simple"
        }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE", "PascalCase"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": "function",
          "format": ["camelCase", "PascalCase"]
        },
        {
          "selector": "interface",
          "format": ["PascalCase"]
        },
        {
          "selector": "typeAlias",
          "format": ["PascalCase"]
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "ignoreRestSiblings": true
        }
      ],
      "react-hooks/exhaustive-deps": "error",
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": [
        "error",
        {
          "ignore": ["css"]
        }
      ]
    },
  },
  ...compat.config({
    extends: ["next", "next/core-web-vitals", "next/typescript"]
  })
);