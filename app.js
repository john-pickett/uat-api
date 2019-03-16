require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/db');
const sequelize = db.sequelize;
const User = db.models.User;
const Role = db.models.Role;
const app = express();
const port = 3000;

app.use(bodyParser.json());

sequelize.sync({force: false}).then(() => {
	app.listen(port, () => {
		console.log(`Server running on port ${port}.`)
	});
});

Role.hasMany(User);
User.belongsTo(Role);

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

// Project.findAll({
//     include: [{
//         model: Task,
//         where: { state: Sequelize.col('project.state') }
//     }]
// })

app.post('/roles', (req, res) => {
	var name = req.body.name;

	const newRole = Role.build({
		name: name
	});

	newRole.save().then((record) => {
		res.send("Role saved: " + JSON.stringify(record))
	}).catch((err) => {
		res.send('Error saving role: ' + err);
	});
});