'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('vincentApp', function() {

  beforeEach(function() {
      //Ensure angular modules available
    module('vincentApp');
    module('paintings');
  });

  browser.get('app');

  it('should load the app', function() {
    expect(browser.getLocationAbsUrl()).toMatch("app");
  });

});