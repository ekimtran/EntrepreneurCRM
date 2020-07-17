const Validator = require('../node_modules/validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.companyName = validText(data.companyName) ? data.companyName : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Please provide a valid email.'
    };

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required.'
    };

    if (Validator.isEmpty(data.companyName)) {
        errors.companyName = 'Company name is required.'
    };

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required.'
    };

    if (!Validator.isLength(data.password, { min: 8, max: 30})) {
        errors.password = 'Password must be between 6 and 30 characters.'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
    
};