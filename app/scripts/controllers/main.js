(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('MainController', ['Sessions', '$cookies', '$location', '$http', MainController]);
    
    function MainController(Sessions, $cookies, $location, $http) {
        
        $http.defaults.headers.common["Auth-Token"] = res["auth_token"];
        

    	this.user = {
    		email: "",
    		password: ""
    	}

        this.login = function () {        

            console.log("login invoked")
            console.log(this.user)

            Sessions.save(this.user, function(res){

                console.log(res["auth_token"])

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