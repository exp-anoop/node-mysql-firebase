const { body } = require('express-validator/check');

const registrationValidation = [
	body('email')
        .exists(),
        
    body('uid')
        .exists()
];

module.exports = { registrationValidation };