// HandleBars Helpers
// ------------------
// If you are looking for the helpers documentation : 
//
// - [collections](helpers/collections.js.html)
// - [comparisons](helpers/comparisons.js.html)
// - [logging](helpers/logging.js.html)
// - [strings](helpers/strings.js.html)

// Convenience object : require('Handlebars-Helpers').helpers
module.exports.helpers = require('./helpers/all');

// You NEED to give a handlebars object when registering, and optionally
// an option object. This options object right now is only used for the
// include helper, for cache and path resolution.
module.exports.register = function (Handlebars, options) {
  var helpers = module.exports.helpers(Handlebars, options);
  for (var key in helpers)
    if (helpers.hasOwnProperty(key))
      Handlebars.registerHelper(key, helpers[key]);
};
