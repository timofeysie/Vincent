describe("Auth Service Unit Tests", function() {

  beforeEach(function() {
      //Ensure angular modules available
    module('vincentApp');
    module('services');
  });

  beforeEach(inject(function (_PaintingsService_) {
    PaintingsService = _PaintingsService_;
  }));

  it('should have Auth service be defined', function () {
    expect(PaintingsService).toBeDefined();
  });

})