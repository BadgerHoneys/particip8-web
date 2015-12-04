(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainController', ['Sessions', '$cookies', '$location', '$http', MainController]);
    
    function MainController(Sessions, $cookies, $location, $http) {
        
    	this.user = {
    		email: "",
    		password: ""
    	}

        this.login = function () {        

            Sessions.save(this.user, function(res){

                //use cookies to save the generated auth token
                $cookies.put("auth_token", res["auth_token"]);

                $http.defaults.headers.common["Auth-Token"] = res["auth_token"];

                $location.path("/classes");

            },function(err){
                alert("There was an error when authenticating with the server...");
                console.log(err);
            });
        }.bind(this);

        this.logout = function(){
            //console.log("logging out");
        }
    }
})();