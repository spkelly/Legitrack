const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const prodConfig = {
  optimization:{
    splitChunks:{
      chunks:"initial"
    },
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
}

module.exports = prodConfig;