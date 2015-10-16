(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainController', ['$scope', '$location', function ($scope, $location) {

        	$scope.user = {
        		username: "",
        		password: ""
        	}

            $scope.login = function () {
            	$location.path('/home');
            };

        }]);
})();