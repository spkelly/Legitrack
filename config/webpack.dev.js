const common = require('./webpack.common');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');



const devConfig = {

};

module.exports = merge(devConfig,parts.server);