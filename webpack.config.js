// { for initial

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const glob = require("glob");

//  for initial }

// { for optimise 

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
  devtool: 'source-map', //this dev mode
  // devtool: false, //this 
  
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    client: {
      logging: "info",
    },
    port: process.env.PORT,
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
        test: /\.css$/i,
        include: path.resolve(__dirname, "styles"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
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
    new MiniCssExtractPlugin(),

    new PurgeCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, "src/**/*.css"),
        path.join(__dirname, "src/**/*.js"),
        path.join(__dirname, "src/**/*.jsx"),
        path.join(__dirname, "public/index.html"),
      ]),
      safelist: {
        standard: [/^bg-/, /^text-/, /^xs:/,/^sm:/, /^md:/,/^bi:/, /^lg:/, /^xl:/, /^2xl:/,/^3xl:/],
      },
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(), 
      new CssMinimizerPlugin(),
    ],
    realContentHash: true,
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      maxSize: 250000
    },
  },
};
