(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainCtrl', ['$scope', '$cookies', '$location', 'Sessions', function ($scope, $cookies, $location, Sessions) {

        	$scope.user = {
        		email: "",
        		password: ""
        	}

            var user_id = $cookies.get("user_id");

            $cookies.remove("token_id");

            //TODO: replace this check with a POST providing the session_token
            if(user_id){

                $location.path("/classes");

                //TODO: use this new url when app.js implemented
                //$location.path("/classes/" + user_id);
                //Also, refactor into helper method
            }

            $scope.login = function () {        

                Sessions.save($scope.user, function(res){
                    console.log("response...");
                    console.log(res);


                    // replace the 2nd argument "token" with the token id generated from logging the user in.
                    $cookies.put("token_id", res["auth_token"]);

                    $location.path("/classes");

                },function(err){
                    alert("There was a 500 error when authenticating with the server...");
                    console.log(err);
                });
            };

            $scope.logout = function(){
                //console.log("logging out");
            }

        }]);
})();