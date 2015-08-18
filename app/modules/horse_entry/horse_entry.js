'use strict';

congressApp.controller('HorseEntryController', function HorseEntryController($scope, $window, $location, horseEntryService) {
	$scope.init = function() {
		$scope.classes = "3500 0500";
	}
	
	$scope.submit = function() {
		horseEntryService.submit($scope.classes, function(err, result) {
			console.log(result);
			$scope.horse_entry_result = result;
		})
	}
	
	$scope.init();
});