var express = require('express');
var controllers = require('./controllers');

// Create the app
var app = express.Router();

app
	.route('/people')
	.get(controllers.all)
	.post(controllers.create)
	.delete(controllers.removeAll)

app
	.route('/people/:id')
	.get(controllers.one)
	.post(controllers.update)
	.delete(controllers.remove)

module.exports = app;