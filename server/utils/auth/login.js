const Validator = require('validator');
const isEmpty = require('../isEmpty');

const loginUser = (data) => {
    let errors = {};
    data.email = !isEmpty(data.email) ?  data.email : '';
    data.password = !isEmpty(data.password) ?  data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email Address!';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email Address is required!';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
   
    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = loginUser;