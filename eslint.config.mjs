import simpleImportSort from 'eslint-plugin-simple-import-sort'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: [
      './assets/**/*.css',
      './composables/**/*.{ts,tsx}',
      './components/**/*.{vue,ts,tsx}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './stores/**/*.ts',
      './server/**/*.ts',
      './nuxt.config.ts',
      './eslint.config.{mjs,js,cjs}',
      './app.vue',
      './error.vue',
      './tailwind.config.{ts,js}',
    ],
    rules: {
      'no-console': 'warn',
    },
  },
)
  .prepend(simpleImportSort.configs)
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  })
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/indent': ['warn', 2],
      '@stylistic/semi': 'off',
    },
  })
