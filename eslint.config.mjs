import simpleImportSort from "eslint-plugin-simple-import-sort";
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import prettierPlug from "eslint-plugin-prettier/recommended";
import tailwindPlug from "eslint-plugin-tailwindcss";

export default createConfigForNuxt({
  files: [
    "./assets/**/*.css",
    "./composables/**/*.{ts,tsx}",
    "./components/**/*.{vue,ts,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./stores/**/*.ts",
    "./server/**/*.ts",
    "./nuxt.config.ts",
    "./eslint.config.{mjs,js,cjs}",
    "./app.vue",
    "./error.vue",
    "./tailwind.config.{ts,js}",
  ],
  rules: {
    "no-console": "warn",
  },
})
  .prepend(
    prettierPlug,
    simpleImportSort.configs,
    tailwindPlug.configs["flat/recommended"],
  )
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
    },
  })
  .overrideRules({
    "prettier/prettier": "warn",
    "simple-import-sort": "error",
  });
