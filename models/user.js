const Role = require('./role');

const user = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		firstName: {
			type: DataTypes.STRING
		},
		lastName: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING
		},
		roleID: {
			type: DataTypes.INTEGER,
			references: 'roles',
			referencesKey: 'id'
		}
	})

	return User;
}

module.exports = user;