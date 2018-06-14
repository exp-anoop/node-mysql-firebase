const fs = require('fs');

const i18n = function () {
	this.language = 'en';
	this.loadFile();
};

i18n.prototype.loadFile = function () {
	const path = `${__dirname}/../messages/${this.language}.json`;
	if (fs.existsSync(path)) {
		this.messages = require(path);
	}
};	

i18n.prototype.set = function (language) {
	this.language = language;
	this.loadFile();
};

i18n.prototype.t = function (text) {
	return this.messages[text] || text;
};

module.exports = i18n;