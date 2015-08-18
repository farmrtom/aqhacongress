var express = require('express');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "routes_entry"});

var horse_entry_logic = require('./../logic/horse_entry');

exports.calculate = function (req, res) {
	var body = JSON.stringify(req.body);
	var body_json = JSON.parse(body);
	
	horse_entry_logic.calculate(body_json, function(err, result) {
		if(err) {			
			res.writeHead(500);
			res.end();
		} else {			
			res.writeHead(200);
			res.write(JSON.stringify(result));
			res.end();
		}
	});
};