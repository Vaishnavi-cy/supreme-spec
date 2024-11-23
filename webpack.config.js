const webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".feature"],
  },
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: "@badeball/cypress-cucumber-preprocessor/webpack",
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // or `ts-loader` if you're using TypeScript
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};