if (typeof window === 'undefined') require('./support/');

test('sync errors', function(done) {
  tryc(function() {
    throw new Error('test');
  }, function(err) {
    assert(err);
    done();
  });
});

test('async errors', function(done) {
  tryc(function() {
    setTimeout(function() {
      throw new Error('test');
    }, 2);
  }, function(err) {
    assert(err);
    done();
  });
});

test('nested', function(done) {
  var called = 0;

  tryc(function(first) {

    tryc(function(second) {

      tryc(function(third) {
        throw new Error('intentional');
      }, function(err) {
        called++;
        assert(err);
        third();
      });

    }, function(err) {
      called++;
      assert(err);
      second();
    });

  }, function(err) {
    assert(err);
    assert(called === 2);
    done();
  });
});
