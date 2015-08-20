var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "logic_class_finder"});

var classes = require('./../classes.json');

exports.find = function (class_number, callback) {
		
	var found = false;
	
	classes["data"].forEach(function(item) {
		if(parseInt(item["class_number"]) === parseInt(class_number)) {
			found = true;
			callback(false, item);
			return;
		}
	});
	
	if(!found)
		callback(true);
};

exports.search = function(search_text, callback) {
	var results = [];
	
	classes["data"].forEach(function(item) {
		if(item["description"].toUpperCase().indexOf(search_text.toUpperCase()) > -1) {
			results.push(item);
		}
	});
		
	if(results.length > 0) {
		callback(false, results);
	} else {
		callback(true);
	}
};