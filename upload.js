var csv = require('fast-csv');
var mongoose = require('mongoose');
var flight = require('./models/flightmodel');

exports.post = function (req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');

	var flightFile = req.files.file;

	var flightdata = [];

	csv
	 .fromString(flightFile.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();

		 flightdata.push(data);
	 })
	 .on("end", function(){
		 flight.create(flightdata, function(err, documents) {
			if (err) throw err;

			res.send(flightdata.length + ' files have been successfully uploaded.');
		 });
	 });
};
