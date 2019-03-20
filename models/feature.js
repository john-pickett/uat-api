const feature = (sequelize, DataTypes) => {
    const Feature = sequelize.define('feature', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        role_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        underscored: true
    })
    return Feature;
}

module.exports = feature;