(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HeaderCtrl', ['$scope', '$cookies', '$location', function ($scope, $cookies, $location) {

            $scope.logout = function(){
                console.log("logging out");
            }

        }]);
})();