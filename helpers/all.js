module.exports = function (Handlebars, options) {
// Load require nodejs modules
var fs    = require('fs');
var path  = require('path');
var _     = require('lodash');

var returnValue = {};

fs.readdirSync(path.join(__dirname)).forEach(function(file) {
  if (file != 'all.js') {
    var opts = options[path.basename(file, '.js')];
    _.extend(returnValue, require('./'+ file)(Handlebars, opts));
  }
});
return returnValue;
};
