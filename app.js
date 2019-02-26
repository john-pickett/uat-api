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
	var role = req.body.role;

	const newUser = User.build({
		firstName: firstName,
		lastName: lastName,
		email: email,
		role: role
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