const Validator = require("../node_modules/validator");
const validText = require("./valid-text");

module.exports = function validateInventoryInput(data) {
  let errors = {};

  data.quanity = validText(data.quanity) ? data.quanity : "";

  if (Validator.isEmpty(data.quanity)) {
    errors.quanity = "Quanity is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
