module.exports = {
  parser: "sugarss",
  plugins: [
    [
      "postcss-easy-import",
      {
        extensions: [".sss"],
      },
    ],
    [
      "postcss-preset-env",
      {
        browsers: ">0.2%",
        stage: 2,
        features: {
          "nesting-rules": true,
        },
      },
    ],
  ],
}
