const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// { for optimise

const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// for optimise }

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
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
  plugins: [new BundleAnalyzerPlugin()],
});
