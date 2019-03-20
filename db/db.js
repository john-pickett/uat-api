const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'postgres',
	define: {
		underscored: true
	}
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.users = require('../models/users.js')(sequelize, Sequelize);
db.roles = require('../models/roles.js')(sequelize, Sequelize);

// const models = {
// 	User: sequelize.import('../models/user'),
// 	Role: sequelize.import('../models/role')
// }

// db.roles.HasMany(db.users);

module.exports = db;