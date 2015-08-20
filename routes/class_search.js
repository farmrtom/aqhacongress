var express = require('express');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "route_class_search"});

var class_finder_logic = require('./../logic/class_finder');

exports.search = function (req, res) {
	var search_text = req.params.search_text;
	
	log.info('search text: ' + search_text);
	
	class_finder_logic.search(search_text, function(err, result) {
		if(err) {			
			res.writeHead(204);
			res.end();
		} else {
			log.info(result);
			
			res.writeHead(200);
			res.write(JSON.stringify(result));
			res.end();
		}
	});
};