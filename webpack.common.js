const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: "./src/index.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Production",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
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
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
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
