const Validator = require("../node_modules/validator");
const validText = require("./valid-text");


module.exports = function validateItemInput(data) {
    let errors = {};

    data.description = validText(data.description) ? data.description : '';
    data.price = validText(data.price) ? data.price : '';
    data.name = validText(data.name) ? data.name : '';

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required.";
    }

    if (Validator.isEmpty(data.price)) {
        errors.price = "Price is required.";
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Item name is required.";
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};