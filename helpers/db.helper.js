/*******************************************************************
 * Database helper file
 * This helper file used to load models genarated by sequelize-auto
 * Also the relation between models were defind in this file
 * 
 * Author: Anoop P R
 * Created On: Oct 2017
 ********************************************************************/

const fs = require('fs');
const connection = require('../core/database');

let DB = {};

// Loading models - Generated using sequelize-auto
fs.readdirSync(`${__dirname}/../models`)
	.filter((file) => file.indexOf('.') !== 0)
	.forEach((file) => {
		let model = connection.import(`${__dirname}/../models/${file}`);
		DB[model.name] = model;
	});

// Export connection object
DB.connection = connection;
module.exports = DB;