const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");

module.exports = {
  context: SRC,

  entry: {
    main: "./index.ts",
  },

  output: {
    filename: "index.min.js",
    path: DIST,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "favicon.png",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(SRC, "images"),
          to: path.resolve(DIST, "images"),
        },
      ],
    }),
  ],

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"],
  },

  module: {
    rules: [
      /****************
       * PRE-LOADERS
       *****************/
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: "source-map-loader",
      },
      {
        enforce: "pre",
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "tslint-loader",
      },

      /****************
       * LOADERS
       *****************/
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: "awesome-typescript-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:png|svg|jpg|ttf|gif)$/i,
        exclude: /node_modules/,
        use: "file-loader",
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: "html-loader",
      },
    ],
  },

  devtool: "cheap-module-source-map",
  devServer: {},
};
