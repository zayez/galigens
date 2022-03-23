const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  experiments: {
    topLevelAwait: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Galigens",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.sss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: true } },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-syntax-top-level-await",
            "@babel/plugin-transform-runtime",
          ],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "defaults",
              },
            ],
            "@babel/preset-react",
          ],
        },
        exclude: /node_modules/,
      },
    ],
  },
}
