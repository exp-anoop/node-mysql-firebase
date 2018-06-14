const winston = require('winston');
const expressWinston = require('express-winston');


const logger = function () {
	if (!process.env.LOG) {
		return (req, res, next) => next();
	}
	
	const transports = [];
	const options = {
		meta: false,
		ignoreRoute: (req) => !!req.originalUrl.match(/^\/apidoc\//),
		expressFormat: false
	};

	if (process.env.LOG === 'console') {
		transports.push(new winston.transports.Console({
			msg: 'HTTP {{req.method}} {{req.url}}',
			colorize: true
		}));
	}

	if (process.env.LOG === 'file') {
		options.meta = true;
		// options.msg = `HTTP {{res.status}} {{req.method}} {{req.url}} query {{JSON.stringify(req.query)}}`;
		transports.push(new winston.transports.File({
			filename: './logs/access.log'
		}));
	}

	options.transports = transports;	
	
	return expressWinston.logger(options);
};

module.exports = logger;