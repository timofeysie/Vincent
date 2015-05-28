var PaintingsList = function() {
  this.loadAll = function() {
  	var painter = 'Paul%20C%C3%A9zanne';
    browser.get('http://localhost:8000/app/index.html#/browse/:'+painter);
  };

  this.count = function() {
  	var list = element.all(by.css('md-list-item'));
  	var num_of_painters = list.count()
    return num_of_painters;
  };
};

module.exports = PaintingsList;

