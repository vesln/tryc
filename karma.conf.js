module.exports = function(config) {
  config.set({
    files: [
      'build/build.js',
      'test/support/index.js',
      'test/index.js'
    ],
    browsers: ['PhantomJS', 'Chrome', 'Firefox'],
    singleRun: true
  });
};
