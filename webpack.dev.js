const { merge } = require("webpack-merge")

const common = require("./webpack.common.js")

module.exports = (env, argv) => {
  return merge(common, {
    // mode: "none",
    mode: "development",
    devtool: "source-map",
    devServer: {
      static: "./dist",
      historyApiFallback: true,
    },
  })
}
