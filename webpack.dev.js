const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// { for optimise

const TerserPlugin = require("terser-webpack-plugin");

// for optimise }

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
            passes: 3,
          },
          mangle: true,
          format: {
            comments: false,
          },
        },
        extractComments: false,
        parallel: true,
      }),
      
    ],

  },
});
