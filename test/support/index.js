var root = null;

if (typeof window === 'undefined') {
  root = global;
  root.tryc = require('../../');
} else {
  root = window;
  root.tryc = require('tryc');
  root.__karma__.start = function() {
    root.__karma__.info({ total: 1 });
    root.__karma__.result({ success: true });
    root.__karma__.complete();
  };
}

root.assert = function(expr, msg) {
  if (expr) return;
  throw Error(msg || 'Assertion failed');
};

root.test = function(str, fn) {
  var timeout = setTimeout(function() {
    throw new Error(str + ' timeout');
  }, 1000);

  fn(function() {
    clearTimeout(timeout);
  });
};
