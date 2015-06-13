describe("Paintings Service Unit Tests", function() {
  var paintingService;
  beforeEach(module('vincentApp'));
  beforeEach(module('paintings'));
  beforeEach(inject(function (_paintingService_) {
    paintingService = _paintingService_;
  }));

  it('should have Painting service be defined', function () {
    expect(paintingService).toBeDefined();
  });

})