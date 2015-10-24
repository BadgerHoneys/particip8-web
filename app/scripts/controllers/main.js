(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainCtrl', ['$scope', '$cookies', '$location', 'Sessions', function ($scope, $cookies, $location, Sessions) {

        	$scope.user = {
        		email: "",
        		password: ""
        	}

            $scope.login = function () {        

                Sessions.save($scope.user, function(res){

                    //use cookies to save the generated auth token
                    $cookies.put("auth_token", res["auth_token"]);

                    $location.path("/classes");

                },function(err){
                    alert("There was an error when authenticating with the server...");
                    console.log(err);
                });
            };

            $scope.logout = function(){
                //console.log("logging out");
            }
        }]);
})();