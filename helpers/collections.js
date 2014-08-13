// Helpers that helps dealing with arrays and objects.
module.exports = {
  // `{{length [array]}}`
  //
  // Expression Helper.
  //
  // Returns the number of elements in the array
  //
  length: function (array) {
    return array.length;
  },

  // `{{#foreach [array]}}`
  //
  // Block Helper
  //
  // Iterate over array. Adds `index`, `total`, `isLast` and `isFirst` to
  // context, and execute the block with said context.
  //
  foreach: function (array, options) {
    var res = '';
    for (var i = 0; i < array.length; i++) {
      var context = array[i];
      context.index = i;
      context.total = array.length;
      context.isFirst = i === 0;
      context.isLast = i === (array.length - 1);
      res += options.fn(context);
    }
    return res;
  },

  // `{{#any [array]}}`
  //
  // Hybrid Helper.
  //
  // Conditional Block Form : Execute block if array has at least one element.
  //
  // Expression Form : returns true if array has at least one element.
  //
  any: function (array, options) {
    if (typeof options === "undefined")
      return array.length > 0;
    else if (array.length > 0)
      return options.fn(this);
    else
      return options.inverse(this);
  },

  // `{{#empty [array]}}`
  //
  // Hybrid Helper.
  //
  // Conditional Block Form : Execute block if array is empty.
  //
  // Expression Form : returns true if array is empty.
  //
  empty: function (array, options) {
    if (typeof options === "undefined")
      return array.length === 0;
    else if (aray.length === 0)
      return options.fn(this);
    else
      return options.inverse(this);
  }
};
