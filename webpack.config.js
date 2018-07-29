const common = require('./config/webpack.common');
const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');
const merge = require('webpack-merge');

module.exports = mode =>{
  if(mode === 'production'){
    return merge(common,prodConfig);
  }
  else{
    return merge(common,devConfig);
  }
}