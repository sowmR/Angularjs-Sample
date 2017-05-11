'use strict'; 

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.factory('Messages', function () {
        var message = 'Hello Message';
        var getMessage = function () {
            return message;
        };
        var setMessage = function (m) {
            message = m;
        };

        return {
            getMessage: getMessage,
            setMessage: setMessage
        }
    })

.controller('View1Ctrl', ['Messages','$scope',function(Messages,$scope) {
	var about = this;
    about.title = 'About Page';
    about.body = 'This is the about page body';

    about.message = Messages.getMessage();
    about.updateMessage = function (m) {
        Messages.setMessage(m);
    };
    $scope.$watch("message",function(newvalue,oldvalue){
    	if (about.message.length>0){console.log('"Message =',oldvalue);} else{console.log("Empty String")}
    });
}]);