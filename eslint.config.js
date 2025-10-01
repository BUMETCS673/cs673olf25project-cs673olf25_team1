// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default [
  globalIgnores(['dist']),
  js.configs.recommended, 
  ...tseslint.configs.recommended, 
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn', // disables the "any" rule
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      complexity: ['warn', 4]
    },
  }
]