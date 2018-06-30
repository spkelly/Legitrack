const HTMLWebPackPlugin = require('html-webpack-plugin');
const CompressionPlugin  = require('compression-webpack-plugin')
const path = require('path');
// const CSSExtractWebpackPlugin = require('mini-css-extract-plugin');
const htmlPlugin = new HTMLWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html'
});

// const CSSExtractPlugin = new CSSExtractWebpackPlugin({
//   filename:'[name].css'
// }); 

// console.log(CSSExtractPlugin);

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },


  devServer: {
    historyApiFallback: true,
    port:8080,
    compress: true
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
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      }
    ]
  },
  plugins:[
    htmlPlugin,
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};