// eslint.config.cjs at repo root
const { resolve } = require('path');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');

module.exports = [
  { ignores: ['dist/', 'build/', 'node_modules/', 'api/dist/**', 'chit-chat-ui/dist/**'] },

  // Backend (Node) TypeScript
  {
    files: ['api/**/*.ts'],
    ignores: ['dist/**', 'node_modules/**', 'api/dist/**', 'chit-chat-ui/dist/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: resolve(__dirname, './api/tsconfig.json'),
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      complexity: ['warn', 4],
    },
  },

  // Frontend (React) TypeScript
  {
    files: ['chit-chat-ui/**/*.{ts,tsx}'],
    ignores: ['dist/**', 'node_modules/**', 'api/dist/**', 'chit-chat-ui/dist/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: resolve(__dirname, './chit-chat-ui/tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      complexity: ['warn', 4],
    },
  },

  // Test files (TypeScript)
  {
    files: ['tests/e2e/**/*.ts', 'tests/e2e/**/*.tsx', '**/*.spec.ts', '**/*.test.ts'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];