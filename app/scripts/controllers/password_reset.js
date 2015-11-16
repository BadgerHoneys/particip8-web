(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('PasswordResetController', [
            'PasswordReset',
            '$routeParams',
            '$location',
            PasswordResetController]);

    function PasswordResetController(PasswordReset, $routeParams, $location) {

        console.log("Password Reset Controller Loaded");
        console.log("Token: ");
        console.log($routeParams.token);

        this.user = {
            "email": "",
            "password": "",
            "password_confirm": ""
        }

        var response = PasswordReset.verify_token({token:$routeParams.token});

        response.$promise.then(function(response){
            console.log("Page load response");
            console.log(response);

            //check for status > 299

            this.user.email = response.email;

        }.bind(this));



        this.resetPassword = function(){
            console.log("Resetting Password");
        }

    }
})();