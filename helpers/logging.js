module.exports = {
  // `{{debug [value]}}`
  //
  // Expression Helper
  //
  // Prints the context and the supplied value in the server console.
  debug: function (value) {
    console.log('=================================');
    console.log('Context: ', this._locals);
    console.log('Value: ', value);
    console.log('=================================');
  },
};
