require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/db.js');
const sequelize = db.sequelize;
const User = db.users;
const Role = db.roles;
const app = express();
const port = 3000;

app.use(bodyParser.json());

Role.hasMany(User);

sequelize.sync({force: true}).then(() => {
	app.listen(port, () => {
		console.log(`Server running on port ${port}.`)
	});
});


app.get('/', (req, res) => {
	res.send('greetings and salutations from the uat app')
});

app.get('/users', (req, res) => {
	User.findAll().then((users) => {
		res.send(users);
	});
});

app.post('/users', (req, res) => {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;

	const newUser = User.build({
		first_name: firstName,
		last_name: lastName,
		email: email
	});

	newUser.save().then((record) => {
		res.send("User saved: " + JSON.stringify(record))
	}).catch((err) => {
		res.send('Error saving user: ' + err);
	})
});

app.get('/roles', (req, res) => {
	User.findAll().then((users) => {
		res.send(users);
	});
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