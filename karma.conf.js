module.exports = function(config) {
  config.set({
      basePath: ''
    , frameworks: ['mocha']
    , files: [
          'build/build.js'
        , 'test/support/karma.js'
        , 'test/*.js'
      ]
    , exclude: []
    , reporters: ['progress']
    , port: 9876
    , colors: true
    , logLevel: config.LOG_INFO
    , autoWatch: false
    , browsers: ['PhantomJS']
    , captureTimeout: 60000
    , singleRun: true
  });
};
