describe('batDancer', function() {

  var batDancer;

  beforeEach(function() {
    batDancer = new TinyDancer(20, 40);
  });

  it('should inherit a jQuery $node object', function() {
    expect(batDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be a subclass of Dancer', function() {
    expect(batDancer.lineUp).to.be.a('function');
  });

  it('should point to itself when calling constructor', function() {
    expect(batDancer.constructor).to.equal(TinyDancer);
  })

});