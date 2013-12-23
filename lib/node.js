/**
 * Exec `fn` and call `end` with errors if any.
 *
 * @param {Function} fn
 * @param {Function} end
 * @api public
 */

module.exports = function(fn, end) {
  function handler(err) {
    var listeners = process.listeners('uncaughtException');
    if (listeners.indexOf(handler) !== listeners.length - 1) return;
    process.removeListener('uncaughtException', handler);
    end(err);
  }

  process.on('uncaughtException', handler);

  try {
    fn(handler);
  } catch(err) {
    handler(err);
  }
};
