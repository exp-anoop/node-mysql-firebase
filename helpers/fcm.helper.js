const fcmPush = require('fcm-push');

if (!process.env.FCM_SERVER_KEY) {
	throw new Error('Firebase server key not found');
}

const fcm = new fcmPush(process.env.FCM_SERVER_KEY);

const sendNotification = (message) => {
	return new Promise((resolve, reject) => {
		try {
			fcm.send(message).then(function (response) {
				resolve(response);
			}).catch(function (err) {
				reject(err);
			});
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = { sendNotification };