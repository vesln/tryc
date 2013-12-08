it('catches sync errors', function(done) {
  tryc(function() {
    throw new Error('test');
  }, function(err) {
    expect(err).to.be.ok;
    done();
  });
});

it('catches async errors', function(done) {
  tryc(function() {
    setTimeout(function() {
      throw new Error('test');
    }, 2);
  }, function(err) {
    expect(err).to.be.ok;
    done();
  });
});

it('works when nested', function(done) {
  tryc(function(first) {
    tryc(function(second) {
      throw new Error('bad');
    }, function(err) {
      expect(err).to.be.ok;
      done();
    });
  }, function(err) {
    throw new Error('fail');
  });
});
