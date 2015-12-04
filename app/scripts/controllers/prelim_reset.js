(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('PrelimResetController', [
            'PasswordReset',
            '$http',
            '$location',
            PrelimResetController
        ]);

    function PrelimResetController(PasswordReset, $http, $location) {

        $http.defaults.headers.common["Auth-Token"] = res["auth_token"];

    	this.email = "";

        this.passwordResetEmail = function(){

            console.log("password reset method invoked");

            PasswordReset.save({email:this.email}, function(res){
                console.log("password reset success");                

                // TODO: The generate_token endpoint will not normally return the
                // token. This must be refactored once emailing works.
                $location.path("/reset_password/" + res['password_reset_token']);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });        

        }
    }
})();