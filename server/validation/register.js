const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisteerInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.companyName = validText(data.companyName) ? data.companyName : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email))
    
};