const db = require('./db');
const sequelize = db.sequelize;
const User = db.models.User;
const Role = db.models.Role;
const Grade = db.models.Grade;
const Feature = db.models.Feature;

const createDataInDB = async () => {

    await Role.create({
        name: 'admin'
    })
    await Role.create({
        name: 'hr'
    })
    await Role.create({
        name: "manager"
    })
    await Role.create({
        name: 'help_desk'
    })

    const roles = await sequelize.queryInterface.sequelize.query(
        'SELECT id from ROLES;'
    );
    const roleRows = roles[0];

    await User.create({
        first_name: 'Colonel',
        last_name: 'Mustard',
        email: 'mustard@gmail.com',
        role_id: roleRows[0].id
    })

    await User.create({
        first_name: 'Miss',
        last_name: 'Scarlet',
        email: 'scarlet@gmail.com',
        role_id: roleRows[1].id
    })

    await User.create({
        first_name: 'Mrs.',
        last_name: 'White',
        email: 'white@gmail.com',
        role_id: roleRows[2].id
    })

    await User.create({
        first_name: 'Professor',
        last_name: 'Plum',
        email: 'plum@gmail.com',
        role_id: roleRows[3].id
    })

    await User.create({
        first_name: 'Mr.',
        last_name: 'Body',
        email: 'body@gmail.com',
        role_id: roleRows[0].id
    })

    await User.create({
        first_name: 'Mrs.',
        last_name: 'Peacock',
        email: 'peacock@gmail.com',
        role_id: roleRows[1].id
    })

    await User.create({
        first_name: 'Evette',
        last_name: 'Collette',
        email: 'themaid@gmail.com',
        role_id: roleRows[2].id
    })

    await User.create({
        first_name: 'Mr.',
        last_name: 'Police Man',
        email: 'dapolice@gmail.com',
        role_id: roleRows[3].id
    })

    const users = await sequelize.queryInterface.sequelize.query(
        'SELECT id from USERS;'
    );
    const userRows = users[0];

    await Feature.create({
        name: 'New button that clicks',
        role_id: roleRows[0].id
    })

    await Feature.create({
        name: 'New blue button that clicks with waves',
        role_id: roleRows[0].id
    })

    await Feature.create({
        name: 'New chart with graph',
        role_id: roleRows[1].id
    })

    await Feature.create({
        name: 'New bigger chart with smaller graph',
        role_id: roleRows[1].id
    })

    await Feature.create({
        name: 'New user profile',
        role_id: roleRows[2].id
    })

    await Feature.create({
        name: 'New super duper user profile with small chart',
        role_id: roleRows[2].id
    })

    await Feature.create({
        name: 'New table with search',
        role_id: roleRows[3].id
    })

    await Feature.create({
        name: 'New table with sortable column headers',
        role_id: roleRows[3].id
    })

    const features = await sequelize.queryInterface.sequelize.query(
        'SELECT id from FEATURES'
    )
    const featureRows = features[0];

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[0].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[2].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[1].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[3].id,
        feature_id: featureRows[3].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[0].id,
        feature_id: featureRows[1].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[1].id,
        feature_id: featureRows[3].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[2].id,
        feature_id: featureRows[2].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[3].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[3].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[3].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[1].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[6].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[6].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[1].id,
        feature_id: featureRows[3].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[0].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[2].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[1].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[3].id,
        feature_id: featureRows[3].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[0].id,
        feature_id: featureRows[1].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[1].id,
        feature_id: featureRows[3].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[2].id,
        feature_id: featureRows[2].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[3].id,
        feature_id: featureRows[4].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[0].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[3].id,
        feature_id: featureRows[7].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[6].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[3].id,
        feature_id: featureRows[5].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[4].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[7].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[2].id,
        feature_id: featureRows[6].id
    })

    await Grade.create({
        grade: 'Pass',
        user_id: userRows[1].id,
        feature_id: featureRows[5].id
    })

    await Grade.create({
        grade: 'Fail',
        user_id: userRows[1].id,
        feature_id: featureRows[4].id
    })
}

module.exports = { createDataInDB };