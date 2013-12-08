/**
 * Core dependencies.
 */

var domain = require('domain');

/**
 * Exec `fn` and call `end` with errors if any.
 *
 * @param {Function} fn
 * @param {Function} end
 * @api public
 */

module.exports = function(fn, end) {
  var d = domain.create();

  function handler(err) {
    // TODO:
    // Uncomment when Node 0.11 is less buggy or 0.12 is out
    // d.dispose();
    d.exit();
    end(err);
  }

  d.on('error', handler);

  try {
    d.run(function() {
      fn(handler);
    });
  } catch(err) {
    handler(err);
  }
};
