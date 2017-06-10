'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
  	title : 'View2',
	robots : 'follow,index',
	description : 'This site is a single page AngularJS app. It\'s intended to test whether search engines can crawl and adequately render & index the angular pages',
	canonical : 'http://angular.sowmya.samples.com/view2',
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);
