describe("Paintings Service Unit Tests", function() {

  beforeEach(function() {
    //Ensure angular modules available
    module('vincentApp');
    module('paintings');
  });

  beforeEach(inject(function (_PaintingsService_) {
    PaintingsService = _PaintingsService_;
  }));

  it('should have Painting service be defined', function () {
    expect(PaintingsService).toBeDefined();
  });

})