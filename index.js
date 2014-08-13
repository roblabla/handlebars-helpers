// HandleBars Helpers
// ------------------
// If you are looking for the helpers documentation : 
// [collections](helpers/collections.js.html)
// [comparisons](helpers/comparisons.js.html)
// [logging](helpers/logging.js.html)
// [strings](helpers/strings.js.html)

// Convenience object : require('Handlebars-Helpers').helpers
module.exports.helpers = require('./helpers/all');

// Simple function to register all the helpers into an Handlebars instance
module.exports.register = function(Handlebars, helpers) {
  if (typeof helpers === "undefined")
    helpers = require('./helpers');
  Object.keys(helpers).forEach(function (key) {
    Handlebars.registerHelper(key, helpers[key]);
  });
};
