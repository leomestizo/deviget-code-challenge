const path = require("path");

const workingDirectory = process.cwd();
const srcPath = path.resolve(workingDirectory, "src");

module.exports = {
  context: srcPath,
  entry: "./index.jsx",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      assets: path.resolve(srcPath, "assets"),
      components: path.resolve(srcPath, "components"),
      constants: path.resolve(srcPath, "constants"),
      types: path.resolve(srcPath, "types"),
      utils: path.resolve(srcPath, "utils"),
    },
  },
};
