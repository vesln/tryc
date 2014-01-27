/**
 * Exec `fn` and call `end` with errors if any.
 * When the execution is done, put back the old
 * `onerror` handler.
 *
 * @param {Function} fn
 * @param {Function} end
 * @api public
 */

module.exports = function(fn, end) {
  var prev = window.onerror;

  function handler(err) {
    window.onerror = prev;
    end(err);
  }

  window.onerror = function(msg, url, line) {
    handler(new Error(msg + ' at ' + url + ':' + line));
    return true; // prevent default
  };

  try {
    fn(handler);
  } catch (err) {
    handler(err);
  }
};
