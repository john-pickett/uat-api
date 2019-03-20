// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
// 	dialect: 'postgres'
// });

// const models = {
// 	User: sequelize.import('../models/user'),
//     Role: sequelize.import('../models/role'),
//     Grade: sequelize.import('../models/grade'),
//     Feature: sequelize.import('../models/feature')
// }

// // Models
// db.users = require('../models/users.js')(sequelize, Sequelize);
// db.roles = require('../models/roles.js')(sequelize, Sequelize);
// db.grades = require('../models/grade.js')(sequelize, Sequelize);
// db.features = require('../models/feature.js')(sequelize, Sequelize);

// // const models = {
// // 	User: sequelize.import('../models/user'),
// // 	Role: sequelize.import('../models/role')
// // }

// // db.roles.HasMany(db.users);

// module.exports = db;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres'
});

const models = {
	User: sequelize.import('../models/user'),
    Role: sequelize.import('../models/role'),
    Grade: sequelize.import('../models/grade'),
    Feature: sequelize.import('../models/feature')
}


module.exports = { sequelize, models };