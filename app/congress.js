'use strict';

var congressApp = angular.module('congressApp', ['ngResource', 'ngRoute']);

congressApp.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		controller: 'HorseEntryController',
		templateUrl: 'modules/horse_entry/horse_entry.tpl.html'
	})
	.when('/horse_entry', {
		controller: 'HorseEntryController',
		templateUrl: 'modules/horse_entry/horse_entry.tpl.html'
	});
});