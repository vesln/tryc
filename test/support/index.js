var root = null;
var completed = null;
var tests = [];

if (typeof window === 'undefined') {
  root = global;
  root.tryc = require('../../');
  completed = function(){};
} else {
  root = window;
  root.tryc = require('tryc');
  root.__karma__.start = function() {};

  completed = function() {
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
  tests.push({ title: str, fn: fn });
};

setTimeout(function runNextTest() {
  var test = tests.shift();
  if (!test) return completed();

  var timeout = setTimeout(function() {
    throw new Error(test.title + ' timeout');
  }, 1000);

  test.fn(function() {
    clearTimeout(timeout);
    runNextTest();
  });
}, 1);
