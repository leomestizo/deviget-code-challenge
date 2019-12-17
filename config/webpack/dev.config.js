const path = require("path");
const webpackMerge = require("webpack-merge");

const baseConfig = require("./base.config");

const workingDirectory = process.cwd();

module.exports = webpackMerge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(workingDirectory, "public"),
    historyApiFallback: true,
    hot: true,
    port: 5000,
    publicPath: "/dist/",
  },
});
