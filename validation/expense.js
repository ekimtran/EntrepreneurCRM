const Validator = require("../node_modules/validator");
const validText = require("./valid-text");

module.exports = function validateExpenseInput(data) {
    let errors = {};

    data.month = validText(data.month) ? data.month : "";
    data.year = validText(data.year) ? data.year : "";
    data.type = validText(data.type) ? data.type : "";
    data.amount = validText(data.amount) ? data.amount : "";

    if (Validator.isEmpty(data.month)) {
    errors.month = "Month is required.";
    };

    if (Validator.isEmpty(data.year)) {
    errors.year = "Year is required.";
    };

    if (Validator.isEmpty(data.type)) {
    errors.type = "Type is required.";
    };

    if (Validator.isEmpty(data.amount)) {
    errors.amount = "Amount is required.";
    };

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};