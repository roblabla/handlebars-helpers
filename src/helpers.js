var fs    = require('fs');
var path  = require('path');
var _     = require('lodash');

module.exports.helpers = {
  all: {}
};

fs.readdirSync(path.join(__dirname, 'helpers')).forEach(function(file) {
  module.exports.helpers[file.substring(0, file.length - 3)] = require('./helpers/' + file);
  _.extend(module.exports.helpers.all, module.exports.helpers[file.substring(0, file.length - 3)]);
});

module.exports.register = function(Handlebars, helpers) {
  if (typeof helpers === "undefined")
    helpers = module.exports.helpers.all;
  Object.keys(helpers).forEach(function (key) {
    Handlebars.registerHelper(key, helpers[key]);
  });
};
