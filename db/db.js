const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'postgres'
});

const models = {
	User: sequelize.import('../models/user'),
    Role: sequelize.import('../models/role'),
    Grade: sequelize.import('../models/grade'),
    Feature: sequelize.import('../models/feature')
}


module.exports = { sequelize, models };