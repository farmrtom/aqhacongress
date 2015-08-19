'use strict';

congressApp.controller('HorseEntryController', function HorseEntryController($scope, $window, $location, horseEntryService) {
	$scope.init = function() {
		
	}
	
	$scope.submit = function() {
		horseEntryService.submit($scope.classes, function(err, result) {
			$scope.horse_entry_result = result;
		})
	}
	
	$scope.init();
});