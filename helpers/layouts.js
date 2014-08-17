module.exports = function(Handlebars, options) {
var fs    = require("fs");
var _     = require("lodash");

options = _.defaults(options, {
  lookup: function(path) { return path; },
  cache: null
});
if (typeof Handlebars === "undefined")
  Handlebars = require("handlebars");

function getTemplate(name) {
  name = options.lookup(name);
  var template;
  if (options.cache && name in options.cache)
    template = options.cache[name];
  else {
    template = Handlebars.compile(fs.readFileSync(name, 'utf8'));
    if (options.cache)
      options.cache[name] = template;
  }
  return template;
}

return {
  // `{{include [name] (context)}}`
  //
  // Expression Helper
  //
  // Executes the given template and returns its value, executed with
  // given context or "this" if context is not supplied.
  include: function (name, context) {
    if (typeof context === "undefined")
      context = this;
    return new Handlebars.SafeString(getTemplate(name)(context));
  },

  // `{{# extend [name]}}`
  //
  // Block Helper
  //
  // Executes the given template
  extend: function (name, options) {
    options.fn(this);
    return new Handlebars.SafeString(getTemplate(name)(this));
  },

  // `{{block [name]}}`
  //
  // Hybrid Helper
  //
  // Expression Form : Places a block at specified position with no content
  //
  // Block Form : Places a block at the specified position, with the specified
  // content
  block: function(name, options) {
    var defval = options ? options.fn(this) : "";
    if (typeof this._blocks === "undefined") this._blocks = {};
    if (name in this._blocks) {
      switch (this._blocks[name].type) {
      case "append":
        return defval + this._blocks[name].content;
      case "prepend":
        return this._blocks[name].content + defval;
      case "replace":
        return this._blocks[name].content;
      }
    }
  },

  //! TODO : Fix nested extends !
  // `{{#replace [name]}}`
  //
  // Block Helper : 
  replace: function(name, options) {
    if (typeof this._blocks === "undefined") this._blocks = {};
    this._blocks[name] = { type: "replace", content: options.fn(this) };
  },

  // `{{#append [name]}}`
  append: function(name, options) {
    if (typeof this._blocks === "undefined") this._blocks = {};
    this._blocks[name] = { type: "append", content: options.fn(this) };
  },

  // `{{#prepend [name]}}`
  prepend: function(name, options) {
    if (typeof this._blocks === "undefined") this._blocks = {};
    this._blocks[name] = { type: "prepend", content: options.fn(this) };
  }
};
};
