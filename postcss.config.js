module.exports = {
  syntax: "postcss-scss",
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true
      }
    }
  }
};
