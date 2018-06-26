const HTMLWebPackPlugin = require('html-webpack-plugin');
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
  'entry': './src/index.js',
  
  'output': {
    'path': path.resolve(__dirname, 'dist'),
    'filename': 'bundle.js',
    'publicPath': '/'
  },


  'devServer': {
    'historyApiFallback': true,
  },
  
  'module':{
    'rules':[
      {
        'test':/\.js$/,
        'exclude': /node_modules/,
        'use':{
          'loader': 'babel-loader'
        }
      },
      {
        'test': /\.scss$/,
        'exclude': /node_modules/,
        'use':[
          'style-loader','css-loader','sass-loader'
        ]
      }
    ]
  },
  plugins:[
    htmlPlugin
  ]
};