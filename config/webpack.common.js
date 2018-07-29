const HTMLWebPackPlugin = require('html-webpack-plugin');
const CompressionPlugin  = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require('path');



const htmlPlugin = new HTMLWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  title: 'Legitrack'
});

const commonConfig = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:['babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use:[ MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          }
        }
      }
    ]
  },
  plugins: [

      htmlPlugin,
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename:  '[id].css' ,
      }),
      new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

module.exports = commonConfig;