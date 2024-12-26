import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const filename = fileURLToPath(import.meta.url)
const dirName = dirname(filename)

const compat = new FlatCompat({
  baseDirectory: dirName,
})

const eslintConfig = [
  ...compat.config({
    ignorePatterns: ['node_modules/'], // eslint 미적용될 폴더나 파일 명시
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'airbnb', // Airbnb 설정 추가
      'airbnb/hooks', // Airbnb의 React hooks 스타일 규칙

      // Prettier와 충돌을 방지하려면 eslint-config-prettier를 추가
      'plugin:prettier/recommended', // Prettier 설정
      'prettier',
      // TypeScript용 설정
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // react 17부턴 import 필요 없음
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }], // 경고표시, 파일 확장자를 .ts나 .tsx 모두 허용
      'no-useless-catch': 'off', // 불필요한 catch 못쓰게 하는 기능 off
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  }),
]

export default eslintConfig
