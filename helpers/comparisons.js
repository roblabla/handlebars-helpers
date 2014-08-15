module.exports = function (Handlebars) {
// Helpers to help with basic comparisons.
return {
  // `{{and [a] [b]}}`
  //
  // Hybrid Helper
  //
  // Conditional Block Form : Execute block if `a && b`
  //
  // Expression Form : Returns the result of `a && b`
  //
  and: function (a, b, options) {
    if (typeof options === "undefined")
      return a && b;
    else if (a && b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{or [a] [b]}}`
  //
  // Hybrid Helper
  //
  // Conditional Block Form : Execute block if `a || b`
  //
  // Expression Form : Returns the result of `a || b`
  or: function (a, b, options) {
    if (typeof options === "undefined")
      return a || b;
    else if (a || b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{is [a] [b]}}`
  //
  // Hybrid Helper
  //
  // Conditional Block Form : Execute block if `a === b`
  //
  // Expression Form : Returns the result of `a === b`
  is: function (a, b, options) {
    if (typeof options === "undefined")
      return a === b;
    else if (a === b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{isnt [a] [b]}}`
  //
  // Hybrid Helper
  //
  // Conditional Block Form : Execute block if 'a !== b'
  //
  // Expression Form : Returns the result of `a !== b`
  isnt: function (a, b, options) {
    if (typeof options === "undefined")
      return a !== b;
    else if (a !== b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{gt [a] [b]}}`
  //
  // Hybrid Helper
  // 
  // Conditional Block Form : Execute block if `a > b`
  //
  // Expression Form : Returns the result of `a > b`
  gt: function (a, b, options) {
    if (typeof options === "undefined")
      return a > b;
    else if (a > b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{gte [a] [b]}}`
  //
  // Hybrid Helper
  // 
  // Conditional Block Form : Execute block if `a >= b`
  //
  // Expression Form : Returns the result of `a >= b`
  gte: function (a, b, options) {
    if (typeof options === "undefined")
      return a >= b;
    else if (a >= b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{lt [a] [b]}}`
  //
  // Hybrid Helper
  // 
  // Conditional Block Form : Execute block if `a < b`
  //
  // Expression Form : Returns the result of `a < b`
  lt: function (a, b, options) {
    if (typeof options === "undefined")
      return a < b;
    else if (a < b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{lte [a] [b]}}`
  //
  // Hybrid Helper
  // 
  // Conditional Block Form : Execute block if `a <= b`
  //
  // Expression Form : Returns the result of `a <= b`
  lte: function (a, b, options) {
    if (typeof options === "undefined")
      return a <= b;
    else if (a <= b)
      return options.fn(this);
    else
      return options.inverse(this);
  },
};
};
