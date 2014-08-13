module.exports = {
  // {{lowercase [text]}}
  //
  // Hybrid Helper
  //
  // Expression Form : Makes all letters in text lowercase
  //
  // Block Form : Executes the block, and makes its result lowercase.
  //
  lowercase: function(text) {
    if (typeof text === "string")
      return text.toLowerCase();
    else if (typeof text === "object")
      return text.fn(this).toLowerCase();
  },

  // {{uppercase [text]}}
  //
  // Hybrid Helper
  //
  // Expression Form : Makes all letters in text uppercase.
  //
  // Block Form : Executes the block, and makes its result uppercase.
  //
  uppercase: function(text) {
    if (typeof text === "string")
      return text.toUpperCase();
    else if (typeof text === "object")
      return text.fn(this).toLowerCase();
  }
};
