var mongoose = require('mongoose');
var plural = require('plural');

// Create the schema
var PersonSchema = mongoose.Schema({
	name: String
});

// Create the model
var Person = mongoose.model('person', PersonSchema, plural('person'));

module.exports = Person;