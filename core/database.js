const Sequelize = require('sequelize');

if(!process.env.MYSQL_URI) {
    throw new Error('MySQL connection string not found');
}

const connectionString = process.env.MYSQL_URI;
const options = {
	dialect : 'mysql',
	logging: false
};

const connection = new Sequelize(connectionString, options);

module.exports = connection;