const path = require("path");
const webpackMerge = require("webpack-merge");

const baseConfig = require("./base.config");

const workingDirectory = process.cwd();

module.exports = webpackMerge(baseConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(workingDirectory, "public"),
    historyApiFallback: true,
    hot: true,
    port: 5000,
    publicPath: "/dist/",
  },
});
