module.exports = {
  /**
   * {{lowercase [text]}}
   * {{#lowercase}} text {{/lowercase}}
   * Makes all letters in text lowercase
   */
  lowercase: function(text) {
    if (typeof text === "string")
      return text.toLowerCase();
    else if (typeof text === "object")
      return text.fn(this).toLowerCase();
  },

  /**
   * {{uppercase [text]}}
   * {{#uppercase}} text {{/uppercase}}
   */
  uppercase: function(text) {
    if (typeof text === "string")
      return text.toUpperCase();
    else if (typeof text === "object")
      return text.fn(this).toLowerCase();
  }
};
