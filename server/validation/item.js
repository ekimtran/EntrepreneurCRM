const Validator = require("validator");
const validText = require("./valid-text");


module.exports = function validateItemInput(data) {
    let errors = {};

    data.description = validText(data.description) ? data.description : '';
    data.price = validText(data.price) ? data.price : '';
    data.name = validText(data.name) ? data.namee : '';

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required.";
    }

    if (Validator.isEmpty(data.price)) {
        errors.price = "Price is required.";
    }

    if (Validator.isEmpty(data.name)) {
        errors.namee = "Item namee is required.";
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};