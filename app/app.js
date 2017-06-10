'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  "ngSanitize",
  'myApp.view1',
  'myApp.view2',
  'myApp.table',
  'paymentApp',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
 // $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			 if (current.hasOwnProperty('$$route')) {
				$rootScope.title = current.$$route.title;
				$rootScope.description = current.$$route.description;
				$rootScope.canonical = current.$$route.canonical;
				$rootScope.robots = current.$$route.robots;
			}	
		});
	 }]);
