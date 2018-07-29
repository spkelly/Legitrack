const common = require('./webpack.common');
const merge = require('webpack-merge');



const devConfig = {
  devServer: {
    historyApiFallback: true,
    port:8080,
    compress: true
  },
}

module.exports = devConfig;