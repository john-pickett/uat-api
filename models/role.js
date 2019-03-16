const User = require('./user');

const role = (sequelize, DataTypes) => {
	const Role = sequelize.define('role', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
		name: {
			type: DataTypes.STRING
		}
	},  {
        underscored: true
    })

	return Role;
}

module.exports = role;