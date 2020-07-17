const Validator = require("../node_modules/validator");
const validText = require("./valid-text");


module.exports = function validateVendorInput(data) {
  let errors = {};

  data.phoneNumber = validText(data.phoneNumber) ? data.phoneNumber : '';
  data.address = validText(data.address) ? data.address : '';
  data.city = validText(data.city) ? data.city : '';
  data.state = validText(data.state) ? data.state : '';
  data.zipcode = validText(data.zipcode) ? data.zipcode : '';
  data.company = validText(data.company) ? data.company : '';

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number is required.";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address= "Address is required.";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City is required.";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State is required.";
  }

  if (Validator.isEmpty(data.zipcode)) {
    errors.zipcode = "Zipcode is required.";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company name is required.";
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};