const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// { for optimise

const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const TerserPlugin = require("terser-webpack-plugin");

const UnregisterServiceWorker = require('./webpack-files/service-worker/unregister/UnregisterServiceWorker.js');

// for optimise }

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    
    new UnregisterServiceWorker(),
  
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|jsx|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {
        level: zlib.constants.Z_BEST_COMPRESSION,
      },
    }),

  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
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
