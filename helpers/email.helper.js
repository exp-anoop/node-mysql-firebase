const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');
const mustache = require('mustache');
const GLOBAL = require('./global.helper');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const templates = {
	'login': {
		subject: 'Login mail {{user}}',
		template: '../templates/login.html'
	},
	'register': {
		subject: 'Registration mail',
		template: '../templates/register.html'
	}
};


const sendMail = (type, mailOptions) => {
	return new Promise((resolve, reject) => {
		if (!templates.hasOwnProperty(type)) reject(new Error('Unknown email type'));

		try {
			const fromEmail = GLOBAL.FROM_MAIL || 'Explore Support <support@experionglobal.com>';
			const defaultOption = templates[type];
			const content = fs.readFileSync(path.join(__dirname, defaultOption.template), 'utf-8');
			
			const options = {
				html: mustache.render(content, mailOptions),
				subject: mustache.render(defaultOption.subject, mailOptions),
				to: mailOptions.to.toString(),
				from: fromEmail
			};

			sgMail.send(options)
				.then(data => resolve(data))
				.catch(error => reject(error));

		} catch (error) {
			reject(error);
		}
	});
};

module.exports = { sendMail };