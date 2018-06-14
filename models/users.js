/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		firebase_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'users',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};
