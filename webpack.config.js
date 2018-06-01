const HTMLWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HTMLWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
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
          {
            loader: 'style-loader'
          },
          {
            loader: 'css=loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins:[htmlPlugin]
};