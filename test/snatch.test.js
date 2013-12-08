it('catches sync errors', function(done) {
  snatch(function() {
    throw new Error('test');
  }, function(err) {
    expect(err).to.be.ok;
    done();
  });
});

it('catches async errors', function(done) {
  snatch(function() {
    setTimeout(function() {
      throw new Error('test');
    }, 2);
  }, function(err) {
    expect(err).to.be.ok;
    done();
  });
});
