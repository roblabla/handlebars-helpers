module.exports = function(Handlebars, options) {
var fs    = require("fs");
var _     = require("lodash");

options = _.defaults(options, {include: {
  lookup: function(path) { return path; },
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
    else
      context = this[context];
    name = options.include.lookup(name);
    if (!(name in options.include.cache))
      options.include.cache[name] = Handlebars.compile(fs.readFileSync(name, 'utf8'));
    return new Handlebars.SafeString(options.include.cache[name](context));
  }
};
};
