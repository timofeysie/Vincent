exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

/*
The above is CommonJS module definition.
if we use Require.js, we should use AMD module definition like this:
define(function () {
  return {
    allScriptsTimeout: 11000,
    specs: [
      '*.js'
    ],

    capabilities: {
      'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/app/',

    framework: 'jasmine',

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  }
});
*/
