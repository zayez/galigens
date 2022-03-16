module.exports = {
  parser: "sugarss",
  plugins: [
    [
      "postcss-preset-env",
      {
        browsers: ">0.2%",
        stage: 3,
        features: {
          "nesting-rules": true,
        },
      },
    ],
  ],
}
