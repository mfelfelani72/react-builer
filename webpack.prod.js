const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// { for optimise

const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const WorkboxPlugin = require("workbox-webpack-plugin");

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
  plugins: [

    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      deleteOriginalAssets: 'keep-source-map',
      // deleteOriginalAssets: true,
      test: /\.(js|jsx|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {
        level: zlib.constants.Z_BEST_COMPRESSION,
      },
    }),

    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "report.html",
      openAnalyzer: true,
      statsFilename: "stats.json",
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
});
