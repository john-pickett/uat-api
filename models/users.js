module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('users', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},
		first_name: {
			type: DataTypes.STRING,
			required: true
		},
		last_name: {
			type: DataTypes.STRING,
			required: true
		},
		email: {
			type: DataTypes.STRING
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
	return Users;
}