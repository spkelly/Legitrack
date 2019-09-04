module.exports = {
  moduleNameMapper: {
    '\\.module.css$': require.resolve('identity-obj-proxy'),
    '\\.css$': require.resolve('./test/style-mock')
  },
  setupFiles:['jest-canvas-mock'],
  setupFilesAfterEnv:[
    require.resolve('./test/setup-test-framework'),
    require.resolve('./test/setupEnzyme')
  ] 
}