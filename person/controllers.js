var Person = require('./model');

/**
 * Get all documents
 * @param  {Request} req The request
 * @param  {Response} res The response
 * @param  {Function} next The callback to excuse when done
 * @return {void}
 */
exports.all = function (req, res, next) {
	Person.find().exec(function (err, people) {
		if(err){
			return res.status(400).json(err);
		}

		res.json(people);
	});
};

/**
 * Create one document
 * @param  {Request} req The request
 * @param  {Response} res The response
 * @param  {Function} next The callback to excuse when done
 * @return {void}
 */
exports.create = function (req, res, next) {
	var p = new Person(req.body);
	p.save(function (err, person) {
		if(err){
			return res.status(400).json(err);
		}

		res.json(person);
	});
};

/**
 * Remove all documents
 * @param  {Request} req The request
 * @param  {Response} res The response
 * @param  {Function} next The callback to excuse when done
 * @return {void}
 */
exports.removeAll = function (req, res, next) {
	Person.remove({}).exec(function (err) {
		if(err){
			return res.status(400).json(err);
		}

		res.status(204).end();
	});
};

/**
 * Get one document
 * @param  {Request} req The request
 * @param  {Response} res The response
 * @param  {Function} next The callback to excuse when done
 * @return {void}
 */
exports.one = function (req, res, next) {
	Person.findOne({_id: req.params.id}, function (err, person) {
		if(err){
			return res.status(400).json(err);
		}

		if(!person){
			return res.status(404).json({
				error: 'Not found'
			});
		}

		res.status(200).json(person);
	});
};

/**
 * Updatea document
 * @param  {Request} req The request
 * @param  {Response} res The response
 * @param  {Function} next The callback to excuse when done
 * @return {void}
 */
exports.update = function (req, res, next) {
	Person.findOneAndUpdate({_id: req.params.id}, req.body, {'new': true}, function (err, person) {
		if(err){
			return res.status(400).json(err);
		}

		if(!person){
			return res.status(404).json({
				error: 'Not found'
			});
		}

		res.status(200).json(person);
	});
};

/**
 * Remove a document
 * @param  {Request} req The request
 * @param  {Response} res The response
 * @param  {Function} next The callback to excuse when done
 * @return {void}
 */
exports.remove = function (req, res, next) {
	Person.findOneAndRemove({_id: req.params.id}, function (err, person) {
		if(err){
			return res.status(400).json(err);
		}

		if(!person){
			return res.status(404).json({
				error: 'Not found'
			});
		}

		res.status(204).end();
	});
};