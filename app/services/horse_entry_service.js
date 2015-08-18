'use strict';

congressApp.service('horseEntryService', function($http) {
	this.submit = function(classes, callback) {

		var json = {
			data: classes.replace(/,$/,"").split(" ").map(function(class_number) {
				return {class_number: class_number};
			})
		};
		
		$http.post('../../api/horse_entry', json)
		.success(function(data, status, headers, config) {
			if(status == '200')
				callback(false, data);
			else
				callback(true);
		})
	}
});