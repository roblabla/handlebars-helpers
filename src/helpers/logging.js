module.exports = {
  debug: function (value) {
    console.log('=================================');
    console.log('Context: ', this);
    console.log('Value: ', value);
    console.log('=================================');
  },
};
