const Validator = require("../node_modules/validator");
const validText = require("./valid-text");

module.exports = function validateCustomerInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.phoneNumber = validText(data.phoneNumber) ? data.phoneNumber : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required.'
    };

    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = 'Phone number field is required.'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };

}