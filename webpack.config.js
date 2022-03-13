// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UserPrintPlugin = require("./plugins/print-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),

    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    // 分离 css
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css", // 自定义样式 development 自动修改为：[name].[contenthash].css
      chunkFilename: "css/[name].[contenthash:6].css", // 供应商(vendor)样式
    }),
    new UserPrintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.less$/i,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                autoprefixer();
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["css-loader", "postcss-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: "file-loader",
              name: "[name][hash:4].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = (_, { mode }) => {
  config.mode = mode;
  return config;
};
