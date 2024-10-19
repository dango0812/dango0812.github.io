/** @type {import('postcss-load-config').Config} */

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {},
    "postcss-normalize": {
      allowDuplicates: false,
    },
  },
}
