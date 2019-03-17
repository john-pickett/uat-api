const grade = (sequelize, DataTypes) => {
    const Grade = sequelize.define('grade', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        grade: {
            type: DataTypes.ENUM,
            values: ['Pass', 'Fail']
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        feature_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        underscored: true
    })
    return Grade;
}

module.exports = grade;