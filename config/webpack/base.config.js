const path = require("path");

const workingDirectory = process.cwd();

module.exports = {
  context: path.resolve(workingDirectory, "src"),
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
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      assets: path.resolve(workingDirectory, "src", "assets"),
      components: path.resolve(workingDirectory, "src", "components"),
      constants: path.resolve(workingDirectory, "src", "constants"),
      types: path.resolve(workingDirectory, "src", "types"),
      utils: path.resolve(workingDirectory, "src", "utils"),
    },
  },
};
