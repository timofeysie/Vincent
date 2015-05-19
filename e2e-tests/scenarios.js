'use strict';
var PaintersList    = require('./pages/PaintersList.js');
describe('vincentApp', function() {
	var painters   = new PaintersList();
	beforeEach(function() {
    painters.loadAll();
  });
	it('should load and have the correct title', function() {
  		browser.get('http://localhost:8000/app/');
    	expect(browser.getLocationAbsUrl()).toMatch("/game");
    	expect(browser.getTitle()).toEqual('Vincent');
  	});
  	it('should load a list of painters', function() {
    expect(painters.count()).toBeGreaterThan(1);
  });
});