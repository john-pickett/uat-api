module.exports = (sequelize, DataTypes) => {
	const Roles = sequelize.define('roles', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},
		role_name: {
			type: DataTypes.STRING,
			required: true
		},
		user_id: {
			type: DataTypes.UUID
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: DataTypes.DATE
	},
	{
		underscored: true
	});
	return Roles;
}