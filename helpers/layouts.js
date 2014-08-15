module.exports = function(Handlebars, options) {
var path  = require("path");
var _     = require("lodash");

options = _.merge(options, {include: {
  lookup: function(path) {return path; },
  cache: {}
}});
if (typeof Handlebars === "undefined")
  Handlebars = require("handlebars");
return {
  // {{ include [name] (context) }}
  //
  // Expression Helper
  //
  // Executes the given template and returns its value, executed with
  // given context or "this" if context is not supplied.
  include: function (name, context) {
    if (typeof context === "undefined")
      context = this;
    name = options.include.lookup(name);
    if (!options.include.cache.containsKey(name))
      options.include.cache[name] = Handlebars.compile(fs.readFileSync(name));
    return options.cache[name](context);
  }
};
};
