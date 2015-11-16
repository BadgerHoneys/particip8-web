(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('PrelimResetController', [
            'PasswordReset',
            '$location',
            PrelimResetController
        ]);

    function PrelimResetController(PasswordReset, $location) {

    	this.email = "";

        this.passwordResetEmail = function(){
            console.log("Reset email sent!");

            PasswordReset.generate_token({email:this.email}, function(res){
                console.log("password reset success");                

                // TODO: The generate_token endpoint will not normally return the
                // token. This must be refactored once emailing works.
                $location.path("/reset_password/" + res['token']);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });        

        }
    }
})();