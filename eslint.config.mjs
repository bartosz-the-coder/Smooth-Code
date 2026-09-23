import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { configs } from 'typescript-eslint';

// Must match the glob eslint-config-next registers the `import` plugin under:
// flat config resolves rules per file, and refuses to let us register a second
// copy of the plugin ourselves.
const SOURCE_FILES = ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'];

const importPreset = ({ rules, settings }) => ({
  files: SOURCE_FILES,
  rules,
  ...(settings && { settings }),
});

export default defineConfig(
  globalIgnores([
    '.next/**',
    '.yarn/**',
    '.vscode/**',
    '.worktrees/**',
    'public/**',
    'out/**',
  ]),
  ...nextCoreWebVitals,
  importPreset(importPlugin.flatConfigs.recommended),
  importPreset(importPlugin.flatConfigs.typescript),
  {
    files: SOURCE_FILES,
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            ['sibling', 'index'],
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc',
          },
          pathGroups: [
            {
              pattern: 'next',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'next/*',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react*',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: './*.module.css',
              group: 'object',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'off',
    },
  },
  prettierRecommended
);
