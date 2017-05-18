// angularcomponent.factory.js
'use strict'; 

angular
    .module('myApp.view1')
    .factory('Messages', Messages);

    function Messages() {
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
    };