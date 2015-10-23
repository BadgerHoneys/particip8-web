(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainCtrl', ['$scope', '$cookies', '$location', 'Users', function ($scope, $cookies, $location, Users) {

        	$scope.user = {
        		email: "",
        		password: ""
        	}

            var user_id = $cookies.get("user_id")

            //TODO: replace this check with a POST providing the session_token
            if(user_id){

                $location.path("/classes");

                //TODO: use this new url when app.js implemented
                //$location.path("/classes/" + user_id);
                //Also, refactor into helper method
            }

            $scope.login = function () {        
                Users.authenticate($scope.user, function(user){
                    if(user.id){
                        //write the cookie
                        $cookies.put("user_id", user.id)

                        //TODO: use this new url when app.js implemented
                        //$location.path("/classes/" + user_id);
                        //Also, refactor into helper method
                        $location.path("/classes");
                    }
                },function(err){
                    alert("There was an error with authentication\nPlease provide a valid email and password");
                });

            };

            $scope.logout = function(){
                //console.log("logging out");
            }

        }]);
})();