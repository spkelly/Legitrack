const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const parts = require('./webpack.parts');



const devConfig = {
  mode:"development"
};

module.exports = merge(devConfig,parts.server);