require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/db.js');
const sequelize = db.sequelize;
const User = db.models.User;
const Role = db.models.Role;
const Grade = db.models.Grade;
const Feature = db.models.Feature;
const app = express();
const port = 3000;
const seedData = require('./db/seedDB')

app.use(bodyParser.json());

const eraseDatabaseOnSync = true;

sequelize.sync({force: eraseDatabaseOnSync}).then(() => {
    if (eraseDatabaseOnSync) {
        // seed DB with data
        seedData.createDataInDB()
    }
	app.listen(process.env.PORT || port, () => {
		console.log(`Server running on port ${port}.`)
	});
});

// setting up model relationships
// Roles
Role.hasMany(User);
User.belongsTo(Role);
// Grades
User.hasMany(Grade);
Grade.belongsTo(User);
//Features
Role.hasMany(Feature);
Feature.belongsTo(Role);
Feature.hasMany(Grade);
Grade.belongsTo(Feature);

app.get('/', (req, res) => {
	res.send('greetings and salutations from the uat app')
});

app.get('/users', (req, res) => {
	// User.findAll().then((users) => {
	// 	res.send(users);
    // });
    User.findAll({
        include: [{model: Role}]
    }).then((users) => {
        res.send(users)
    })
});

app.post('/users', (req, res) => {
	var first_name = req.body.first_name;
	var last_name = req.body.last_name;
	var email = req.body.email;
	var role_id = req.body.role_id;

	const newUser = User.build({
		first_name: first_name,
		last_name: last_name,
		email: email,
		role_id: role_id
	});

	newUser.save().then((record) => {
		res.send("User saved: " + JSON.stringify(record))
	}).catch((err) => {
		res.send('Error saving user: ' + err);
	})
});

app.get('/roles', (req, res) => {
	// Role.findAll().then((roles) => {
	// 	res.send(roles);
    // });
    
    Role.findAll({
        include: [{ model: User }]
    }).then((roles) => {
        res.send(roles)
    })
});

app.post('/roles', (req, res) => {
	var name = req.body.role_name;

	const newRole = Role.build({
		role_name: name
	});

	newRole.save().then((record) => {
		res.send("Role saved: " + JSON.stringify(record))
	}).catch((err) => {
		res.send('Error saving role: ' + err);
	});
});

app.get('/grades', (req, res) => {
    Grade.findAll({
        include: [{ model: User }, { model: Feature }]
    }).then((grades) => {
        res.send(grades)
    })
});

app.get('/features', (req, res) => {
    Feature.findAll({
        include: [{ model: Role }, { model: Grade }]
    }).then((features) => {
        res.send(features)
    })
})
