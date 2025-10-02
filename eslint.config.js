// eslint.config.js at repo root
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  { ignores: ['dist/', 'build/', 'node_modules/', 'api/dist/**', 'chit-chat-ui/dist/**']
   },

  // Backend (Node) TypeScript
  {
    files: ['api/**/*.ts'],
    ignores: ['dist/**', 'node_modules/**', 'api/dist/**', 'chit-chat-ui/dist/**'],
    languageOptions: {
      parser: tsParser, // ✅ import parser directly
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
      parser: tsParser, // ✅ import parser directly
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
        project: resolve(__dirname, './tsconfig.json'), // or separate test tsconfig if you have one
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
