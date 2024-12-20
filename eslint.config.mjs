import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript",'airbnb', // Airbnb의 JavaScript 스타일 규칙
    'airbnb/hooks', // Airbnb의 React hooks 스타일 규칙
    
    // Prettier와 충돌을 방지하려면 eslint-config-prettier를 추가
    'plugin:prettier/recommended', // Prettier 설정
    
    // TypeScript용 설정
    'plugin:@typescript-eslint/recommended') // TypeScript 관련 규칙),
    // Airbnb 설정 추가
    
];

export default eslintConfig;
