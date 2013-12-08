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
  var _ = domain.create();
  _.on('error', end);
  try { _.run(fn); }
  catch (err) { end(err); }
};
