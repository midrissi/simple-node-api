var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Create the express application
var app = express();

// add some middlewares
app.use(bodyParser.json());

// connect to mongodb
mongoose.connect(process.env.MONGODB);

// Add some applications
app.use('/rest', require('./person'));

// Start the server
var server = app.listen(process.env.PORT, function () {
	console.log('Server started at: %s', server.address().port);
});