module.exports = function (Handlebars) {
return {
  // `{{debug [value]}}`
  //
  // Expression Helper
  //
  // Prints the context and the supplied value in the server console.
  debug: function (value) {
    console.log('=================================');
    console.log('Context: ', this);
    console.log('Value: ', value);
    console.log('=================================');
  },
};
};
