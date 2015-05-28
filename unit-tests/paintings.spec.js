describe("Paintings Service Unit Tests", function() {
  var paintingService;
  beforeEach(module('vincentApp'));
  beforeEach(module('paintings'));
  beforeEach(inject(function (_paintingService_) {
    paintingService = _paintingService_;
  }));
  //beforeEach(function() {
    //Ensure angular modules available
    //module('vincentApp');
    //module('paintings');
    //module('paintingService');
    //angular.mock.module("vincentApp");
    //angular.mock.module("paintings");
    //module(function($provide) {
    //  $provide.service('PaintingsService', PaintingService);
    //});

    //inject(function($injector) {
    //  PaintingService = $injector.get('PaintingService');
    //});

  //});

  it('should have Painting service be defined', function () {
    expect(paintingService).toBeDefined();
  });

})