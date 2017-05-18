'use strict'; 

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/view1', {
	  	title : 'Home',
		robots : 'follow,index',
		description : 'This site is a single page AngularJS app. It\'s intended to test whether search engines can crawl and adequately render & index the angular pages',
		canonical : 'http://angular.sowmya.samples.com/',
	    templateUrl: 'view1/view1.html',
	    controller: 'View1Ctrl'
	  });
}]);
