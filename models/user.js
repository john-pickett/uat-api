const user = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        role_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
		first_name: {
			type: DataTypes.STRING
		},
		last_name: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING
        }
	}, {
        underscored: true
    })

	return User;
}

module.exports = user;