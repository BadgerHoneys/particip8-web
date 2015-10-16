(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainController', ['$scope', function ($scope) {

        	console.log("Main Controller Loaded Up!")

        	$scope.x = "test"

            $scope.testMethod = function () {
                console.log("Test Method Invoked!!");
            };
        }]);
})();