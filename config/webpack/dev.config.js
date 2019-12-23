const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const webpackMerge = require("webpack-merge");

const baseConfig = require("./base.config");

const workingDirectory = process.cwd();
const publicPath = path.resolve(workingDirectory, "public");

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
  plugins: [
    new HtmlPlugin({
      template: path.resolve(publicPath, "index.html"),
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    hot: true,
    port: 5000,
    publicPath: "/",
  },
});
