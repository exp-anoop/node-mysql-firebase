const admin = require('firebase-admin');
const serviceAccount = require('../config/wind-d8223-firebase-adminsdk-qmd0o-e5601d9c8c.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE
});

const { users: Users } = require('./db.helper');

const shield = async (req, res, next) => {

    const token = req.headers['x-auth'];

    if (!token) {
        return res.status(401).return();
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
 
        req.user = await getUserFromUID(decodedToken.uid);

        if(!req.user) {
            throw new Error('User not found');
        } 

        next();
    } catch (error) {
        return res.status(401).return();
    }
};

const getUserFromUID = async (uid) => {
    return Users.find({ where: { firebase_id: uid } });
};

module.exports = { shield };