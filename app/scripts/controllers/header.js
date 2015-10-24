(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HeaderCtrl', ['$scope', '$cookies', '$location', function ($scope, $cookies, $location) {

            $scope.logout = function(){
                console.log("logging out");
            
                //clear the cookie
                $cookies.remove("user_id");

                console.log("user_id cookie cleared")

                $location.path("/");
            }

        }]);
})();