'use strict';

describe('vincentApp', function() {
	it('should load the app', function() {
  		browser.get('http://localhost:8000/app/');
    	expect(browser.getLocationAbsUrl()).toMatch("http://localhost:8000/app/");
    	expect(browser.getTitle()).toEqual('Vincent');
  	});
});