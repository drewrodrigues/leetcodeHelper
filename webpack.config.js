const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    filename: "index.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "manifest.json", to: "." }],
    }),
  ],
};
