import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-better-tailwindcss'
import { defineConfig } from 'eslint/config'
import eslintParserVue from 'vue-eslint-parser'

/*
  Following does't work with `antfu` config.
  [error] ConfigError: Config (unnamed): Key "extends": This appears to be in eslintrc format rather than flat config format.
 */
const twConfigFlatExtends = {
  files: ['**/*.vue'],
  // This way I can use all "recommended" rules from the plugin.
  // But still override single rule as needed. No need to spread rules, ESLint will handle merging.
  extends: [
    tailwindcss.configs.recommended,
  ],
  rules: {
    'better-tailwindcss/enforce-shorthand-classes': ['off'],
  },
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/styles.css',
    },
  },
  languageOptions: {
    parser: eslintParserVue,
  },
}
export default antfu({}, twConfigFlatExtends)

// However the same config works with ESLint `defineConfig`.
// export default defineConfig(twConfigFlatExtends)

/*
  But this works with `antfu` config.
  Notice no `extends` key, instead rules are spread directly.
 */
// const twConfigFlatWithPlugins = {
//   files: ['**/*.vue'],
//   plugins: {
//     'better-tailwindcss': tailwindcss,
//   },
//   rules: {
//     ...tailwindcss.configs.recommended.rules,
//     'better-tailwindcss/enforce-shorthand-classes': ['off'],
//   },
//   settings: {
//     'better-tailwindcss': {
//       entryPoint: 'src/styles.css',
//     },
//   },
// }
// export default antfu({}, twConfigFlatWithPlugins)
