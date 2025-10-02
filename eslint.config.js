// eslint.config.js at repo root
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  root: true,
  ignorePatterns: ['dist/', 'build/', 'node_modules/', 'eslint.config.js'],
  overrides: [
    // Backend (Node)
    {
      files: ['api/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './api/tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      env: {
        node: true,
        jest: true,
      },
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        complexity: ['warn', 4],
      },
    },
    // Frontend (React)
    {
      files: ['chit-chat-ui/**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './chit-chat-ui/tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      env: {
        browser: true,
        jest: true,
      },
      plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'react-refresh'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react-refresh/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        complexity: ['warn', 4],
      },
    },
  ],
};