exports.config = {
  allScriptsTimeout: 11000000,

  specs: [
    'scenarios.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    "chromeOptions": {
        args: [],
        extensions: [],
    }
  },

  baseUrl: 'http://localhost:8000/app/',
  framework: 'jasmine',

  onPrepare: function() {
    browser.driver.get(browser.baseUrl);
    // implicit and page load timeouts
    //browser.manage().timeouts().pageLoadTimeout(400000);
    //browser.manage().timeouts().implicitlyWait(250000);
    // for non-angular page
    //browser.ignoreSynchronization = true;
    // sign in before all tests
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
