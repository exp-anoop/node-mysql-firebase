const { validationResult } = require('express-validator/check');
const { users: Users } = require('../../helpers/db.helper');

const register = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.errorHandler(errors.mapped());
    }

    try {
        Users
            .build({name: 'Sample O1', email: req.body.email, firebase_id: req.body.uid})
            .save()
            .then((data) => {
                res.return(data);
            });

    } catch (error) {
		return res.errorHandler(error);
	}

};

const me = async (req, res) => {
    try {
        return res.return(req.user);
    } catch (error) {
        return res.errorHandler(error);
    }
};

module.exports = { me, register };
