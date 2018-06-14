const router = require('express').Router();
const { registrationValidation } = require('./users.validator');
const { register, me } = require('./users.service');
const { shield } = require('../../helpers/auth.helper');

const routes = () => {


    router.route('/')
        .post(registrationValidation, register);

    router.route('/me')
        .get(shield, me);

    return router;
};

module.exports = { routes, path: 'users' };
