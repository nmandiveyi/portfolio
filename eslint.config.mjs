import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
/** @type {import("eslint").Linter.Config[]} */
const nextCoreWebVitals = require('eslint-config-next/core-web-vitals')

const eslintConfig = [
  {
    ignores: [
      '**/.next/**',
      '**/node_modules/**',
      '**/out/**',
      'next-env.d.ts',
      'pnpm-lock.yaml',
      'dist/**',
    ],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default eslintConfig
