var fs    = require('fs');
var path  = require('path');
var _     = require('lodash');

module.exports = {};

fs.readdirSync(path.join(__dirname, 'helpers')).forEach(function(file) {
  if (file === 
  require('./helpers/' + file);
  _.extend(module.exports.helpers.all, module.exports.helpers[file.substring(0, file.length - 3)]);
});
