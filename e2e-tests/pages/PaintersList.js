var PaintersList = function() {
  this.loadAll = function() {
    browser.get('http://localhost:8000/app/index.html#/game');
  };

  this.count = function() {
    return element.all(by.css('md-list-item')).count();
  };
};

module.exports = PaintersList;

