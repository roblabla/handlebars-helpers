module.exports = {
  and: function (a, b, options) {
    if (typeof options === "undefined")
      return a && b;
    else if (a && b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  or: function (a, b, options) {
    if (typeof options === "undefined")
      return a || b;
    else if (a || b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  is: function (a, b, options) {
    if (typeof options === "undefined")
      return a === b;
    else if (a === b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  isnt: function (a, b, options) {
    if (typeof options === "undefined")
      return a !== b;
    else if (a !== b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  gt: function (a, b, options) {
    if (typeof options === "undefined")
      return a > b;
    else if (a > b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  gte: function (a, b, options) {
    if (typeof options === "undefined")
      return a >= b;
    else if (a >= b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  lt: function (a, b, options) {
    if (typeof options === "undefined")
      return a < b;
    else if (a < b)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  lte: function (a, b, options) {
    if (typeof options === "undefined")
      return a <= b;
    else if (a <= b)
      return options.fn(this);
    else
      return options.inverse(this);
  },
};
