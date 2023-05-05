const path = require("path");

module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"],
    plugins: [],
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
