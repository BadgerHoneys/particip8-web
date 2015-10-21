(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainCtrl', ['$scope', '$cookies', '$location', function ($scope, $cookies, $location) {

        	$scope.user = {
        		username: "",
        		password: ""
        	}

            $cookies.put("teacher_id", "2");

            $scope.login = function () {
            	$location.path('/classes');
            };

        }]);
})();