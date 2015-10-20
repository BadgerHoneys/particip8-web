(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

        	$scope.user = {
        		username: "",
        		password: ""
        	}

            $scope.login = function () {
            	$location.path('/classes');
            };

        }]);
})();