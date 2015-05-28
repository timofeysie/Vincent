'use strict';
var PaintersList    = require('./pages/PaintersList.js');
var PaintingsList    = require('./pages/PaintingsList.js');
describe('vincentApp', function() {
	var painters   = new PaintersList();
  var paintings   = new PaintingsList();
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
    it('should load a list of paintings', function() {
      console.log('paintings '+paintings.count());
      expect(paintings.count()).toBeGreaterThan(1);
    });
});