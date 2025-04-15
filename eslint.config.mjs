// node
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
// eslint
import js from "@eslint/js";
import ts from "typescript-eslint";
import prettierConfig from "eslint-plugin-prettier";

import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: _dirname,
  resolvePluginsRelativeTo: _dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const patchedConfig = fixupConfigRules([
  ...compat.extends("next", "next/core-web-vitals", "prettier")
]);

const config = [
  ...patchedConfig,
  ...ts.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [".next", "node_modules"],
    settings: {
      plugins: {
        prettierConfig
      },
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parser: ts.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
				  jsx: true
				}
      }
    }
  },
  {
    rules: {
      "no-var": "error", // var 사용 금지
      "@typescript-eslint/no-explicit-any": "error", // any type 에러
      "@typescript-eslint/no-empty-object-type": "error", // 빈 객체 사용 에러
      curly: ["error", "all"], // 모든 조건문(if, else, for 등)에 중괄호({}) 사용
      eqeqeq: ["error", "always"], // == 대신 ===를 사용
      "@typescript-eslint/no-inferrable-types": "warn", // 타입 추론이 가능한 경우 타입을 명시하지 않도록
      "@typescript-eslint/no-empty-function": "error", // 빈 함수 사용 에러
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }], // 배열 타입을 간단하게 사용
      "@typescript-eslint/naming-convention": [ // 일관된 이름 규칙
        "error",
        { format: ["camelCase", "UPPER_CASE", "PascalCase"], selector: "variable", leadingUnderscore: "allow" },
        { format: ["camelCase", "PascalCase"], selector: "function" },
        { format: ["PascalCase"], selector: "interface" },
        { format: ["PascalCase"], selector: "typeAlias" },
      ],
      "no-unused-vars": "off", // 아래 typescript 로 검사하므로 충돌하지 않도록 설정 해제
      "@typescript-eslint/no-unused-vars": "error", // 사용하지 않는 변수는 경고
    }
  }
]

export default config;