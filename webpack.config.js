// { for initial

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const glob = require("glob");

//  for initial }

// { for optimise

const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

// for optimise }

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mode: "production", // this

  entry: "./src/index.js",
  stats: {
    assets: true,
    modules: true,
    timings: true,
    version: true,
    warnings: true,
    errors: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  devtool: "source-map", //this dev mode
  // devtool: false, //this prod mode

  parallelism: 8, // It usually depends on the number of CPU cores in your computer

  performance: {
    // hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    // assetFilter: function (assetFilename) {
    //   return assetFilename.endsWith(".js");
    // },
  },

  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "styles"),
        // use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        use: ["css-loader", "postcss-loader"],

        // test: /\.css$/,
        // use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      scriptLoading: "defer",
    }),
    new Dotenv({
      path: ".env",
      safe: true,
      systemvars: true,
    }),

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

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    new PurgeCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, "src/**/*.css"),
        path.join(__dirname, "src/**/*.js"),
        path.join(__dirname, "src/**/*.jsx"),
        path.join(__dirname, "public/index.html"),
      ]),
      safelist: {
        standard: [
          /^bg-/,
          /^text-/,
          /^xs:/,
          /^sm:/,
          /^md:/,
          /^bi:/,
          /^lg:/,
          /^xl:/,
          /^2xl:/,
          /^3xl:/,
        ],
      },
    }),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false, // this dev mode
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
      new CssMinimizerPlugin(),
    ],
    realContentHash: true,
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      maxSize: 250000,
    },
    usedExports: true,
    removeAvailableModules: true,
  },
};
