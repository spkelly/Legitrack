


const prodConfig = {

  mode:'production',
  // stats:{
  //   colors: true,
  //   hash: false,
  //   version: false,
  //   timings: false,
  //   assets: true,
  //   chunks: false,
  //   modules: false,
  //   reasons: false,
  //   children: false,
  //   source: false,
  //   errors: false,
  //   errorDetails: false,
  //   warnings: false,
  //   publicPath: false
  // },
  optimization:{
    splitChunks:{
      chunks:'initial'
    },
    minimizer: [
    ]
  },
};

module.exports = prodConfig;