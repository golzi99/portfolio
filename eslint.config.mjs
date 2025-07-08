import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import eslintPluginNext from '@next/eslint-plugin-next'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'next', 'plugin:prettier/recommended'),
]

const plugins = {
  '@next/next': eslintPluginNext,
  'react-hooks': eslintPluginReactHooks,
}

const Eslint = [
  ...eslintConfig,
  {
    ignores: ['**/node_modules/**', '.next', 'out', 'public'],
  },
  js.configs.recommended,
  {
    plugins: plugins, // Явное указание на плагин react-hooks
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]

export default Eslint
