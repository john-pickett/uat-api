const User = require('./user');

const role = (sequelize, DataTypes) => {
	const Role = sequelize.define('role', {
		name: {
			type: DataTypes.STRING
		},
		usersID: {
			type: DataTypes.INTEGER,
			references: 'users',
			referencesKey: 'id'
		}
	})

	return Role;
}

module.exports = role;
