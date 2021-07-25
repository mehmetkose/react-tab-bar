const webpack = require("webpack");
const path = require("path");

const config = {
  entry: {
    ReactTabBarDemo: [path.resolve(__dirname, "./src/ReactTabBarDemo.tsx")],
  },
  output: {
    path: path.resolve(__dirname, "./demo"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".mjs", ".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./demo",
    historyApiFallback: true,
    open: true,
  },
};

module.exports = config;
