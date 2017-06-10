'use strict'; 

angular
    .module('myApp.view1')
    .controller('View1Ctrl', ['Messages','$scope','$http',function(Messages,$scope,$http) {
	/*var about = this;
    about.title = 'About Page';
    about.body = 'This is the about page body';
    $scope.buttontext="Disable this  button by clicking on the checkbox.";
    $scope.setbuttontext=function(){
    	$scope.buttontext="Disable this  button by clicking on the checkbox.";
    }
    $scope.buttonclick=function(){
    	if  ($scope.buttontext== "Disable this  button by clicking on the checkbox.")
    		{$scope.buttontext= "Button is clicked! Click again to reset";}
    	else
    		{$scope.buttontext="Disable this  button by clicking on the checkbox."}

    }
    about.message = Messages.getMessage();
    about.updateMessage = function (m) {
        Messages.setMessage(m);
    };
    $scope.$watch("message",function(newvalue,oldvalue){
    	if (about.message.length>0){console.log("Message =",oldvalue);} else{console.log("Empty String")}
    });*/

    // Load Tables

    $http.get('phone1.json')
        .then(function(response){
            $scope.tabledata=response.data;
        });

}]);