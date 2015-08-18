var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "logic_horse_entry"});

var class_finder = require('./class_finder');

exports.calculate = function (entries, callback) {
	
	var result_array = [];
	var result_object = {};
	
	var entry_fee = 0;
	
	entries["data"].forEach(function(item) {
		class_finder.find(item["class_number"], function callback(err, result) {
			if (err) {
				result_array.push({class_number: item["class_number"], "description": "class not found"});
			} else {
				var class_fee = 0;
				var fee_array = result.fees;
				result.fees.forEach(function(item) {
					class_fee += parseInt(item.fee);
				});
				
				result.class_fee = class_fee;
				entry_fee += class_fee;
				
				result_array.push(result);
			}
		});
	});
	
	result_object.classes = result_array;
	
	var entry_fees = [];
	entry_fees.push({"description":"Total Class Entry Fees","fee":entry_fee});
	entry_fees.push({"description":"Stall Fee","fee":350});
	entry_fees.push({"description":"Drug Test Fee","fee":5});
	entry_fees.push({"description":"Office Fee","fee":25});

	var total_fee = 0;
	entry_fees.forEach(function(item) {
		total_fee += parseInt(item["fee"]);
	});
	
	result_object.fees = entry_fees;
	result_object.total_fee = total_fee;
	
	callback(false, result_object);
};