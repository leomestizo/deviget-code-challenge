const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const HtmlRootPlugin = require("html-webpack-root-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpackMerge = require("webpack-merge");

const baseConfig = require("./base.config");

const workingDirectory = process.cwd();

module.exports = webpackMerge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(workingDirectory, "_redirects"),
        to: path.resolve(workingDirectory, "dist"),
      },
    ]),
    new HtmlPlugin({
      title: "Deviget code challenge",
    }),
    new HtmlRootPlugin("root"),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
});
